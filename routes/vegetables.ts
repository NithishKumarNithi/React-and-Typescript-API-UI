import { Router , Request, Response} from "express";
import vegetables from '../vegetables.json';

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

export default routes;
