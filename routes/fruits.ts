import { Router , Request, Response} from "express";
import fruits from '../fruits.json';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.status(200).json(fruits);
})

routes.get('/:id', (req: Request, res: Response) => {
    let fruit = fruits.filter((fruit) => +req.params.id === fruit.id )
    if (fruit.length !== 0 ){
        res.status(200).json(fruit[0]); 
    } else {
        res.status(404).json({message : "product not found"});
    } 
})

export default routes;