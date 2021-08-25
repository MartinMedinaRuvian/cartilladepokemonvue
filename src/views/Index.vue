<template>
    <div class="container text-center">
        <Cabecera/>
        <Letras/>
    </div>
</template>

<script>
import Letras from '@/components/Letras'
import Cabecera from '@/components/parcials/Cabecera'
export default {
    components:{
        Cabecera,
        Letras
    }
}
</script>