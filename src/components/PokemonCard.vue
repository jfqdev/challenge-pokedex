<template>
    <q-card  style="height:200px">{{pokemon.name}}</q-card>
</template>


<script>
export default {
    name:"PokemonCard",
    props:{
        pokemon: Object
    }
}
</script>