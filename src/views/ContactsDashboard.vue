<template>
  <div>
    <Header />
    <div class="row row-md-11 row-lg-11 row-sm-11 row-xs-11">
      <div class="col-md-2 col-sm-12 col-xs-12 col-lg-2">
        <SideBar />
      </div>
      <div
        class="col-md-9 col-lg-9 col-sm-11 col-xs-11 d-flex justify-content-center"
      >
        <div
          class="row justify-content-center row-md-9 row-lg-9 row-sm-12 row-xs-12"
        >
          <div
            class="row row-md-9 row-lg-9 row-sm-12 row-xs-12 justify-content-center"
          >
            <h1 style="text-align: center">Contacts Dashboard</h1>
          </div>
          <div
            class="row row-md-9 row-lg-9 row-sm-12 row-xs-12 justify-content-center p-4"
          >
            <v-card class="w-100 mb-5 mr-5">
              <v-data-table :headers="headers" :items="desserts"></v-data-table>
            </v-card>
          </div>
        </div>

        <!-- image, title, size, price -->
      </div>
    </div>

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
  data: () => ({
    valid: true,
    search: "",
    headers: [
      {
        text: "Name",
        align: "start",
        filterable: false,
        value: "name",
      },
      { text: "Email", value: "email" },
      { text: "Subject", value: "subject" },
      { text: "Message", value: "message" },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        email: 159,
        subject: 6.0,
        message: 24,
      },
      {
        name: "Frozen Yogurt",
        email: 159,
        subject: 6.0,
        message: 24,
      },
      {
        name: "Frozen Yogurt",
        email: 159,
        subject: 6.0,
        message: 24,
      },
      {
        name: "Frozen Yogurt",
        email: 159,
        subject: 6.0,
        message: 24,
      },
      {
        name: "Frozen Yogurt",
        email: 159,
        subject: 6.0,
        message: 24,
      },
      {
        name: "Frozen Yogurt",
        email: 159,
        subject: 6.0,
        message: 24,
      },
      {
        name: "Frozen Yogurt",
        email: 159,
        subject: 6.0,
        message: 24,
      },
      {
        name: "Frozen Yogurt",
        email: 159,
        subject: 6.0,
        message: 24,
      },
      {
        name: "Frozen Yogurt",
        email: 159,
        subject: 6.0,
        message: 24,
      },
      {
        name: "Frozen Yogurt",
        email: 159,
        subject: 6.0,
        message: 24,
      },
    ],
  }),
};
</script>
