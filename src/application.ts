import express from 'express';
import router from './domains/account/presentation/http/routes';
import { DatabaseTools } from './database';
import { fork } from 'child_process'
import path from 'path';
import { start } from 'repl';

export const Application = () => {
    const createJob = (time: number, file: string, detached?: boolean) => {
        const job = fork(file, {
            detached,
            stdio: 'inherit' // Show log child process
        });

        // sent event to child process
        job.send({
            event: 'start',
            data: time
        });

        console.log(`[${new Date().toLocaleString()}]: Job created!`);

        return job;
    }

    const apps = {
        startJobs: () => {
            const fullPath = path.join(__dirname, 'job.js');
            createJob(2_000, fullPath, false);
            return apps;
        },
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

    return apps;
}

