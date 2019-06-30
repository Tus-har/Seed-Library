import {ISeeders} from "../../types/ISeeders";
import {User} from "../entity/User";

export class UserSeed implements ISeeders<User>{
    async run ( ): Promise<User[]> {
        const users = [] ;
        for (let i = 0 ; i < 1 ; i++){
            const user = User.create( {
                name : "Tushar" ,
                password : "pass123" ,
                sex : "Male" ,
                email : "tsrvats16@gmail.com",
                role : "Admin",
            });
            users.push(user) ;
        }
        return users ;
    }
}
