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
          style="height: 500px"
        >
          <div
            class="row row-md-9 row-lg-9 row-sm-12 row-xs-12 justify-content-center"
          >
            <h1 style="text-align: center">Contacts Dashboard</h1>
          </div>
          <div
            class="row row-md-10 row-lg-10 row-sm-11 row-xs-11 justify-content-center"
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
                          <span>Name</span
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
                          <span>Email</span
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
                          <span>Subject</span
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
                          <span>Message</span
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
                      <tr v-for="contact in contactList" :key="contact._id">
                        <td class="text-start">{{ contact.name }}</td>
                        <td class="text-start">{{ contact.email }}</td>
                        <td class="text-start">{{ contact.subject }}</td>
                        <td class="text-start">{{ contact.message }}</td>
                        <td class="text-start">
                          <div class="d-flex">
                            <button
                              class="btn btn-danger p-1"
                              style="margin-left: 10px"
                              @click="deleteContact(contact._id)"
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

export default {
  components: {
    Header,
    Footer,
    SideBar,
  },

  data: () => ({
    valid: true,
    search: "",
  }),
  created() {
    this.fetchContact();
  },
  methods: {
    makeToast() {
      this.$bvToast.toast("Contact deleted successfully!", {
        title: "Success",
        variant: "success",
        autoHideDelay: 2000,
        solid: true,
      });
    },
    async deleteContact(id) {
      const result = await apiRequests.deleteContact(id);

      if (result) {
        this.makeToast();
        this.fetchContact();
      }
    },
    async fetchContact() {
      const result = await apiRequests.getContactsList();
      this.$store.dispatch("fetchContact", result);
    },
  },
  computed: {
    ...mapGetters({
      contactList: "contactList",
    }),
  },
};
</script>
