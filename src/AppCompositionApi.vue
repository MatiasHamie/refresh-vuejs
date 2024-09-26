<script setup>
import { ref, onMounted } from "vue";

const name = ref("John Doe");
const status = ref("pending");
const tasks = ref(["Task One", "Task Two", "Task Three"]);
const link = ref("https://www.google.com");
const newTask = ref("");

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    console.log("Component mounted");
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.error("Error fetching tasks");
  }
});
</script>

<template>
  <h1>{{ name }}</h1>

  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is not active</p>

  <!-- el .prevent te ahorra el tener que escribir el event.preventDefault() -->
  <form @submit.prevent="addTask">
    <label for="newTask">Add task</label>
    <input type="text" id="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <button @click="deleteTask(index)">X</button>
      <span>{{ task }}</span>
    </li>
  </ul>

  <!-- <a v-bind:href="link">Redirect to Google</a> -->
  <a :href="link">Redirect to Google</a>
  <br />
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>

<style scoped></style>
