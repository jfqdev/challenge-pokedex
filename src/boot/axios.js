import Vue from 'vue'
import axios from 'axios'

const baseURL = ()=>{
    return 'https://pokeapi.co/api/v2/pokemon/'
}

Vue.prototype.$axios = axios

export { baseURL }

