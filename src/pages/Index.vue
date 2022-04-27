<template>
    <q-page>
        <div class="row justify-center">
            <q-space class="bg-yellow"></q-space>
                <div class="col-8 col-md-8 col-sm-10 col-xs-12 text-center bg-red ">
                    <pokemon-list />
                </div>
            <q-space class="bg-yellow"></q-space>
                
        </div>
    </q-page>   
</template>

<script>
import PokemonList from "src/components/PokemonList"


export default {
    name: 'PageIndex',
    components:{
        PokemonList
    },
}
</script>
