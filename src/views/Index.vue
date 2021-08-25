<template>
    <div class="container mt-5 text-center">
        <h1 class="text-primary">Cartilla de</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="">   
        <input type="text" v-model="letra" class="form-control" @keypress.enter="getPokemon()" required>
        <PaginaPokemon :datos="datos"/>
    </div>
</template>

<script>
import PaginaPokemon from '@/components/PaginaPokemon'
export default {
    data(){
        return{
            letra:'',
            datos:[]
        }
    },
    created(){
        this.getPokemon()
    },
    methods:{
       async getPokemon(){
           let letraSilaba = this.letra;
           let letra = (letraSilaba === '' ||  letraSilaba === undefined) ? 'b' : letraSilaba;
            try{
               const respuesta = await fetch(`http://localhost:5000/${letra}`)
               const datos = await respuesta.json();
               this.datos = datos;
            }
            catch(e){
                console.log(e)
            }
           
        }
    },
    components:{
        PaginaPokemon
    }
}
</script>