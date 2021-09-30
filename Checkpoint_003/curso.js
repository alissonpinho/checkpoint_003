let listaEstudantes = require("./index");
let estudantes = require("./alunos");
//console.log(listaEstudantes);

// function Cursos(nomeCurso_, notaAprovacao_, faltasMaximas_) {
//     this.nomeCurso = nomeCurso_;
//         this.notaAprovacao = notaAprovacao_;
//         this.faltasMaximas = faltasMaximas_;
//         this.listaEstudantes = listaEstudantes
// };


let cursos = {
    nomeCurso: "Programação Imperativa",
    notaAprovacao: 6,
    faltasMaxima: 3,
    listaEstudantes: listaEstudantes,
    alunoNovo: function (aluno_, faltas_, notas_) {
        this.listaEstudantes.push(new estudantes.AddAluno(aluno_, faltas_, notas_))
    },
    aprovacao: function (aluno_) {
        if ((aluno_.calcularMedia() >= this.notaAprovacao) && (aluno_.faltas < this.faltasMaxima)) {
            return true;
        } else if ((aluno_.faltas === this.faltasMaxima) && (aluno_.calcularMedia() > this.notaAprovacao * 1.1)) {
            return true;
        } else {
            return false;
        }
    },
    resultados: function () {
        let lista = [];
        for (let estudante of this.listaEstudantes) {
            lista.push(this.aprovacao(estudante));
        }
        return lista;
    }
};

//cursos.alunoNovo("Luna", 2, [3, 5, 9]);

//console.log(cursos.listaEstudantes);

//let msg = cursos.aprovacao(cursos.listaEstudantes[0]);
//console.log(msg);

let listaTrueFalse = cursos.resultados();
console.log(listaTrueFalse);

module.exports = cursos;