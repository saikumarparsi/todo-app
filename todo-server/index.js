const server = require('./api/server')



const PORT=5000;
const HOST = 'localhost'


server.listen(PORT, ()=>console.log(`server is started at port ${HOST}: ${PORT}`))