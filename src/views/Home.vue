<template>
  <div class="home">
    <Header />
    <h1> Home Page</h1>

    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer
  },
};
</script>
