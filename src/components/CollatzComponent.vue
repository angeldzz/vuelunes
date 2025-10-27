<template>
  <div>
    <h1>Collatz</h1>
    <input type="number" v-model="numero">
    <div v-if="numero > 0">
      <h3>Secuencia de Collatz:</h3>
      <p> {{ $filters.collatz(numero) }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name:"CollatzComponent",
    data(){
        return{
            numero:1,
        }
    }
}
</script>