const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn_copiar")
const btnr=document.querySelector("#btn_retornar")
const todoscursos=[...document.querySelectorAll(".curso")]

todoscursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso=evt.target
        curso.classList.toggle("selecionado")

    })

})

btn.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    //console.log(cursosSelecionados)
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)

    })

    
})





