<template>
    <q-card :class="`my-card-style bg-${pokemon.types[0].type.name} row`" style="cursor:pointer" :style="$q.screen.gt.xs ? 'height:250px' : 'height:400px'">
        <q-img contain :src="focused ? pokemon.sprites.front_default : pokemon.sprites.back_default " :style="$q.screen.gt.xs ? 'height:150px' : 'height:200px'"></q-img>
        <q-space></q-space>
        <div class="col-6 text-center self-center text-bold " :class="$q.screen.gt.xs ? 'text-caption' : 'text-h6' " >Weight</div>
        <div class="col-6 text-center self-center text-bold" :class="$q.screen.gt.xs ? 'text-caption' : 'text-h6' ">Type</div>
        <div class="col-6 text-center self-center" :class="$q.screen.gt.xs ? 'text-caption' : 'text-h6' ">{{pokemon.weight}} lb</div>
        <div class="col-6 text-center self-center " :class="$q.screen.gt.xs ? 'text-caption' : 'text-h6' ">
            <div v-for="(type,index) in pokemon.types" :key="`${type}_${index}`">
            {{type.type.name}}
            </div>
        </div>
    </q-card>
</template>


<script>

import pokemonMixin from 'src/mixins/pokemonMixin'
export default {
    name:"PokemonCard",
    mixins:[pokemonMixin],
    props:{
        pokemon: Object
    },
    data(){
        return {
            focused: false
        }
    }
}
</script>

<style lang="sass">
.my-card-style
	max-width: 350px
	height: 250px
	border-radius: 15px
	padding: 1.5rem
	transition: 0.4s ease-out
	box-shadow: 0px 7px 10px rgba(black, 0.5)
	&:hover
		transform: translateY(3px)
		&:before
			opacity: 1
		.info
			opacity: 1
			transform: translateY(0px)
	&:before
		content: ""
		position: absolute
		top: 0
		left: 0
		display: block
		width: 100%
		height: 100%
		border-radius: 15px
		background: rgba(black, 0.1)
		z-index: 2
		transition: 0.5s
		opacity: 0
</style>


