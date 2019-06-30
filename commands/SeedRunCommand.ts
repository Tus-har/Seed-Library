import yargs from "yargs";
import process from "process";
import {ConnectionOptionsReader} from "./ConnnectionOptionsReader";
import glob from "glob";
import {Connection, createConnection} from "typeorm";
import chalk from "chalk";

export class SeedRunCommand implements yargs.CommandModule{
    command = "seed:run" ;
    aliases = "seeds:run" ;
    describe: string | false = "This command will execute Seeds" ;

    builder(args: yargs.Argv) {
        return args
            .option("connection", {
                alias: "c",
                default: "default",
                describe: "Name of the connection on which run a query."
            })

            .option("config", {
                alias: "f",
                default: "ormconfig.json",
                describe: "Name of the file with connection configuration."
            })

            .option("name", {
                alias: "n",
                describe: "Name of the seed file to be executed."
            });

    }

    async handler(args: yargs.Arguments) {

        try {
            const connectionOptionsReader = new ConnectionOptionsReader({
                root: process.cwd(),
                configName: args.config as any
            });

            const seedsDir = await connectionOptionsReader.getSeedDir();
            const entityDir = await connectionOptionsReader.getEntityDir() ;

            const seedFilesDir = await glob.sync(seedsDir);
            let entityFilesDir = [] ;
            entityDir.map((dir) => {
                 entityFilesDir = [ ...entityFilesDir , ...glob.sync(dir) ];
            });

            let seedClasses = {} ;
            seedFilesDir.map((file) => {
                seedClasses = {...seedClasses , ...require(file) } ;
            });

            let entityClasses = {} ;
            entityFilesDir.map((file) => {
                entityClasses = {...entityClasses , ...require(file) } ;
            });

            args.connection = await createConnection() ;

            for ( const key in seedClasses)
            {
                const { data= [] , type= "" } = await  (new seedClasses[key]).run() ;
                console.log(data) ;
                await entityClasses[type].save(data);
            }

        } catch (err) {
            if (args.connection) await (args.connection as Connection).close();
            console.log(chalk.black.bgRed("Error during seeds run:"));
            console.error(err);
            process.exit(1);
        }
        console.log(chalk.black.bgGreenBright("Seeds ran successfully"));
        process.exit(0);
    }

}