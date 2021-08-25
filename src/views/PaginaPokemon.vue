<template>
  <div class="container">
    <span 
    v-for="dato in datos" :key="dato.index" class="btn btn-success p-3 m-2 mt-5 mb-5">
      {{dato.silaba}}
    </span>
    <TarjetaPokemon class="container mb-5"
       v-for="(pokemon, index) in datos" :key="index" :pokemon="pokemon"/>
  </div>
</template>



<script>
import TarjetaPokemon from '@/components/TarjetaPokemon'
export default {
  name:'PaginaPokemon',
  components:{  
    TarjetaPokemon
  },
  props:{
    datos:[]
  }
}
</script>