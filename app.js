import express from 'express'

/*criando primeiro endpoint*/


//rodando o express
const servidor = express();


//criando endpoint

servidor.get('/helloword', (req, resp) => {
    //codigo do endpoint
    resp.send('helloword mané')
})





//vinculando a api com uma porta
servidor.listen(5001, () => console.log("API SUBIU NA PORTA 5001"));