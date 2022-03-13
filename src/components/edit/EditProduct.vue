<template>
  <v-row justify="center" align="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#0d6efd"
          dark
          v-bind="attrs"
          v-on="on"
          style="
            width: 100px;
            margin-left: 65px;
            padding-top: 0.4rem;
            padding-bottom: 0.4rem;
            text-transform: inherit;
            font-size: 16px !important;
          "
        >
          <i class="fa fa-edit" style="padding-right: 4px"></i> Edit
        </v-btn>
      </template>
      <v-card style="height: 700px">
        <v-card-title>
          <span class="text-h5">Edit Product</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form
              ref="form"
              style="height: 200px"
              v-model="valid"
              lazy-validation
              @submit.prevent="editProduct"
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

              <v-text-field
                v-model="form.brand"
                :counter="15"
                :rules="brandRules"
                label="Brand"
                required
                placeholder="example: Easy Wear"
              ></v-text-field>

              <v-text-field
                v-model="form.description"
                :counter="200"
                :rules="descriptionRules"
                label="Description"
                required
                placeholder="example: Lorem Ipsum"
              ></v-text-field>

              <v-text-field
                v-model="form.color"
                :counter="15"
                :rules="colorRules"
                label="Color"
                required
                placeholder="example: White / Black"
              ></v-text-field>

              <v-text-field
                v-model="form.specification"
                :counter="100"
                :rules="specificationRules"
                label="Specification"
                required
                placeholder="example: Lorem Ipsum"
              ></v-text-field>
              <v-btn
                type="submit"
                :disabled="!valid"
                color="success"
                class="mr-4 mt-3"
              >
                Edit
              </v-btn>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
            style="margin-top: 320px"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import apiRequests from "../../utils/apiRequests";
export default {
  props: {
    product: Object,
    fetchProducts: Function,
  },
  data() {
    return {
      form: {
        _id: this.product._id,
        name: this.product.name,
        sizes: this.product.sizes,
        price: this.product.price,
        brand: this.product.brand,
        description: this.product.description,
        color: this.product.color,
        specification: this.product.specification,
      },
      dialog: false,
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
      brandRules: [
        (v) => !!v || "Brand is required",
        (v) => (v && v.length <= 15) || "Brand must be less than 15 characters",
      ],
      descriptionRules: [
        (v) => !!v || "Description is required",
        (v) =>
          (v && v.length <= 200) ||
          "Description must be less than 200 characters",
      ],
      colorRules: [
        (v) => !!v || "Color is required",
        (v) => (v && v.length <= 15) || "Color must be less than 15 characters",
      ],
      specificationRules: [
        (v) => !!v || "Specification is required",
        (v) =>
          (v && v.length <= 100) ||
          "Specification must be less than 100 characters",
      ],
    };
  },
  methods: {
    successEditToast() {
      this.$bvToast.toast("Product edited successfully!", {
        title: "Success",
        variant: "success",
        autoHideDelay: 5000,
        solid: true,
      });
    },
    async editProduct() {
      const response = await apiRequests.editProduct({ ...this.form });
      if (response) {
        this.successEditToast();
        this.fetchProducts();
        this.dialog = false;
      }
    },
  },
};
</script>
