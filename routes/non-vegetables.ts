import { Router , Request, Response} from "express";
import nonVegetables from '../non-vegetables.json';
import { overwriteFile } from "../helpers";
import { Product } from '../interfaces';

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

routes.post('/add', (req: Request, res: Response) => {
    let newProduct: Product[] = [...nonVegetables, req.body];
    overwriteFile('non-vegetables.json', newProduct)
    .then((response) => res.status(200).json({ message: response}))
    .catch((err) => res.status(400).json({ message: err}))
})

export default routes;