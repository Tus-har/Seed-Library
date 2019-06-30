import {Seeders} from "../../types/Seeders";
import {Meal} from "../entity/Meal";

export class MealSeed implements Seeders<Meal>{
    async run ( ): Promise<{data: Meal[] , type: string}> {
        const meals = [] ;
        for (let i = 0 ; i < 1 ; i++){
            const meal = {
                name : "meal1" ,
                calory : 25
            };
            meals.push(meal) ;
        }
        return { data : meals , type : "Meal" } ;
    }
}
