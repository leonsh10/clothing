<template>
  <div class="home">
    <Header />
    <div class="mb-2">
      <!-- <div style="position: absolute; top: 50%; left: 35%; z-index: 1">
        <h1 style="font-size: 60px; letter-spacing: 10px; text-align: center">
          The Biggest Sale
        </h1>
        <h4 style="letter-spacing: 10px; text-align: center">
          New Arrivals On Sale
        </h4>
        <div class="d-flex justify-content-center">
          <button
            style="
              display: inline-block;
              font-size: 13px;
              font-weight: 700;
              text-transform: uppercase;
              padding: 14px 30px;
              color: #ffffff;
              background: #000000;
              letter-spacing: 4px;
              border: 1px solid #000000;
            "
          >
            Shop Now
          </button>
        </div>
      </div> -->
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
        indicators
        background="#ababab"
        img-width="1024"
        img-height="400"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide style="backgroud-color: #efefef">
          <template #img>
            <div
              class="d-flex flex-row row-md-12 row-sm-6 row-lg-12 row-xs-6 flex-wrap"
              style="background: #efefef !important"
            >
              <div
                class="d-flex flex-column col-md-6 col-lg-6 col-sm-6 col-xs-6 justify-content-center"
                style="align-items: end"
              >
                <div style="width: 400px">
                  <h1 class="h1 text-success">Store eCommerce</h1>
                  <h1 class="h2">Perfect eCommerce Site</h1>
                  <p>
                    Store is an eCommerce website. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Est amet, sunt totam modi nisi
                    error quod nulla quas dolor eos cupiditate dolorum quasi,
                    perferendis consequatur eligendi at saepe perspiciatis
                    excepturi?
                  </p>
                </div>
              </div>
              <div
                class="d-flex flex-column col-md-6 col-lg-6 col-sm-6 col-xs-6 justify-content-center"
                style="align-items: start"
              >
                <img
                  src="https://technext.github.io/zay-shop/assets/img/banner_img_01.jpg"
                  style="height: 650px; width: 600px"
                  class="banner-images"
                />
              </div>
            </div>
          </template>
        </b-carousel-slide>

        <b-carousel-slide style="backgroud-color: #efefef">
          <template #img>
            <div
              class="d-flex flex-row row-md-12 row-sm-6 row-lg-12 row-xs-6 pr-5 pl-5 flex-wrap"
              style="background: #efefef !important"
            >
              <div
                class="d-flex flex-column col-md-6 col-lg-6 col-sm-6 col-xs-6 justify-content-center"
                style="align-items: end"
              >
                <div style="width: 400px">
                  <h1 class="h1">Proident occaecat</h1>
                  <h1 class="h2">Ullamco laboris nisi ut</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore temporibus esse quia modi provident ducimus sed? Quia
                    dolore molestiae ipsa voluptates rerum tempora sequi quos
                    maiores vel, praesentium eaque neque?
                  </p>
                </div>
              </div>
              <div
                class="d-flex flex-column col-md-6 col-lg-6 col-sm-6 col-xs-6 justify-content-center"
                style="align-items: start"
              >
                <img
                  src="https://technext.github.io/zay-shop/assets/img/banner_img_02.jpg"
                  style="height: 650px; width: 600px"
                  class="banner-images"
                />
              </div>
            </div>
          </template>
        </b-carousel-slide>

        <b-carousel-slide style="backgroud-color: #efefef">
          <template #img>
            <div
              class="d-flex flex-row row-md-12 row-sm-6 row-lg-12 row-xs-6 pr-5 pl-5 flex-wrap"
              style="background: #efefef !important"
            >
              <div
                class="d-flex flex-column col-md-6 col-lg-6 col-sm-6 col-xs-6 justify-content-center"
                style="align-items: end"
              >
                <div style="width: 400px">
                  <h1 class="h1">Proident occaecat</h1>
                  <h1 class="h2">Aliquip ex ea commodo consequat</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore temporibus esse quia modi provident ducimus sed? Quia
                    dolore molestiae ipsa voluptates rerum tempora sequi quos
                    maiores vel, praesentium eaque neque?.
                  </p>
                </div>
              </div>
              <div
                class="d-flex flex-column col-md-6 col-lg-6 col-sm-6 col-xs-6 justify-content-center"
                style="align-items: start"
              >
                <img
                  src="https://technext.github.io/zay-shop/assets/img/banner_img_03.jpg"
                  style="height: 650px; width: 600px"
                  class="banner-images"
                />
              </div>
            </div>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <section class="container py-5">
      <div class="row text-center pt-3">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">Categories of The Month</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4 p-5 mt-3">
          <router-link
            v-if="user.loggedIn"
            :to="{
              name: 'Products',
            }"
            ><img
              src="https://technext.github.io/zay-shop/assets/img/category_img_01.jpg"
              class="rounded-circle img-fluid border"
          /></router-link>
          <router-link style="pointer-events: none" v-else to=""
            ><img
              src="https://technext.github.io/zay-shop/assets/img/category_img_01.jpg"
              class="rounded-circle img-fluid border"
          /></router-link>
          <h5 class="text-center mt-3 mb-3">Watches</h5>
          <p class="text-center">
            <router-link
              v-if="user.loggedIn"
              :to="{
                name: 'Products',
              }"
              class="btn btn-success"
              >Go Shop</router-link
            >
            <router-link v-else to="" class="btn btn-success disabled"
              >Go Shop</router-link
            >
          </p>
        </div>
        <div class="col-12 col-md-4 p-5 mt-3">
          <router-link
            v-if="user.loggedIn"
            :to="{
              name: 'Products',
            }"
            ><img
              src="https://technext.github.io/zay-shop/assets/img/category_img_02.jpg"
              class="rounded-circle img-fluid border"
          /></router-link>
          <router-link v-else style="pointer-events: none" to=""
            ><img
              src="https://technext.github.io/zay-shop/assets/img/category_img_02.jpg"
              class="rounded-circle img-fluid border"
          /></router-link>
          <h2 class="h5 text-center mt-3 mb-3">Shoes</h2>
          <p class="text-center">
            <router-link
              v-if="user.loggedIn"
              :to="{
                name: 'Products',
              }"
              class="btn btn-success"
              >Go Shop</router-link
            >
            <router-link v-else to="" class="btn btn-success disabled"
              >Go Shop</router-link
            >
          </p>
        </div>
        <div class="col-12 col-md-4 p-5 mt-3">
          <router-link
            v-if="user.loggedIn"
            :to="{
              name: 'Products',
            }"
            ><img
              src="https://technext.github.io/zay-shop/assets/img/category_img_03.jpg"
              class="rounded-circle img-fluid border"
          /></router-link>
          <router-link v-else style="pointer-events: none" to=""
            ><img
              src="https://technext.github.io/zay-shop/assets/img/category_img_03.jpg"
              class="rounded-circle img-fluid border"
          /></router-link>
          <h2 class="h5 text-center mt-3 mb-3">Accessories</h2>
          <p class="text-center">
            <router-link
              v-if="user.loggedIn"
              :to="{
                name: 'Products',
              }"
              class="btn btn-success"
              >Go Shop</router-link
            >
            <router-link v-else to="" class="btn btn-success disabled"
              >Go Shop</router-link
            >
          </p>
        </div>
      </div>
    </section>

    <section class="bg-light">
      <div class="container py-5">
        <div class="row text-center py-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Featured Product</h1>
            <p>
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 mb-4" v-if="productsList[0]">
            <div class="card h-100">
              <router-link
                :to="{
                  name: 'Single Page Product',
                  params: {
                    id:
                      productsList[0] && productsList[0]._id
                        ? productsList[0]
                        : ' ',
                  },
                }"
              >
                <CardImage
                  :productImage="
                    productsList[0] && productsList[0].files
                      ? productsList[0].files
                      : ''
                  "
                />
              </router-link>
              <div class="card-body">
                <ul class="list-unstyled d-flex justify-content-between">
                  <li>
                    <i
                      class="text-warning fa fa-star"
                      style="
                        color: #ede861 !important;
                        font-size: 18px !important;
                      "
                    ></i>
                    <i
                      class="text-warning fa fa-star"
                      style="
                        color: #ede861 !important;
                        font-size: 18px !important;
                      "
                    ></i>
                    <i
                      class="text-warning fa fa-star"
                      style="
                        color: #ede861 !important;
                        font-size: 18px !important;
                      "
                    ></i>
                    <i
                      class="text-muted fa fa-star"
                      style="
                        color: #bcbcbc !important;
                        font-size: 18px !important;
                      "
                    ></i>
                    <i
                      class="text-muted fa fa-star"
                      style="
                        color: #bcbcbc !important;
                        font-size: 18px !important;
                      "
                    ></i>
                  </li>
                  <li class="text-muted text-right">
                    ${{
                      productsList[0] && productsList[0].price
                        ? productsList[0].price
                        : " "
                    }}
                  </li>
                </ul>
                <a href="#" class="h2 text-decoration-none text-dark">{{
                  productsList[0] && productsList[0].name
                    ? productsList[0].name
                    : " "
                }}</a>
                <p class="card-text">
                  {{
                    productsList[0] && productsList[0].description
                      ? productsList[0].description
                      : " "
                  }}
                </p>
                <p class="text-muted">Reviews (24)</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4" v-if="productsList[1]">
            <div class="card h-100">
              <router-link
                :to="{
                  name: 'Single Page Product',
                  params: {
                    id:
                      productsList[1] && productsList[1]._id
                        ? productsList[1]._id
                        : ' ',
                  },
                }"
              >
                <CardImage
                  :productImage="
                    productsList[1] && productsList[1].files
                      ? productsList[1].files
                      : ' '
                  "
                />
              </router-link>
              <div class="card-body">
                <ul class="list-unstyled d-flex justify-content-between">
                  <li>
                    <i
                      class="text-warning fa fa-star"
                      style="
                        color: #ede861 !important;
                        font-size: 18px !important;
                      "
                    ></i>
                    <i
                      class="text-warning fa fa-star"
                      style="
                        color: #ede861 !important;
                        font-size: 18px !important;
                      "
                    ></i>
                    <i
                      class="text-warning fa fa-star"
                      style="
                        color: #ede861 !important;
                        font-size: 18px !important;
                      "
                    ></i>
                    <i
                      class="text-muted fa fa-star"
                      style="
                        color: #bcbcbc !important;
                        font-size: 18px !important;
                      "
                    ></i>
                    <i
                      class="text-muted fa fa-star"
                      style="
                        color: #bcbcbc !important;
                        font-size: 18px !important;
                      "
                    ></i>
                  </li>
                  <li class="text-muted text-right">
                    ${{
                      productsList[1] && productsList[1].price
                        ? productsList[1].price
                        : " "
                    }}
                  </li>
                </ul>
                <a href="#" class="h2 text-decoration-none text-dark">{{
                  productsList[1] && productsList[1].name
                    ? productsList[1].name
                    : " "
                }}</a>
                <p class="card-text">
                  {{
                    productsList[1] && productsList[1].description
                      ? productsList[1].description
                      : " "
                  }}
                </p>
                <p class="text-muted">Reviews (48)</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4" v-if="productsList[2]">
            <div class="card h-100">
              <router-link
                :to="{
                  name: 'Single Page Product',
                  params: {
                    id:
                      productsList[2] && productsList[2]._id
                        ? productsList[2]._id
                        : '',
                  },
                }"
              >
                <CardImage
                  :productImage="
                    productsList[2] && productsList[2].files
                      ? productsList[2].files
                      : ' '
                  "
                />
              </router-link>
              <div class="card-body">
                <ul class="list-unstyled d-flex justify-content-between">
                  <li>
                    <i
                      class="text-warning fa fa-star"
                      style="
                        color: #ede861 !important;
                        font-size: 18px !important;
                      "
                    ></i>
                    <i
                      class="text-warning fa fa-star"
                      style="
                        color: #ede861 !important;
                        font-size: 18px !important;
                      "
                    ></i>
                    <i
                      class="text-warning fa fa-star"
                      style="
                        color: #ede861 !important;
                        font-size: 18px !important;
                      "
                    ></i>
                    <i
                      class="text-warning fa fa-star"
                      style="
                        color: #ede861 !important;
                        font-size: 18px !important;
                      "
                    ></i>
                    <i
                      class="text-warning fa fa-star"
                      style="
                        color: #ede861 !important;
                        font-size: 18px !important;
                      "
                    ></i>
                  </li>
                  <li class="text-muted text-right">
                    ${{
                      productsList[2] && productsList[2].price
                        ? productsList[2].price
                        : " "
                    }}
                  </li>
                </ul>
                <a href="#" class="h2 text-decoration-none text-dark">{{
                  productsList[2] && productsList[2].name
                    ? productsList[2].name
                    : " "
                }}</a>
                <p class="card-text">
                  {{
                    productsList[2] && productsList[2].description
                      ? productsList[2].description
                      : " "
                  }}
                </p>
                <p class="text-muted">Reviews (74)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import apiRequests from "../utils/apiRequests";
import { mapGetters } from "vuex";
import CardImage from "@/components/CardImage.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    CardImage,
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const result = await apiRequests.getProductsList();
      this.$store.dispatch("fetchProducts", result);
    },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  computed: {
    ...mapGetters({
      productsList: "productsList",
    }),
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>

<style scoped>
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
