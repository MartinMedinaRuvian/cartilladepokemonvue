<template>
    <div class="container mt-5 text-center"> 
        <Cabecera/>
        <router-link to="/" class="nav-link">Volver</router-link>
        <PaginaPokemon :datos="datos"/>
        <Footer/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PaginaPokemon from '@/views/PaginaPokemon'
import Cabecera from '@/components/parcials/Cabecera'
import Footer from '@/components/parcials/Footer'
export default {
    data(){
        return{
            datos:[],
            letra: this.$route.params.letra
        }
    },
    created(){
        this.getPokemon()
    },
    computed:{
        ...mapGetters(['verUrlAPI'])
    },
    methods:{
       async getPokemon(){
           let letraSilaba = this.letra;
           let letra = (letraSilaba === '' ||  letraSilaba === undefined) ? 'b' : letraSilaba;
            try{
               const respuesta = await fetch(this.verUrlAPI + letra)
               const datos = await respuesta.json();
               this.datos = datos;
            }
            catch(e){
                console.log(e)
            }
           
        }
    },
    components:{
        PaginaPokemon,
        Cabecera,
        Footer
    }
}
</script>