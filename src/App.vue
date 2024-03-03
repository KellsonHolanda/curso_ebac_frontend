<script setup>
import { reactive } from 'vue';

const estado = reactive({
  filtro: '',
  contador: 0,
  segundo: 0,


});

function somar() {
  return parseInt(estado.contador) + parseInt(estado.segundo);
}
function subtrair() {
  return parseInt(estado.contador) - parseInt(estado.segundo);
}
function multiplicar() {
  return parseInt(estado.contador) * parseInt(estado.segundo);
}
function dividir() {
  return parseInt(estado.contador) / parseInt(estado.segundo);
}
const filtroUtilizado = () => {
  const filtro = estado.filtro;
  switch (filtro) {
    case 'soma':
      return somar();
    case 'subtracao':
      return subtrair();
    case 'multiplicacao':
      return multiplicar();
    case 'divisao':
      return dividir();

  }
}
</script>

<template>
  <header class="cabecalho">
    <h1>Calcular dois números</h1>
  </header>

  <div class="body">
    <input type="number" @change="evento => estado.contador = evento.target.value" placeholder="Primeiro Número">
    <input type="number" @change="evento => estado.segundo = evento.target.value" placeholder="Segundo Número">
    <br>
    <span>Escolha a operação:</span>
    <select v-model="selected" @change="evento => estado.filtro = evento.target.value">
      <option value="soma" id="soma">Somar</option>
      <option value="subtracao">Subtrair</option>
      <option value="multiplicacao">Multiplicar</option>
      <option value="divisao">Dividir</option>
    </select>
    <br>
    <br>
  </div>
  <br>
  <div class="resultado">
    O Resultado é: <b>{{ filtroUtilizado(estado.filtro) }}</b>
  </div>
</template>

<style scoped>
.cabecalho {
  display: ruby-text;
}
.body {
  display: grid;
  gap: 5px;
  justify-content: center;
}
.resultado{
  text-align: center;
}


</style>
