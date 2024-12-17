<script setup>
import Nav from "./components/Nav.vue"

//importamos el manejo de rutas que creamos en index.js
import { RouterView } from "vue-router";

</script>

<template>
    <div class="POKEDEX">
      <h1>POKEDEX</h1>
    </div>
    <Nav />
    <RouterView/>
</template>

<style scoped>
.POKEDEX {
  text-align: center;
  background-color: #3b4cca; 
  color: #ffffff; 
  padding: 20px;
  border-bottom: 5px solid #ffcb05; 
}

h1 {
  margin: 0;
  font-size: 2.5rem;
  letter-spacing: 2px;
}
</style>

