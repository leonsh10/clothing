<template>
  <div>
    <Header />
    <SideBar />
    <!-- <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Dashboard Navbar</h4>
          <nav class="mb-3">
            <b-nav vertical>
                        <b-nav-item href="/productsDashboard">Products</b-nav-item>
            </b-nav>
          </nav>
           <nav class="mb-3">
            <b-nav vertical>
                        <b-nav-item href="/usersDashboard">Users</b-nav-item>
            </b-nav>
          </nav>
           <nav class="mb-3">
            <b-nav vertical>
                        <b-nav-item href="/contactDashboard">Contact</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar> -->
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
    SideBar,
  },
};
</script>
