<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar >
        <q-avatar rounded>
            <q-img contain src="../assets/images/pokedex.svg"/> 
        </q-avatar>
        <q-toolbar-title>
          Pokedex App
        </q-toolbar-title>
        <audio-player></audio-player>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import AudioPlayer from 'src/components/audioPlayer.vue'

export default {
  name: 'MainLayout',
  components:{
    AudioPlayer
  }


}
</script>
