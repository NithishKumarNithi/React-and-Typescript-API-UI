import { Router , Request, Response} from "express";
import products from '../products.json';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.status(200).json(products);
})

routes.get('/:id', (req: Request, res: Response) => {
    let product = products.filter((product) => +req.params.id === product.id )
    if (product.length !== 0 ){
        res.status(200).json(product[0]); 
    } else {
        res.status(404).json({message : "product not found"});
    } 
})

export default routes;
