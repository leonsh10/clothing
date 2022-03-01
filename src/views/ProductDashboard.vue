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
          class="row justify-content-center row-md-10 row-lg-10 row-sm-12 row-xs-12"
        >
          <div
            class="row row-md-9 row-lg-9 row-sm-12 row-xs-12 justify-content-center"
          >
            <h1 style="text-align: center">Add Product</h1>
          </div>
          <div
            class="row row-md-9 row-lg-9 row-sm-12 row-xs-12 justify-content-center"
          >
            <v-app id="inspire" style="height: 300px; width: 90%">
              <v-form
                ref="form"
                v-model="valid"
                style="height: 300px"
                @submit.prevent="createProduct"
              >
                <v-text-field
                  v-model="form.name"
                  :counter="15"
                  :rules="nameRules"
                  label="Title"
                  required
                  placeholder="example: Lorem Ipsum"
                ></v-text-field>

                <v-text-field
                  v-model="form.sizes"
                  :counter="15"
                  :rules="sizesRules"
                  label="Sizes"
                  required
                  placeholder="example: M/L/X/XL"
                ></v-text-field>

                <v-text-field
                  v-model="form.price"
                  :counter="4"
                  :rules="priceRules"
                  label="Price"
                  required
                  placeholder="example: 250"
                ></v-text-field>

                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  type="submit"
                >
                  Add
                </v-btn>
              </v-form>
            </v-app>
          </div>
          <div
            class="row row-md-10 row-lg-10 row-sm-12 row-xs-12 justify-content-center"
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
                          aria-label="Image: Not sorted. Activate to sort ascending."
                          aria-sort="none"
                          class="text-start sortable"
                        >
                          <span>Image</span
                          ><i
                            aria-hidden="true"
                            class="v-icon notranslate v-data-table-header__icon mdi mdi-arrow-up theme--light"
                            style="font-size: 18px"
                          ></i>
                        </th>
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
                          aria-label="Sizes: Not sorted. Activate to sort ascending."
                          aria-sort="none"
                          class="text-start sortable"
                        >
                          <span>Sizes</span
                          ><i
                            aria-hidden="true"
                            class="v-icon notranslate v-data-table-header__icon mdi mdi-arrow-up theme--light"
                            style="font-size: 18px"
                          ></i>
                        </th>
                        <th
                          role="columnheader"
                          scope="col"
                          aria-label="Price: Not sorted. Activate to sort ascending."
                          aria-sort="none"
                          class="text-start sortable"
                        >
                          <span>Price</span
                          ><i
                            aria-hidden="true"
                            class="v-icon notranslate v-data-table-header__icon mdi mdi-arrow-up theme--light"
                            style="font-size: 18px"
                          ></i>
                        </th>
                        <th
                          role="columnheader"
                          scope="col"
                          aria-label="Actions: Not sorted. Activate to sort ascending."
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
                      <TableData
                        v-for="entry in productsList"
                        :key="entry._id"
                        :product="entry"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import TableData from "@/components/TableData.vue";

export default {
  components: {
    Header,
    Footer,
    SideBar,
    TableData,
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async createProduct() {
      const newProduct = await apiRequests.createProduct({ ...this.form });
      this.$router.push({ name: "View", params: { id: newProduct._id } });
      // this.$router.push(`/view/${newRealEstate._id}`);
    },
    async fetchProducts() {
      const result = await apiRequests.getProductsList();
      this.$store.dispatch("fetchProducts", result);
    },
  },
  data() {
    return {
      form: {
        name: "",
        sizes: "",
        price: 0,
      },
      error: null,
      valid: true,
      nameRules: [
        (v) => !!v || "Title is required",
        (v) => (v && v.length <= 15) || "Title must be less than 10 characters",
      ],
      sizesRules: [
        (v) => !!v || "Sizes are required",
        (v) => (v && v.length <= 15) || "Sizes must be less than 15 characters",
      ],
      priceRules: [
        (v) => !!v || "Price is required",
        (v) => (v && v.length <= 4) || "Sizes must be less than 4 characters",
      ],
    };
  },

  computed: {
    ...mapGetters({
      productsList: "productsList",
    }),
  },
};
</script>

<style scoped></style>
