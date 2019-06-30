import * as yargs from "yargs" ;
import * as process from "process";
import {SeedRunCommand} from "./commands/SeedRunCommand" ;
import "reflect-metadata" ;

process.argv.push("seed:run") ;
process.argv.length = 3 ;
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

require("yargonaut")
    .style("blue")
    .style("yellow", "required")
    .helpStyle("green")
    .errorsStyle("red");


