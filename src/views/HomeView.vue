<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <Hero />
  <HomeCards />
  <!-- recordar que si paso un number tengo q ponerle los : -->
  <JobListings :limit="2" :showButton="true" />
</template>
