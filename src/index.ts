import { Application } from "./application";

try {
    Application()
        .startJobs()
        .run();
} catch (error:any) {
    console.log(error.message)
}

process.on('SIGINT', () => {
    console.log(`[${ process.pid}]: Finishing process...`);
    process.exit();
});

process.on('SIGILL', () => {});