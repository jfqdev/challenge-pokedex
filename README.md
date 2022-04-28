# Pokedex (challenge-pokedex)

SPA Responsive Pokedex using [PokeApi](https://pokeapi.co).

    ├── boot                  # axios api config
    ├── components            # Pokemon Card/List/Scoped , CustomCursor, AudioPlayer
    ├── layouts               # main layout render - contains router-view (index as default)
    ├── mixins                # provides vuex modules to components
    ├── pages                 # index , Errors pages
    ├── router                # routes to pages configuration
    ├── store                 # vuex modules
    └── App.vue

## Demo

See [Pokedex Demo](https://jfq-pokedex.herokuapp.com).

## Install the dependencies
Clone main branch and install it locally using yarn
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
yarn dev
```

### Build the app for production
```bash
yarn build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).


## Built with
* [Vue 2](https://v2.vuejs.org/)
* [Quasar v1](https://v1.quasar.dev/)
* [Axios](https://github.com/axios/axios)

## Other links

* [PokeApi Docs](https://pokeapi.co/docs/v2)

