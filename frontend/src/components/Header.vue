<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import IconButton from '@/components/buttons/IconButton.vue';
  import { EButtonAnimation } from '@/enums/button.enum';
  import { useSidebarStore } from '@/stores/sidebar.store';

  const route = useRoute();
  const sidebarStore = useSidebarStore();

  const headerTitle = computed(() => route.meta.headerTitle || 'Default Title');
</script>

<template>
  <header class="header">
    <IconButton
      @click="sidebarStore.toggleVisible()"
      class="header__menu-button"
      svg-name="three-lines"
      default-color="#ddd"
      hover-color="#aaa"
      :animation-type="EButtonAnimation.PULSE"/>
    <h1 class="header__title">{{ headerTitle }}</h1>
  </header>
</template>

<style scoped lang="scss">
  .header {
    display: grid;
    grid-template-columns: 42px 1fr 42px;
    grid-template-rows: auto;
    grid-template-areas: "menu title settings";
    align-items: center;
    background-color: var(--header-background-color);
    height: 54px;
    padding: 0 10px;
  }

  .header__menu-button {
    grid-area: menu;
  }

  .header__settings-button {
    grid-area: settings;
  }

  .header__title {
    grid-area: title;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    margin: 0;
  }
</style>
