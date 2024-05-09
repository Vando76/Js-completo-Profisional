const f_tipoMilitar=document.querySelector("#f_tipoMilitar")
const f_tipoNormal=document.querySelector("#f_tipoNormal")
const f_blindagem=document.querySelector("#f_blindagem")
const f_munição=document.querySelector("#f_munição")
const carros=document.querySelector("#carros")
const btn_addCarro=document.querySelector("#btn_addCarro")

let a_carros[]

f_tipoMilitar.addEventListener("click",(evt)=>{
    f_blindagem.removeAttribute("disabled")
    f_munição.removeAttribute("disabled")

})
f_tipoNormal.addEventListener("click",(evt)=>{
    f_blindagem.value=0
    f_munição.value=0
    f_blindagem.setAttribute("disabled","disabled")
    f_munição.setAttribute("disabled","disabled")  
})

const gerenciarexibicaocarros=()=>{
    carros.innerHTML=""
    a_carros.forEach((c)=>{
        const div=document.createElement("div")
    div.setAttribute("class","carro")
    div.innerHTML=c.nome
    carros.appendChild(div)
    }) 

}

btn_addCarro.addEventListener("click",()=>{
    gerenciarexibicaocarros()

})
class Carro{//classe PAI / BASE 
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor

    }
}

class Militar extends Carro{//Classe FILHO
    constructor(nome,portas,blindagem,munição){
        super(nome,portas)
        this.blindagem=blindagem
        this.munição=munição
        this.setCor("Verde")
    }
    atirar=function(){
        if(this.munição>0){
            this.munição--
        }
    }

}

class Utilitario extends Carro{
    constructor(nome,portas,lugares){
        super(nome,portas)
        this.lugares=lugares
    }
}
const c1=new Carro("Normal",4)
c1.ligar()
c1.setCor("Preto")

const c2=new Militar("Lutador",1,100,50)
//c2.setCor("Azul")
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

const c3=new Utilitario("Trabalhador",4,5)
c3.setCor("Branco")



console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("--------------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.munição}`)
console.log(`Cor: ${c2.cor}`)
console.log("--------------------")

console.log(`Nome: ${c3.nome}`)
console.log(`Portas: ${c3.portas}`)
console.log(`Ligado: ${(c3.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c3.vel}`)
console.log(`Lugares: ${c3.lugares}`)
console.log(`Cor: ${c3.cor}`)
console.log("--------------------")