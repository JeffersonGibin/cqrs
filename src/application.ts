import express from 'express';
import router from './domains/account/presentation/http/routes';
import { DatabaseTools } from './database';

export const Application = () => {
    return {
        run: async () => {
            const app = express();
            app.use(express.json());
            app.use('/', router);            

            DatabaseTools.syncWithInstanceRead();
            
            app.listen(3000, () => {
                console.log('Server running on http://localhost:3000');
            });
        }
    }
}

