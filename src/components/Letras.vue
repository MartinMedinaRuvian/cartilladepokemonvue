<template>
  <div class="container mt-5">
    <router-link :to="letra" v-for="letra in letras" :key="letra.index" class="btn btn-danger m-2">{{letra}}
      </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Letras",
  data() {
    return {
      letras: [],
    };
  },
  created() {
    this.obtenerLetras();
  },
  computed: {
    ...mapGetters(["verUrlAPI"]),
  },
  methods: {
    async obtenerLetras() {
      const respuesta = await fetch(this.verUrlAPI);
      const datos = await respuesta.json();
      this.letras = datos.letras;
    },
  },
};
</script>