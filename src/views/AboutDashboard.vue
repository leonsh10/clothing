<template>
  <div class="about">
    <Header />
    <SideBar />
    <h1>About Dashboard</h1>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SideBar from "./sideBar.vue";

export default {
  components: {
    Header,
    Footer,
    SideBar
  },
};
</script>
