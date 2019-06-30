import fs from "fs";
import path from "path";

export class ConnectionOptionsReader {
    protected config: any;
    constructor(protected param: { configName: any; root: string }) {
        this.config =  JSON.parse(fs.readFileSync(path.join(this.param.root , this.param.configName), "utf8"));
    }

    async getSeedDir(): Promise<string> {
        return path.join(this.param.root , this.config.seedsDir) ;
    }

    async getEntityDir(): Promise<string[]>{
        return this.config.entities.map((entity) => {
            return path.join(this.param.root , entity)  ;
        });
    }

}