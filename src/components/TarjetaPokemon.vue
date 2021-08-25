<template>
  <div class="card">
    <div class="card-header">
      <h2 class="text-success">{{ pokemon.silaba }}</h2>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <h3>{{ pokemon.nombre }}</h3>
          <img :src="pokemon.imagen" alt="" />
        </div>
        <div class="col-md-6">
          <ul>
            <h5 v-for="(frase, index) in pokemon.frases" :key="frase.index" class="text-primary mt-3">
            <span class="text-danger">{{index + 1}}</span> - {{ frase.frase }}
            </h5>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TarjetaPokemon",
  props: {
    pokemon: {},
  },
};
</script>