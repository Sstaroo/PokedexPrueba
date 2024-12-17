<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const search = ref("")
const pokemonData = ref(null);
const errorMessage = ref("");

//getPokemon: ->
//maneja los mensajes de error si es que el input ingresado no es el correcto
//y actualiza la página para redireccionar a la página de detalles del pokemon pedido
const getPokemon = async () => {
    if (!search.value) {
        errorMessage.value = "Please, input a name.";
        pokemonData.value = null;
        return;
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.value.toLowerCase()}`);
    if (!response.ok) {
      errorMessage.value = "Not found";
    }

    const data = await response.json();
    if (data.id > 150) {
      errorMessage.value = "sorry, but only the first 150 pokemon are allowed";
      return;
    }

    router.push(`./Detail/${data.id}`);
    errorMessage.value = "";
}
</script>

<template>
    <div class="container">
        <input type="text" v-model.trim="search" placeholder="Search...">
        <button @click="getPokemon">Buscar</button>
    </div>
    <h2 v-if="errorMessage" class="error">{{ errorMessage }}</h2>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 20px auto;
}

.container input{
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
    width: 250px;
}

.container button{
    background-color: #29ccd8;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    padding: 10px 15px;
    color: #000000;
}

button:hover {
  background-color: #1355a0; 
  color: #ffffff; 
}
.error{
    color: rgb(119, 0, 0);
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
    font-size: 30px;
}
</style>