<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const pokemonId = parseInt(route.params.id);
const pokemonDetails = ref({});

//getDetails: ->
//obtiene la información de un pokemon según su id y la adhiere como un diccionario a pokemonDetails
//para que luego esta sea desplegada
const getDetails = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

    if (!response.ok){
        const message = "Error: ${response.status}";
        throw new Error(message)
    }

    const data = await response.json();

    pokemonDetails.value = {
        name: data.name,
        img: data.sprites.other[`official-artwork`].front_default,
        img_shiny: data.sprites.other[`official-artwork`].front_shiny,
        types: data.types.map(type => type.type.name),
        abilities: data.abilities.map(ability => ability.ability.name),
        height: data.height,
        weight: data.weight,
    }
}

onMounted(getDetails);

</script>

<template>
    <h1>Pokemon Details</h1>
    <div class="pokemon-name">
        <h1> Name: {{ pokemonDetails.name }} </h1>
        <img :src="pokemonDetails.img">
        <img :src="pokemonDetails.img_shiny">
    </div>

    <div class="pokemon-types">
        <h3>Types</h3>
            <ul>
                <li v-for="type in pokemonDetails.types" :key="type">{{ type }}</li>
            </ul>
    </div>

    <div class="pokemon-abilities">
            <h3>Abilities</h3>
            <ul>
                <li v-for="ability in pokemonDetails.abilities" :key="ability">{{ ability }}</li>
            </ul>
    </div>
    <div>
            <p><strong>Weight:</strong> {{ pokemonDetails.weight / 10 }} kg</p>
            <p><strong>Height:</strong> {{ pokemonDetails.height / 10 }} m</p>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    color: #3b4cca;
    margin-bottom: 20px;
}
.pokemon-name {
  text-align: center;
  background-color: #f2f2f2;
  padding: 20px;
  margin: 10px auto;
  border-radius: 10px;
  border: 2px solid #3b4cca;
}
.pokemon-name img {
  width: 150px;
  height: auto;
  margin: 10px;
}

.pokemon-name h1 {
    text-align: center;
    color: #8a3bca;
    margin-bottom: 20px;
}

.pokemon-types, .pokemon-abilities {
  text-align: center;
  margin: 20px 0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #5dcbe7; 
  display: flex;
  margin: 5px;
  padding: 5px 15px;
  border: 2px solid #1c5185;
  border-radius: 5px;
  color: #041220;
}
p {
  text-align: center;
  margin: 10px 0;
  font-size: 1.1rem;
  color: #2c3e50;
}
</style>