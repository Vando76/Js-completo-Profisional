const pessoa={
    nome:"Vando",
    canal:"CFB Cursos",
    curso:"Javascript",
    aulas:{
        aula01:"Indrodução",
        aula02:"Variáveis",
        aula03:"Condicional"
    }


}

const string_pessoa='{"nome":"Vando","canal":"CFB Cursos","curso":"Javascript","aulas":{"aula01":"Indrodução","aula02":"Variáveis","aula03":"Condicional"}'

const s_json_pessoa=JSON.stringify(pessoa)//convert objeto em String JASON
const o_json_pessoa=JSON.parse(s_json_pessoa)//convert String JASON em objeto

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)