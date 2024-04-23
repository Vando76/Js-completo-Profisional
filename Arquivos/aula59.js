class Pessoa{
    constructor(pnome,pidade){
        this.nome=pnome
        this.idade=pidade
        
    }
    getNome(){
        return this.nome
    }
    getidade(){
        return this.idade
    }
   
    setNome(nome){
        this.nome=nome
    }
    setidade(idade){
        this.idade=idade
    }
   
    
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(".....................")
    }
}

let c1=new Carro("Rapidão",1)
let c2=new Carro("Super Luxo",3)
let c3=new Carro("Bombadão",4)
let c4=new Carro("Carrego tudo",2)

c1.setNome("Super Veloz")
c1.setVelmax(500)
c1.info()
//c2.info()
//console.log(c1.getInfo())
