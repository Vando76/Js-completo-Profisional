const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btnpesquisar=document.querySelector("#btnpesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=["html","css","php"]

p_array.innerHTML="{"+elementos_array+"}"

btnpesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML="Valor não encontrado "
    elementos_array.find((e,i)=>{
        if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML="Valor encontrado " + e + " na posição " + i
            return e
        }

    })

})