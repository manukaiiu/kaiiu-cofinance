<template>
  <nav class="sidebar">
    <ul>
      <li>
        <router-link :to="{ name: ERoutes.TEST }">Test</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { ERoutes } from '@/enums/route.enum';
</script>

<style scoped>
  .sidebar {
    width: 100px;
    background-color: var(--sidebar-background-color);
    padding: 16px;
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
  }

  .sidebar li {
    margin-bottom: 10px;
  }

  .sidebar a {
    color: #333;
    text-decoration: none;
  }

  .sidebar a:hover {
    color: #fff;
  }
</style>
