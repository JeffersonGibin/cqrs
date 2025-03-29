process.on('message', (msg: any) => {
    if (msg.event === 'start') {
        console.log(`[${new Date().toLocaleString()}]: Processo filho iniciou`);
        const jobID = setInterval(() => {
            console.log(`[${new Date().toLocaleString()}]: Job executed!`);
        }, msg.data)
    }
});


