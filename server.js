const http = require('http')
const server = http.createServer((req,res)=>{
    let met =req.method;
    if(met=='GET'){
        res.end("Hola soy un servidor de http desde Nodejs método GET")
    }else if(met=='POST'){
        res.end("Hola soy un servidor de http desde Nodejs método POST")
    }else if(met=='DELETE'){
        res.end("Hola soy un servidor de http desde Nodejs método DELETE")
    }
    else if(met=='PUT'){
        res.end("Hola soy un servidor de http desde Nodejs método PUT")
    }
})
const PORT = process.env.PORT || 3000

server.listen(PORT,()=>{
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
})