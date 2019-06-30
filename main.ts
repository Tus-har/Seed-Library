import yargs from "yargs" ;
import yargonaut from "yargonaut" ;
import {SeedRunCommand} from "./commands/SeedRunCommand" ;
import "reflect-metadata" ;

yargs
    .usage("Usage: $0 <command> [options]")
    .command(new SeedRunCommand())
    .recommendCommands()
    .demandCommand(1)
    .strict()
    .alias("v", "version")
    .help("h")
    .alias("h", "help")
    .argv;

yargonaut
    .style("blue")
    .style("yellow", "required")
    .helpStyle("green")
    .errorsStyle("red");
