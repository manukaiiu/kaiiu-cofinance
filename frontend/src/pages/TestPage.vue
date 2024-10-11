<!-- src/App.vue -->
<template>  
  <div v-bind="$attrs">
    <!-- Create a New Project -->
    <div>
      <h3>Create Project</h3>
      <input v-model="newProjectName" placeholder="Project Name" />
      <button @click="addProject">Add Project</button>
    </div>

    <!-- Display All Projects -->
    <div>
      <h3>All Projects</h3>
      <ul>
        <li v-for="project in projects" :key="project.id">
          {{ project.name }}
          <button @click="editProject(project.id)">Edit</button>
          <button @click="removeProject(project.id)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

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

<style>
</style>
