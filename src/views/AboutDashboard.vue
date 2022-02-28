<template>
  <div class="about">
    <Header />
    <div class="row row-md-11 row-lg-11 row-sm-11 row-xs-11">
      <div class="col-md-2 col-sm-12 col-xs-12 col-lg-2">
        <SideBar />
      </div>
      <div
        class="col-md-9 col-lg-9 col-sm-11 col-xs-11 d-flex justify-content-center"
      >
        <div
          class="row justify-content-center row-md-10 row-lg-10 row-sm-12 row-xs-12"
        >
          <div
            class="row row-md-9 row-lg-9 row-sm-12 row-xs-12 justify-content-center"
          >
            <h1 style="text-align: center">Add About Us Info</h1>
          </div>
          <div
            class="row row-md-9 row-lg-9 row-sm-11 row-xs-11 justify-content-center"
          >
            <v-app id="inspire" style="height: 200px; width: 90%">
              <v-form
                style="height: 200px"
                v-model="valid"
                @submit.prevent="createAbout"
              >
                <v-text-field
                  v-model="form.title"
                  :counter="20"
                  :rules="titleRules"
                  label="Title"
                  required
                  placeholder="example: Lorem Ipsum"
                ></v-text-field>

                <v-text-field
                  v-model="form.description"
                  :counter="200"
                  :rules="descriptionRules"
                  label="Description"
                  required
                  placeholder="example: Lorem Ipsum"
                ></v-text-field>

                <v-btn
                  type="submit"
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                >
                  Add
                </v-btn>
              </v-form>
            </v-app>
          </div>
          <div
            class="row row-md-10 row-lg-10 row-sm-11 row-xs-11 justify-content-center"
          >
            <v-card class="mb-5" style="width: 90%">
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
import apiRequests from "../utils/apiRequests";

export default {
  components: {
    Header,
    Footer,
    SideBar,
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
      },
      error: null,
      valid: true,
      title: "",
      titleRules: [
        (v) => !!v || "Title is required",
        (v) => (v && v.length <= 20) || "Title must be less than 20 characters",
      ],
      description: "",
      descriptionRules: [
        (v) => !!v || "Description is required",
        (v) =>
          (v && v.length <= 200) ||
          "Description must be less than 200 characters",
      ],
      search: "",
      headers: [
        {
          text: "Title",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Description", value: "description" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          description: "Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
          name: "Frozen Yogurt",
          description: "Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
          name: "Frozen Yogurt",
          description: "Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
          name: "Frozen Yogurt",
          description: "Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
          name: "Frozen Yogurt",
          description: "Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
          name: "Frozen Yogurt",
          description: "Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
          name: "Frozen Yogurt",
          description: "Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
          name: "Frozen Yogurt",
          description: "Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
          name: "Frozen Yogurt",
          description: "Lorem ipsum Lorem ipsum Lorem ipsum",
        },
        {
          name: "Frozen Yogurt",
          description: "Lorem ipsum Lorem ipsum Lorem ipsum",
        },
      ],
    };
  },
  methods: {
    async createAbout() {
      await apiRequests.createAbout({ ...this.form });
      alert("About Info u krijua me sukses");
      // this.$router.push('/');
    },
  },
};
</script>
