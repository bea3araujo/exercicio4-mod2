/*1 - crie uma função que exiba uma mensagem no console

2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

5 - crie uma função que retorne o triplo do número recebido no parâmetro da função*/

function ex1 (){
    console.log("Boa noite, familia. Escutem Tasha & Tracie")
}
ex1()

function ex2 (nome){
    console.log(`Eu me chamo ${nome}`)
}
ex2("Beatriz")

function ex3 (name, idade, estilomusical){
    console.log(`Eu sou a ${name}, tenho ${idade} de idade e gosto muito de ${estilomusical}`)
}
ex3("Beatriz", 23, "samba")

function ex4 (filme, musica){
    console.log(`Não tenho filmes preferidos, pq nao sei escolher, mas o ultimo que vi foi ${filme} ele é loco e tem na Netflix! Músicas são iguais filmes, mas tem uma que acho extremamente linda que é ${musica} cantada pelo Meta-Meta`)
}
ex4("'O homem cordial'", "'Trovoa'")

function ex5 (x){
    console.log(x * 2)
}
ex5(20)
