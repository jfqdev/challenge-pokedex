<template>
    <q-page>
        <div class="fullscreen bg-blue text-white text-center flex flex-center">
            <q-space ></q-space>
                <div class="col-8 col-md-8 col-sm-10 col-xs-12 text-center">
                    <q-img contain class="q-pa-none q-ma-none bg-grey text-caption" src="../assets/images/pokemonsVacation.png">
                        {{error.message}}
                    </q-img>

                    <div class="text-h5" style="opacity:.5">
                        It seems that our friends are taking a little break... Please reload or try again next season
                    </div>

                    <q-btn
                        class=""
                        color="white"
                        text-color="blue"
                        unelevated
                        to="/"
                        label="Reload"
                        no-caps
                    />
                    </div>
            <q-space ></q-space>
        </div>

    </q-page>   
</template>

<script>
import pokemonVacation from '../assets/images/pokemonsVacation.png'
import pokemonMixin from 'src/mixins/pokemonMixin.js'

export default {
    name: 'ErrorApi',
    mixins:[pokemonMixin],
    components:{
        pokemonVacation
    },
    created(){
        debugger
        console.log(this.error)
    }
}
</script>
