# Pokedex (challenge-pokedex)

The whole Task was implemented using Quasar SPA.

    ├── boot                  # axios api config
    ├── components            # Pokemon Card/List/Scoped , CustomCursor, AudioPlayer
    ├── layouts               # main layout render - contains router-view (index as default)
    ├── mixins                # provides vuex modules to components
    ├── pages                 # index , Errors pages
    ├── router                # routes to pages configuration
    ├── store                 # vuex modules
    └── App.vue

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