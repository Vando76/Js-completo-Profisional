const btn_soma=document.querySelector("#btn_soma")
const btn_subtracao=document.querySelector("#btn_subtracao")
const btn_multiplicacao=document.querySelector("#btn_multiplicacao")
const btn_divisao=document.querySelector("#btn_divisao")
const res=document.querySelector("#res")

const op=[
    ()=>{
        const val=[document.getElementById("valor 1").value,document.getElementById("valor 2").value]res.value=Number(val[0]+Number[1])
    },
    ()=>{
        const val=[document.getElementById("valor 1").value,document.getElementById("valor 2").value]res.value=Number(val[0]-Number[1])
    },
    ()=>{
        const val=[document.getElementById("valor 1").value,document.getElementById("valor 2").value]res.value=Number(val[0]*Number[1])
    },
    ()=>{
        const val=[document.getElementById("valor 1").value,document.getElementById("valor 2").value]res.value=Number(val[0]/Number[1])
    }
]
btn_soma.addEventListener("click",op[0])
btn_subtracao.addEventListener("click",op[1])
btn_multiplicacao.addEventListener("click",op[2])
btn_divisao.addEventListener("click",op[3])
