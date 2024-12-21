import { Router , Request, Response} from "express";
import { overwriteFile } from "../helpers";
import vegetables from "../vegetables.json";
import { Product } from '../interfaces';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.status(200).json(vegetables);
})

routes.get('/:id', (req: Request, res: Response) => {
    let vegetable = vegetables.filter((vegetable) => +req.params.id === vegetable.id )
    if (vegetable.length !== 0 ){
        res.status(200).json(vegetables[0]); 
    } else {
        res.status(404).json({message : "product not found"});
    } 
})

routes.post('/add', (req: Request, res: Response) => {
    let newProduct: Product[] = [...vegetables, req.body];
    overwriteFile('vegetables.json', newProduct)
    .then((response) => res.status(200).json({ message: response}))
    .catch((err) => res.status(400).json({ message: err}))
})

export default routes;
