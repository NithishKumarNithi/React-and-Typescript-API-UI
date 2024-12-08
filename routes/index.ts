import { Router , Request, Response} from "express";
import products from './products';
import vegetables from './vegetables';
import nonVegetables from './non-vegetables';
import fruits from './fruits';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.status(200).send('Welcome for node typescript api developement');
})

routes.use('/products', products);
routes.use('/vegetables', vegetables);
routes.use('/non-vegetables', nonVegetables);
routes.use('/fruits', fruits);

export default routes;



