import { Router , Request, Response} from "express";
import nonVegetables from '../non-vegetables.json';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.status(200).json(nonVegetables);
})

routes.get('/:id', (req: Request, res: Response) => {
    let nonVegetable = nonVegetables.filter((nonVegetable) => +req.params.id === nonVegetable.id )
    if (nonVegetable.length !== 0 ){
        res.status(200).json(nonVegetable[0]); 
    } else {
        res.status(404).json({message : "product not found"});
    } 
})

export default routes;