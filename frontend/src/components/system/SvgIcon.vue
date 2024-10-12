<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';

  const props = defineProps({
    svgName: {
      type: String,
      required: true,
    },
    strokeColor: {
      type: String,
      default: '#000',
    },
  });

  const svgContent = ref<string | undefined>(undefined);
  const svgFiles = import.meta.glob('../../assets/icons/*.svg', { as: 'raw' });

  const loadSvg = async () => {
    try {
      const svgFile = svgFiles[`../../assets/icons/${props.svgName}.svg`];
      if (svgFile) {
        svgContent.value = await svgFile();
      } else {
        console.error(`SVG file for ${props.svgName} not found.`);
        svgContent.value = undefined;
      }
    } catch (error) {
      console.error('Error loading SVG:', error);
      svgContent.value = undefined;
    }
  };

  watch(() => props.svgName, loadSvg);
  onMounted(loadSvg);
</script>

<template>
  <div 
    v-if="svgContent" 
    v-html="svgContent" 
    class="svg-icon" 
    :style="{ color: strokeColor }"></div>
</template>

<style scoped>
  .svg-icon {
    display: flex;
  }
</style>
