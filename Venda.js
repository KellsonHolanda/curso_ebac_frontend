function Venda(tipo) {
    this.tipo = tipo;
    this.chamarTipo = function () {
        console.log("A venda é do tipo: " + tipo);
    };
}
function Carro(tipo, preco, cor, ano){
    Venda.call(this, tipo);
    this.cor = cor;
    this.ano = ano;
    let _preco = preco;
    this.retornarValor = function(){
        return _preco;
    };
    this.atribuirValor = function (){
        if (tipo === 'corporativa'){
            const novoValor = _preco - (_preco*10/100);
            return _preco = novoValor;
        } else{
            return _preco;
        }
    };
    
}
function Moto(tipo, preco, cor, ano){
    Venda.call(this, tipo);
    this.cor = cor;
    this.ano = ano;
    let _preco = preco;
    this.retornarValor = function(){
        return _preco;
    };
    this.atribuirValor = function (){
        if (tipo === 'corporativa'){
            const novoValor = _preco - (_preco*10/100);
            return _preco = novoValor;
        } else{
            return _preco;
        }
    };

}
const venda1 = new Carro("corporativa", 8000, "azul", 2023 );
const venda2 = new Moto("corporativa", 3000, "branco", 2022 );
const venda3 = new Carro("particular", 9000, "azul", 2022);
const venda4 = new Moto("particular", 4000, "amarelo", 2023 );

console.log("-------------venda1-----------------------------------")
venda1.chamarTipo();
venda1.atribuirValor();
console.log(`Assim, o preço da venda1 é de: R$${venda1.retornarValor()}.`);

console.log("-------------venda3-----------------------------------")
venda3.chamarTipo();
venda3.atribuirValor();
console.log(`Assim, o preço da venda3 é de: R$${venda3.retornarValor()}.`);