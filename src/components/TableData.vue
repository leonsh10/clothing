<template>
  <tr class="">
    <td class="text-start">
      <img
        class="rounded-0 img-fluid pt-2 pb-2"
        style="object-fit: cover; height: 100px; width: 100px"
        v-if="src"
        :src="src"
      />
    </td>
    <td class="text-start">{{ product.name }}</td>
    <td class="text-start">{{ product.sizes }}</td>
    <td class="text-start">{{ product.price }}</td>
    <td class="text-start">
      <div class="d-flex">
        <router-link
          style="
            padding-top: 0.25rem;
            padding-right: 0.8rem;
            padding-bottom: 0.25rem;
            padding-left: 0.8rem;
          "
          class="btn btn-primary"
          :to="{ name: 'View', params: { id: product._id } }"
          ><i class="fa fa-eye"></i> View</router-link
        >
        <EditProduct
          :product="product"
          :fetchProducts="fetchProducts"
          style="width: 0px"
        />
        <button
          class="btn btn-danger"
          style="
            margin-left: 10px
            padding-top: 0.25rem;
            padding-right: 0.8rem;
            padding-bottom: 0.25rem;
            padding-left: 0.8rem;
          "
          @click="deleteProduct"
        >
          <i class="fa fa-trash"></i> Delete
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
import EditProduct from "@/components/edit/EditProduct.vue";
import apiRequests from "../utils/apiRequests";
export default {
  components: {
    EditProduct,
  },
  props: {
    product: Object,
    fetchProducts: Function,
    success: null,
  },

  computed: {
    src() {
      const filename = this.product.files?.split(";")[0];

      return filename ? `http://localhost:3000/static/${filename}` : null;
    },
  },
  methods: {
    makeToast() {
      this.$bvToast.toast("Product deleted successfully!", {
        title: "Success",
        variant: "success",
        autoHideDelay: 7000,
        solid: true,
      });
    },
    async deleteProduct() {
      const result = await apiRequests.deleteProduct(this.product._id);
      if (result) {
        this.makeToast();
        this.fetchProducts();
      }
    },
  },
};
</script>
