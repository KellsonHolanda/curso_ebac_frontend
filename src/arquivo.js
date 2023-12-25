class Informacoes{

    constructor (nome, nota){
        this.nome=nome;
        this.nota=nota;
    }

}
const aluno1 = new Informacoes("Fulano", 5);
const aluno2 = new Informacoes("Cicrano", 8);
const aluno3 = new Informacoes("Beltrana", 9);
const array = [aluno1, aluno2, aluno3];

function resultado(){
    let i = 0;
    while (i < array.length){
        return array.map(function(item) {
            if (item.nota>6){
                console.log(`O(a) aluno(a) ${item.nome} passou com nota ${item.nota}.`)
            };
    })
    }
}

resultado();