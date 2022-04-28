import Vue from 'vue'
import axios from 'axios'

const baseURL = ()=>{
    return 'https://pokeapi.co/api/v2/pokemon?limit=8&offset=0'
}

Vue.prototype.$axios = axios

export { baseURL }

