<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";


const route = useRoute();

//isHome: boolean
//lo utilizamos para verificar si estamos en Home, pues en dicho caso, el botón home debe desaparecer
const isHome = computed(() => route.path === "/");
</script>

<template>
  <div v-if="!isHome">
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  margin: 10px;
}
a {
  display: flex;
  padding: 10px 20px;
  font-weight: bold;
}
a:hover {
  background-color: #24b84c; 
  color: #ffffff;
}
</style>