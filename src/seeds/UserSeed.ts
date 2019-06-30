import {Seeders} from "../../types/Seeders";
import {User} from "../entity/User";

export class UserSeed implements Seeders<User>{
    async run ( ): Promise<{data: User[] , type: string}> {
        const users = [] ;
        for (let i = 0 ; i < 1 ; i++){
            const user =  {
                name : "Tushar" ,
                password : "pass123" ,
                sex : "Male" ,
                email : "tsrvats16@gmail.com",
                role : "Admin",
            };
            users.push(user) ;
        }
        return {data: users , type: "User"} ;
    }
}
