import express from 'express'

/*criando primeiro endpoint*/


//rodando o express
const servidor = express();


//criando endpoint

servidor.get('/helloword', (req, resp) => {
    //codigo do endpoint
    resp.send('helloword mané')
})

servidor.get('/mensagem/boasvindas', (req, resp) => {
    //codigo do endpoint
    resp.send('olá sejam bem vindos')
})

servidor.get('/v2/mensagem/boasvindas', (req, resp) =>{
    resp.send('Que bom que você está aqui!')
})

servidor.get('/mensagem/ocupado', (req, resp) => {
    resp.send('Estou ocupado no momento')
})

servidor.get('/mensagem/ocupado/recado', (req,resp) => {
    resp.send('Estou ocupado, deixe uma mensagem...')
})


servidor.get('/calculadora/:n1/:n2', (req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 + n2;
    resp.send(`A soma de ${n1} com ${n2} é igual a: ${soma} `)
})

servidor.get('/calculadoraSubtrair/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let sub = n1 - n2;
    resp.send(`A subtração de ${n1} e ${n2} é igual a ${sub}`)
})

servidor.get('/calculadoraMultiplicar/:n1/:n2', (req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let multiplicar = n1 * n2;
    resp.send(`A multiplicação de ${n1} com ${n2} é igual a ${multiplicar}`)
})

servidor.get('/calculadoraDividir/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let divisao = n1 / n2;
    resp.send(`A divisão de ${n1} com ${n2} é igual a ${divisao}`)
})



//vinculando a api com uma porta
servidor.listen(5001, () => console.log("API SUBIU NA PORTA 5001"));