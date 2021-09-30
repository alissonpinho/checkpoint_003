

function AddAluno(nome_, faltas_, notas_) {
    this.nome = nome_;
    this.faltas = faltas_;
    this.notas = notas_;
    this.calcularMedia = () => {
        let media = this.notas.reduce((previousValue, currentValue) => previousValue + currentValue) / this.notas.length;
      
        return media;
        // let somaNotas = 0;
        // for(let nota in aluno.notas){
        //     somaNotas = somaNotas + aluno.notas[nota];
        // }
        // let retorno = somaNotas/aluno.notas.length;
        // return retorno;
    };
    this.calcularFaltas = () => this.faltas += 1;
}

module.exports = {
    AddAluno: AddAluno
};
//console.log(estudantes.calcularMedia)


