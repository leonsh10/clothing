<template>
  <section>
    <Header />
    <div class="row row-md-11 row-lg-11 row-sm-11 row-xs-11">
      <div class="col-md-2 col-sm-12 col-xs-12 col-lg-2">
        <SideBar />
      </div>
      <div class="col-md-9 col-sm-12 col-xs-12 col-lg-9">
        <div v-if="this.product" class="row justify-content-center">
          <div class="col-5 col-md-8 col-lg-8">
            <h1 style="text-align: center">Product Details</h1>
            <div class="flex">
              <h1 style="font-size: 20px">
                <span style="color: #8c8c8c; font-size: 17px">Name:</span>
                {{ this.product.name }}
              </h1>

              <h1 style="font-size: 20px">
                <span style="color: #8c8c8c; font-size: 17px">Sizes:</span>
                {{ this.product.sizes }}
              </h1>

              <h1 style="font-size: 20px">
                <span style="color: #8c8c8c; font-size: 17px">Brand:</span>
                {{ this.product.brand }}
              </h1>

              <h1 style="font-size: 20px">
                <span style="color: #8c8c8c; font-size: 17px"
                  >Description:</span
                >
                {{ this.product.description }}
              </h1>

              <h1 style="font-size: 20px">
                <span style="color: #8c8c8c; font-size: 17px">Color:</span>
                {{ this.product.color }}
              </h1>

              <h1 style="font-size: 20px">
                <span style="color: #8c8c8c; font-size: 17px"
                  >Specification:</span
                >
                {{ this.product.specification }}
              </h1>
            </div>
            <Dropzone
              :productId="this.$route.params.id"
              :initialFiles="product.files"
            />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </section>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SideBar from "./sideBar.vue";
import apiRequests from "../utils/apiRequests";
import Dropzone from "@/components/form/Dropzone";

export default {
  components: {
    Header,
    Footer,
    SideBar,
    Dropzone,
  },
  created() {
    this.fetchProduct();
  },
  data() {
    return {
      product: null,
    };
  },
  methods: {
    async fetchProduct() {
      this.product = await apiRequests.getProduct(this.$route.params.id);
    },
  },
};
</script>
