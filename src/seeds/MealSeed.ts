import {ISeeders} from "../../types/ISeeders";
import {Meal} from "../entity/Meal";

export class MealSeed implements ISeeders<Meal>{
    async run ( ): Promise<Meal[]> {
        const meals = [] ;
        for (let i = 0 ; i < 1 ; i++){
            const meal = Meal.create({
                name : "meal1" ,
                calory : 25
            });
            meals.push(meal) ;
        }
        return meals ;
    }
}
