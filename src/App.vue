<template>
  <div>
    <main-nav />
    <job-create />
    <router-view />
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import JobCreate from "@/components/JobResults/JobCreate";

export default {
  name: "App",
  components: {
    MainNav,
    JobCreate
  },
};
</script>
