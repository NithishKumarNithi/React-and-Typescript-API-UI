import express, { Express } from 'express';
import routes from '../routes';

const app: Express = express();
const PORT = '4001';

app.use(routes);

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
})

