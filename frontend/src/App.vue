<template>
  <div id="app">
    <div v-if="appLoaded">
      <Header />
      <router-view class="content" />
    </div>
    <div v-else>Loading / Waiting for Permissions</div>
  </div>
</template>

<script setup lang="ts">
  import Header from '@components/Header.vue';
  import { ERoutes } from './enums/route.enums';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const appLoaded = ref(true);
  const router = useRouter();
</script>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  body {
    display: flex;
    margin: 0;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
