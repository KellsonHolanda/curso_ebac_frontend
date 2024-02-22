<script setup>
import { reactive } from 'vue';

const objeto = {
  nome: "João",
  profissão: "desenvolvedor",
  
}

function dizOi(outroNome) {
  return `Bem vindo, ${objeto.nome}! Você trabalhará com a ${outroNome} no desenvolvimento do projeto. `
} 

const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferido: 30,
  nomes: ["Joana", "Paula", "Gian"],
  nomeAdicionado: ""
  
} 
);

function valorAtual (){
  return estado.saldo - estado.transferido;
}

function validador(){
  return estado.saldo >= estado.transferido; 
}

function incrementar() {
  estado.contador++;
}

function alterarEmail(evento){
  estado.email = evento.target.value;
}

function adicionarNomes(e){
  estado.nomeAdicionado = e.target.value;
}

function cadatrarNome(){
  if(estado.nomeAdicionado.length >= 3){
  estado.nomes.push(estado.nomeAdicionado)
  } else{
    alert("Número de caracteres insificiente.")
  }

}


</script>

<template>
  <h1> {{ objeto.nome }}</h1>
  <h2> {{ dizOi("Joana") }}</h2>
  <h2>{{ estado.contador }}</h2>
  <button @click="incrementar" type="button" >Aumentar</button>

  <h2>{{ estado.email }}</h2>
  <input type="email" @change="alterarEmail">

  <br>
  O saldo inicial é de: {{ estado.saldo }} <br>
  O valor transferido é de: {{ estado.transferido }} <br>
  O valor atual é de: {{ valorAtual() }}
  <br>
  <input type="number" :class="{invalido: !validador()}" placeholder="digite o valor a ser transferido" @keyup="evento => estado.transferido = evento.target.value">
  <button type="button" v-if="validador()">Transferir</button>
  <span v-else>Não é possível transferir</span>

  <br>
  <ul>
    <li v-for="nome in estado.nomes">
    {{ nome }}
    </li>
  </ul>
  <input  type="text" @keyup="adicionarNomes">
  <button type="button" @click="cadatrarNome">Cadastrar Nome</button>
  
</template>

<style scoped>
.invalido{
  border-color: red;
  outline-color: red;
}
</style>

