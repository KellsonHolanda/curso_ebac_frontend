<script setup>
import { reactive } from 'vue';

const objeto = {
  nome: "João",
  profissão: "desenvolvedor"
}

function dizOi(outroNome) {
  return `tudo bem, ${objeto.nome}, e ${outroNome} `
}

// let contador = 0;
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferido: 30,
  
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

</script>

<template>
  <h1> {{ objeto.nome }}</h1>
  <h2> {{ dizOi("ok.ok") }}</h2>
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
</template>

<style scoped>
.invalido{
  border-color: red;
  outline-color: red;
}
</style>

