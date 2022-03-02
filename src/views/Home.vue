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

        <!-- <b-carousel-slide
          img-src="https://technext.github.io/zay-shop/assets/img/banner_img_02.jpg"
        >
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <b-carousel-slide
          img-src="https://technext.github.io/zay-shop/assets/img/banner_img_03.jpg"
        ></b-carousel-slide> -->

        <!-- <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="300"
              src="https://technext.github.io/zay-shop/assets/img/banner_img_03.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide> -->

        <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
            pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide> -->
      </b-carousel>
    </div>

    <!-- <div
      id="template-mo-zay-hero-carousel"
      class="carousel slide pointer-event"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img
                  class="img-fluid"
                  src="https://picsum.photos/1024/480/?image=52"
                  alt=""
                />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left align-self-center">
                  <h1 class="h1 text-success"><b>Zay</b> eCommerce</h1>
                  <h3 class="h2">Tiny and Perfect eCommerce Template</h3>
                  <p>
                    Zay Shop is an eCommerce HTML5 CSS template with latest
                    version of Bootstrap 5 (beta 1). This template is 100% free
                    provided by
                    <a rel="sponsored" class="text-success" href="#"
                      >TemplateMo</a
                    >
                    website. Image credits go to
                    <a rel="sponsored" class="text-success" href="#"
                      >Freepik Stories</a
                    >,
                    <a rel="sponsored" class="text-success" href="#"
                      >Unsplash</a
                    >
                    and
                    <a rel="sponsored" class="text-success" href="#">Icons 8</a
                    >.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img
                  class="img-fluid"
                  src="https://picsum.photos/1024/480/?image=52"
                  alt=""
                />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <h1 class="h1">Proident occaecat</h1>
                  <h3 class="h2">Aliquip ex ea commodo consequat</h3>
                  <p>
                    You are permitted to use this Zay CSS template for your
                    commercial websites. You are
                    <strong>not permitted</strong> to re-distribute the template
                    ZIP file in any kind of template collection websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img
                  class="img-fluid"
                  src="https://picsum.photos/1024/480/?image=55"
                  alt=""
                />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <h1 class="h1">Repr in voluptate</h1>
                  <h3 class="h2">Ullamco laboris nisi ut</h3>
                  <p>
                    We bring you 100% free CSS templates for your websites. If
                    you wish to support TemplateMo, please make a small
                    contribution via PayPal or tell your friends about our
                    website. Thank you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev text-decoration-none w-auto ps-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
      </a>
      <a
        class="carousel-control-next text-decoration-none w-auto pe-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
      </a>
    </div> -->

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
          <a href="#"
            ><img
              src="https://technext.github.io/zay-shop/assets/img/category_img_01.jpg"
              class="rounded-circle img-fluid border"
          /></a>
          <h5 class="text-center mt-3 mb-3">Watches</h5>
          <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
        </div>
        <div class="col-12 col-md-4 p-5 mt-3">
          <a href="#"
            ><img
              src="https://technext.github.io/zay-shop/assets/img/category_img_02.jpg"
              class="rounded-circle img-fluid border"
          /></a>
          <h2 class="h5 text-center mt-3 mb-3">Shoes</h2>
          <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
        </div>
        <div class="col-12 col-md-4 p-5 mt-3">
          <a href="#"
            ><img
              src="https://technext.github.io/zay-shop/assets/img/category_img_03.jpg"
              class="rounded-circle img-fluid border"
          /></a>
          <h2 class="h5 text-center mt-3 mb-3">Accessories</h2>
          <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
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
          <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
              <router-link
                :to="{
                  name: 'Single Page Product',
                  params: { id: productsList[0]._id },
                }"
              >
                <!--v-if="srcfirst"
                  :src="srcfirst" -->
                <!-- <img
                  class="card-img-top"
                  alt="..."
                  src="https://technext.github.io/zay-shop/assets/img/feature_prod_01.jpg"
                /> -->
                <CardImage :productImage="productsList[0].files" />
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
                    ${{ productsList[0].price }}
                  </li>
                </ul>
                <a href="#" class="h2 text-decoration-none text-dark">{{
                  productsList[0].name
                }}</a>
                <p class="card-text">
                  {{ productsList[0].description }}
                </p>
                <p class="text-muted">Reviews (24)</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
              <router-link
                :to="{
                  name: 'Single Page Product',
                  params: { id: productsList[1]._id },
                }"
              >
                <!-- <img
                  src="https://technext.github.io/zay-shop/assets/img/feature_prod_02.jpg"
                  class="card-img-top"
                  alt="..."
                /> -->
                <CardImage :productImage="productsList[1].files" />
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
                    ${{ productsList[1].price }}
                  </li>
                </ul>
                <a href="#" class="h2 text-decoration-none text-dark">{{
                  productsList[1].name
                }}</a>
                <p class="card-text">
                  {{ productsList[1].description }}
                </p>
                <p class="text-muted">Reviews (48)</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
              <router-link
                :to="{
                  name: 'Single Page Product',
                  params: { id: productsList[2]._id },
                }"
              >
                <!-- <img
                  src="https://technext.github.io/zay-shop/assets/img/feature_prod_03.jpg"
                  class="card-img-top"
                  alt="..."
                /> -->
                <CardImage :productImage="productsList[2].files" />
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
                    ${{ productsList[2].price }}
                  </li>
                </ul>
                <a href="#" class="h2 text-decoration-none text-dark">{{
                  productsList[2].name
                }}</a>
                <p class="card-text">
                  {{ productsList[2].description }}
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

  <!-- srcfirst() {
      if (productsList) {
        const firstFilename = productsList[0].files?.split(";")[0];

        return firstFilename
          ? `http://localhost:3000/static/${firstFilename}`
          : null;
      }
    },
    srcsecond() {
      if (productsList) {
        const secondFilename = productsList[1].files?.split(";")[0];

        return secondFilename
          ? `http://localhost:3000/static/${secondFilename}`
          : null;
      }
    },
    srcthird() {
      if (productsList) {
        const thirdFilename = productsList[2].files?.split(";")[0];

        return thirdFilename
          ? `http://localhost:3000/static/${thirdFilename}`
          : null;
      }
    }, -->
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
  },
};
</script>
