import {Seeders} from "../../types/Seeders";
import {Home} from "../entity/Home";

export class HomeSeed implements Seeders<Home>{
    async run ( ): Promise< { data: Home[] , type: string}> {
        const homes = [] ;
        for (let i = 0 ; i < 1 ; i++){
            const home = {
                name : "home1" ,
                location : "gurgaon"
            };
            homes.push(home) ;
        }

        return  { data: homes , type : "Home"} ;
    }
}
