<template>
  <div class="home">
    <Header />
    <div class="mb-2">
      <div style="position: absolute; top: 50%; left: 50%; z-index: 1">
        <h1>Test</h1>
      </div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
          <div style="height: 100%">
            <h1>Test</h1>
          </div>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=58"
        ></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
            pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>

      <!-- <p class="mt-4">
        Slide #: {{ slide }}<br />
        Sliding: {{ sliding }}
      </p> -->
    </div>
    <b-row class="p-5">
      <b-col cols="3">
        <b-card
          title="Card Title 1"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card
          title="Card Title 2"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>

      <b-col cols="3">
        <b-card
          title="Card Title 3"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card
          title="Card Title 4"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
    </b-row>
    <!-- style={{ marginTop: "445px" }}
    <div class="banner_bottom_agile_info">
      <div class="container">
        <div class="banner_bottom_agile_info_inner_w3ls">
          <div class="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
            <figure class="effect-roxy">
              <img
                src="https://picsum.photos/1024/480/?image=52"
                alt=" "
                class="img-responsive"
              />
              <figcaption>
                <h3><span>F</span>all Ahead</h3>
                <p>New Arrivals</p>
              </figcaption>
            </figure>
          </div>
          <div class="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
            <figure class="effect-roxy">
              <img
                src="https://picsum.photos/1024/480/?image=52"
                alt=" "
                class="img-responsive"
              />
              <figcaption>
                <h3><span>F</span>all Ahead</h3>
                <p>New Arrivals</p>
              </figcaption>
            </figure>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>

    <div class="banner-bootom-w3-agileits">
      <div class="container">
        <h3 class="wthree_text_info">What's <span>Trending</span></h3>

        <div class="col-md-5 bb-grids bb-left-agileits-w3layouts">
          <a>
            <div class="bb-left-agileits-w3layouts-inner grid">
              <figure class="effect-roxy">
                <img
                  src="https://picsum.photos/1024/480/?image=52"
                  alt=" "
                  class="img-responsive"
                />
                <figcaption>
                  <h3><span>S</span>ale{" "}</h3>
                  <p>Upto 55%</p>
                </figcaption>
              </figure>
            </div>
          </a>
        </div>
        <div class="col-md-7 bb-grids bb-middle-agileits-w3layouts">
          <a>
            <div class="bb-middle-agileits-w3layouts grid">
              <figure class="effect-roxy">
                <img
                  src="https://picsum.photos/1024/480/?image=52"
                  alt=" "
                  class="img-responsive"
                />
                <figcaption>
                  <h3><span>S</span>ale{" "}</h3>
                  <p>Upto 55%</p>
                </figcaption>
              </figure>
            </div>
          </a>
          <a>
            <div class="bb-middle-agileits-w3layouts forth grid">
              <figure class="effect-roxy">
                <img
                  src="https://picsum.photos/1024/480/?image=52"
                  alt=" "
                  class="img-responsive"
                />
                <figcaption>
                  <h3><span>S</span>ale{" "}</h3>
                  <p>Upto 65%</p>
                </figcaption>
              </figure>
            </div>
          </a>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    /grids
    <div class="agile_last_double_sectionw3ls">
      <div class="col-md-6 multi-gd-img multi-gd-text">
        <Link to="/products">
            <img src="./images/bot_1.jpg" alt=" " />
            <h4>
              Flat <span>50%</span> offer
            </h4>
          </Link>
        <a>
          <img src="https://picsum.photos/1024/480/?image=52" alt=" " />
          <h4>Flat <span>50%</span> offer</h4>
        </a>
      </div>
      <div class="col-md-6 multi-gd-img multi-gd-text">
        <Link to="/products">
            <img src="./images/bot_2.jpg" alt=" " />
            <h4>
              Flat <span>50%</span> offer
            </h4>
          </Link>
        <a>
          <img src="https://picsum.photos/1024/480/?image=52" alt=" " />
          <h4>Flat <span>50%</span> offer</h4>
        </a>
      </div>
      <div class="clearfix"></div>
    </div>

    <div class="sale-w3ls">
      <div class="container">
        <h6>We Offer Flat <span>40%</span> Discount</h6>

        <Link class="hvr-outline-out button2" to="/single">
            Shop Now{" "}
          </Link>
        <p class="hvr-outline-out button2">Shop Now{" "}</p>
      </div>
    </div>
    <div class="coupons">
      <div class="coupons-grids text-center">
        <div class="w3layouts_mail_grid">
          <div class="col-md-3 w3layouts_mail_grid_left">
            <div class="w3layouts_mail_grid_left1 hvr-radial-out">
              <i class="fa fa-truck" aria-hidden="true"></i>
            </div>
            <div class="w3layouts_mail_grid_left2">
              <h3>FREE SHIPPING</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
          <div class="col-md-3 w3layouts_mail_grid_left">
            <div class="w3layouts_mail_grid_left1 hvr-radial-out">
              <i class="fa fa-headphones" aria-hidden="true"></i>
            </div>
            <div class="w3layouts_mail_grid_left2">
              <h3>24/7 SUPPORT</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
          <div class="col-md-3 w3layouts_mail_grid_left">
            <div class="w3layouts_mail_grid_left1 hvr-radial-out">
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <div class="w3layouts_mail_grid_left2">
              <h3>MONEY BACK GUARANTEE</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
          <div class="col-md-3 w3layouts_mail_grid_left">
            <div class="w3layouts_mail_grid_left1 hvr-radial-out">
              <i class="fa fa-gift" aria-hidden="true"></i>
            </div>
            <div class="w3layouts_mail_grid_left2">
              <h3>FREE GIFT COUPONS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div> -->

    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
