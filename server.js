const http = require('http')
const server = http.createServer((req,res)=>{
    res.end("Hola soy un servidro de http desde Nodejs")
})
const PORT = process.env.PORT || 3000

server.listen(PORT,()=>{
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
})