<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import Search from "../components/Search.vue";

const pokemones = ref([]); 
const currentPage = ref(1); 
const pageSize = 30; 
const totalPages = 5; 
const router = useRouter();


//getPokemones: -> 
//actualiza la lista de pokemones como un diccionario con id, nombre e imagen.
const getPokemones = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");

    if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();
    const info = [];


    for (const pokemon of data.results) {
        const id = pokemon.url.split("/").filter(Boolean).pop();
        const res = await fetch(pokemon.url);
        const jsn = await res.json();

        info.push({
            id: id,
            name: jsn.name,
            img: jsn.sprites.front_default,
        });
    }

    pokemones.value = info;
};

//cambiarPagina: int -> 
//cambia el valor de la página actual, mientras esta sea mayor a 1 o menor al máximo (5 para 150 pokemones)
const cambiarPagina = (step) => {
    if (currentPage.value + step >= 1 && currentPage.value + step <= totalPages) {
        currentPage.value += step;
    }
};

//paginatedPokemones: ->
//nos devuelve la lista de pokemones seccionada para los 30 que se deben mostrar en la pagina actual
const paginatedPokemones = computed(() => {
    const start = (currentPage.value - 1) * pageSize;
    const end = start + pageSize;
    return pokemones.value.slice(start, end);
});

//navigateToPokemon: int ->
//según el id que recibe, redirecciona a la página de detalles del pokemon de dicho id
const navigateToPokemon = (pokemonId) => {
    router.push(`./Detail/${pokemonId}`);
};

onMounted(getPokemones);
</script>

<template>
    <Search />
    <div class="title">
        <h2> Pokémon List </h2>
    </div>
    <div
        v-for="pokemon in paginatedPokemones"
        :key="pokemon.id"
        class="pokemon-table"
        :pokemon="pokemon"
        @click="navigateToPokemon(pokemon.id)"
    >
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.img" :alt="pokemon.name" />
    </div>

 
    <div class="button">
        <button @click="cambiarPagina(-1)" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="cambiarPagina(1)" :disabled="currentPage === totalPages">Next</button>
    </div>
</template>

<style scoped>
.title {
    text-align: center;
    margin: 20px 0;
    color: #671a7b;
}

.pokemon-table {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #4886cc;
    border: 4px solid #3b4cca;
    border-radius: 10px;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.pokemon-table:hover {
  background-color: #072f51; 
  color: #ffffff;
}
.button {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px;
}

button {
    background-color: #3768b0;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    font-size: 16px;
}
</style>
