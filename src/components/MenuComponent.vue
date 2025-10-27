<template>
  <ul class="menu-nav">
    <li class="menu-item"><router-link class="menu-link" to="/">Home</router-link></li>
    <li class="menu-item"><router-link class="menu-link" to="/collatz">Collatz</router-link></li>
    <li class="menu-item"><router-link class="menu-link" to="/tablaMultiplicar">Tabla Multiplicar</router-link></li>
  </ul>
</template>

<script>
export default {
    name:"MenuComponent"
}
</script>
<style scoped>
@import url("../assets/css/estilos.css");
</style>