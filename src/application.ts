import express from 'express';
import router from './presentation/routes';
import { DatabaseTools } from './database';

export const Application = () => {
    return {
        run: async () => {
            const app = express();
            app.use(express.json());
            app.use('/', router);            

            // Sincroniza os dados para a simulação do outro banco
            // DatabaseTools.sync();
            
            app.listen(3000, () => {
                console.log('Server running on http://localhost:3000');
            });
        }
    }
}

