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
                ref="form"
                style="height: 200px"
                v-model="valid"
                lazy-validation
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
                  :counter="400"
                  :rules="descriptionRules"
                  label="Description"
                  required
                  placeholder="example: Lorem Ipsum"
                ></v-text-field>

                <v-btn
                  type="submit"
                  :disabled="!valid"
                  color="success"
                  class="mr-4 mt-3"
                >
                  Add
                </v-btn>
              </v-form>
            </v-app>
          </div>
          <div
            class="row row-md-10 row-lg-10 row-sm-11 row-xs-11 justify-content-center mt-5"
          >
            <div
              data-v-5d9d1fc2=""
              class="mb-5 v-card v-sheet theme--light"
              style="width: 90%"
            >
              <div
                data-v-5d9d1fc2=""
                class="v-data-table v-data-table--has-bottom theme--light"
              >
                <div class="v-data-table__wrapper">
                  <table>
                    <colgroup>
                      <col class="" />
                      <col class="" />
                      <col class="" />
                      <col class="" />
                    </colgroup>
                    <thead class="v-data-table-header">
                      <tr>
                        <th
                          role="columnheader"
                          scope="col"
                          aria-label="Title: Not sorted. Activate to sort ascending."
                          aria-sort="none"
                          class="text-start sortable"
                        >
                          <span>Title</span
                          ><i
                            aria-hidden="true"
                            class="v-icon notranslate v-data-table-header__icon mdi mdi-arrow-up theme--light"
                            style="font-size: 18px"
                          ></i>
                        </th>
                        <th
                          role="columnheader"
                          scope="col"
                          aria-label="Description: Not sorted. Activate to sort ascending."
                          aria-sort="none"
                          class="text-start sortable"
                        >
                          <span>Description</span
                          ><i
                            aria-hidden="true"
                            class="v-icon notranslate v-data-table-header__icon mdi mdi-arrow-up theme--light"
                            style="font-size: 18px"
                          ></i>
                        </th>
                        <th
                          role="columnheader"
                          scope="col"
                          aria-label="Description: Not sorted. Activate to sort ascending."
                          aria-sort="none"
                          class="text-start sortable"
                        >
                          <span>Actions</span
                          ><i
                            aria-hidden="true"
                            class="v-icon notranslate v-data-table-header__icon mdi mdi-arrow-up theme--light"
                            style="font-size: 18px"
                          ></i>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="" v-for="about in aboutList" :key="about._id">
                        <td class="text-start">{{ about.title }}</td>
                        <td class="text-start">{{ about.description }}</td>
                        <td class="text-start">
                          <div class="d-flex p-3" style="width: 200px">
                            <EditAbout
                              :about="about"
                              :fetchAbout="fetchAbout"
                            />
                            <button
                              class="btn btn-danger"
                              style="
                                margin-left: 20px;
                                padding-top: 0.3rem;
                                padding-right: 0.6rem;
                                padding-bottom: 0.3rem;
                                padding-left: 0.6rem;
                              "
                              @click="deleteAbout(about._id)"
                            >
                              <i class="fa fa-trash"></i> Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
import { mapGetters } from "vuex";
import EditAbout from "@/components/edit/EditAbout.vue";

export default {
  components: {
    Header,
    Footer,
    SideBar,
    EditAbout,
  },
  created() {
    this.fetchAbout();
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
          (v && v.length <= 400) ||
          "Description must be less than 400 characters",
      ],
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    makeToast() {
      this.$bvToast.toast("About deleted successfully!", {
        title: "Success",
        variant: "success",
        autoHideDelay: 5000,
        solid: true,
      });
    },
    successAddToast() {
      this.$bvToast.toast("About added successfully!", {
        title: "Success",
        variant: "success",
        autoHideDelay: 5000,
        solid: true,
      });
    },
    async createAbout() {
      const response = await apiRequests.createAbout({ ...this.form });
      if (response) {
        this.reset();
        this.successAddToast();
        this.fetchAbout();
      }
    },
    async deleteAbout(id) {
      const result = await apiRequests.deleteAbout(id);

      if (result) {
        this.makeToast();
        this.fetchAbout();
      }
    },
    async fetchAbout() {
      const result = await apiRequests.getAboutList();
      this.$store.dispatch("fetchAbout", result);
    },
  },
  computed: {
    ...mapGetters({
      aboutList: "aboutList",
    }),
  },
};
</script>
