<template>
    <div>
    <b-button v-b-toggle.sidebar-no-header>Open sidebar</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Dashboard</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item href="/productsDashboard" @click="hide">Products</b-nav-item>
              <b-nav-item href="/aboutDashboard" @click="hide">About</b-nav-item>
              <b-nav-item href="/contactsDashboard" @click="hide">Contacts</b-nav-item>
              <b-nav-item href="/usersDashboard" @click="hide">Users</b-nav-item>

            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

