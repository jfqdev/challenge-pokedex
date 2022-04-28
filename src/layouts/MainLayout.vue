<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar >
        <q-avatar rounded>
          <q-img  contain src="../assets/images/pokedex.svg" />
        </q-avatar>
        <q-toolbar-title>
          Pokedex App
        </q-toolbar-title>
        <div>Jemersoft Challenge</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
