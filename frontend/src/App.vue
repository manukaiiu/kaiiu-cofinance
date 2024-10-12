<script setup lang="ts">
  import Header from '@/components/Header.vue';
  import Sidebar from '@/components/Sidebar.vue';
  import { useSidebarStore } from '@/stores/sidebar.store';
  import { ref } from 'vue';

  const appLoaded = ref(true);
  const sidebarStore = useSidebarStore();
</script>

<template>
  <div id="app">
    <div 
      v-if="appLoaded"
      class="app">
      <Header />
      <div class="app__main-wrapper">
        <Sidebar
          class="app__sidebar"
          :class="{ 'app__sidebar--is-closed': !sidebarStore.isVisible }" />
        <router-view class="app__router-content" />
      </div>
    </div>
    <div v-else>Loading ...</div>
  </div>
</template>

<style scoped lang="scss">
  .app {
    height: 100%;

    &__main-wrapper {
      display: flex;
      flex-direction: row;
      height: 100%;
    }

    &__router-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  
    &__sidebar {
      position: fixed;
      height: 100%;
      transition: transform .5s ease;

      &--is-closed {
        transform: translateX(-16em);
      }
    }
  }
</style>
