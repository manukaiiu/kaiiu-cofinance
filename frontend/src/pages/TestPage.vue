<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { 
    IProject,
    getAllProjects,
    createProject,
    updateProject,
    deleteProject,
  } from '@/api/projectApi';

  const projects = ref<IProject[]>([]);
  const newProjectName = ref<string>('');

  // Fetch all projects on component mount
  const fetchProjects = async () => {
    projects.value = await getAllProjects();
  };

  // Create a new project
  const addProject = async () => {
    if (newProjectName.value.trim() === '') return;
    await createProject({ name: newProjectName.value });
    newProjectName.value = '';
    await fetchProjects();
  };

  // Edit a project
  const editProject = async (id: number) => {
    const updatedName = prompt("Enter the new project name:");
    if (updatedName && updatedName.trim() !== '') {
      await updateProject(id, { name: updatedName });
      await fetchProjects();
    }
  };

  // Delete a project
  const removeProject = async (id: number) => {
    await deleteProject(id);
    await fetchProjects();
  };

  onMounted(fetchProjects);
</script>

<template>  
  <div 
    class="test"
    v-bind="$attrs">

    <!-- Create a New Project -->
    <div class="test__section test__create">
      <h3>Create Project</h3>
      <div>
        <input v-model="newProjectName" placeholder="Project Name" />
        <button 
          class="test__button"
          @click="addProject">Add Project</button>
      </div>
    </div>

    <!-- Display All Projects -->
    <div class="test__section test__list-section">
      <h3>All Projects</h3>
      <div class="test__list">
        <div v-for="project in projects" 
          :key="project.id"
          class="test__list-item">
          {{ project.name }}
          <button 
            class="test__button"
            @click="editProject(project.id)">Edit</button>
          <button 
            class="test__button"
            @click="removeProject(project.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .test {
    display: flex;
    flex-direction: column;

    &__section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__button {
      margin-left: 16px;
    }

    &__create {

    }

    &__list-section {
      margin-top: 48px;
    }

    &__list {
      width: 80%;
    }

    &__list-item {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr min-content min-content;
      align-items: center;
      margin-bottom: 16px;
    }
  }
</style>
