<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Shop</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            href="/products"
            v-on:click="addClass"
            :active="isAddClass"
            >Products</b-nav-item
          >
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="/contact">Contact</b-nav-item>
          <b-nav-item href="/login">Login</b-nav-item>
          <b-nav-item href="/register">Register</b-nav-item>
          <b-nav-item href="/dashboard">Dashboard</b-nav-item>

        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
          </b-nav-form>
         useri: {{user.data && user.data.email}}
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      isAddClass: false,
    };
  },
  methods: {
    addClass() {
      this.isAddClass = true;
    },
  },
  computed:{
    ...mapGetters({
      user:"user"
    })
  }
};
</script>

<style scoped></style>
