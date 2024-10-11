<template>
  <header>
    <h1 class="title">{{ headerTitle }}</h1>
  </header>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const headerTitle = computed(() => route.meta.headerTitle || 'Default Title');
</script>

<style scoped lang="scss">
  header {
    display: grid;
    grid-template-columns: 42px 1fr 42px;
    grid-template-rows: auto;
    grid-template-areas: "back title settings";
    align-items: center;
    background-color: var(--color-header-bg);
    height: 54px;
    padding: 0 10px;
  }

  .back-button {
    grid-area: back;
  }

  .settings-button {
    grid-area: settings;
  }

  .title {
    grid-area: title;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    margin: 0;
  }
</style>
