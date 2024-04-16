const caixa=document.querySelector("#caixa")

const carros=["Onix","Gol","Santana","Corsa"]
let ul=`<ul>`
carros.map((el)=>{
    ul+=`<li>${el}</li>`

})
ul+=`</ul>`



caixa.innerHTML=ul