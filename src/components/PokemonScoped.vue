<template>
    <q-dialog v-model="visible">
        <q-card v-if="selectedPokemon" class="bg-card" style="max-width:none" :style="$q.screen.gt.xs ? 'width:50vw' : ''">
            <q-card-section 
            :class="`bg-${selectedPokemon.types[0].type.name} row q-pa-none`"
            >
                    <div class="col-12 text-center self-center q-mt-sm text-bold">{{selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}}</div>
                    <div class="col-4 text-center h-7 text-bold">
                        <div class="row justify-center q-mt-md q-mb-sm">
                            Weight
                        </div>
                        <div class="row justify-center text-caption">
                            {{selectedPokemon.weight}} lb
                        </div>
                    </div>
                    <q-img class="col-4" contain :src="selectedPokemon.sprites.front_default " style="height:100px"></q-img>
                    <div class="col-4 text-center  h-7 text-bold">
                        <div class="row justify-center q-mt-md">
                            Type
                        </div>
                        <div v-for="(type,index) in selectedPokemon.types" :key="`${type}_${index}`"  class="row justify-center text-caption">
                            {{type.type.name}}
                        </div>
                    </div>            
            </q-card-section>
            <q-space></q-space>
            <div class="col-12 text-center text-bold"> Movimientos </div>
            <q-space></q-space>
            <div style="col-12 text-center text-bold">
                <q-badge class="q-ma-xs my-color text-center text-bold" v-for="move in selectedPokemon.moves" :key="move.name" push color="grey" :label="move.move.name" />
            </div>
        </q-card>
    </q-dialog>
</template>

<script>
import PokemonCard from "src/components/PokemonCard.vue"
import pokemonMixin from "src/mixins/pokemonMixin"

export default {
    name:"PokemonScoped",
    mixins:[pokemonMixin],
    data(){
        return {
            visible: false
        }
    },
    methods:{
        showPokemon(){
            this.visible = true
        },
        hidePokemon(){
            this.visible = false
        }
    },
    components: {
        PokemonCard
    },

}
</script>