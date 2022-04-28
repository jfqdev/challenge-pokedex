<template>
    <q-btn round @click="handleSong(stoped)" :icon=" stoped ? 'volume_up' : 'volume_off'" /> 
</template>

<script>
import pokesong from '../assets/pokemonSong.mp3'
export default {
    name:'audioPlayer',
    data(){
        return{
            audio: new Audio(pokesong),
            stoped: true
        }
    },
    methods:{
        handleSong(stoped){
            if(stoped){
                this.stoped = false
                this.audio.volume = 0.01
                this.audio.play()
            }else{
                this.stoped = true
                this.audio.pause()
            }
        }
    }
}
</script>