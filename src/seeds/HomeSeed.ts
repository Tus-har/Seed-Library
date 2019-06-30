import {ISeeders} from "../../types/ISeeders";
import {Home} from "../entity/Home";

export class HomeSeed implements ISeeders<Home>{
    async run ( ): Promise<Home[]> {
        const homes = [] ;
        for (let i = 0 ; i < 1 ; i++){
            const home = Home.create({
                name : "home1" ,
                location : "gurgaon"
            });
            homes.push(home) ;
        }

        return  homes ;
    }
}
