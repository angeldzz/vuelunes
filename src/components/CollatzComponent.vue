<template>
  <div>
    <h1>Collatz</h1>
    <input type="number" v-model="numero">
      <h3>Secuencia de Collatz:</h3>
      <div v-html="$filters.collatz(numero)"></div>
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