<template>
  <div class="about">
    <Header />
    <div
      class="modal fade bg-white"
      id="templatemo_search"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="w-100 pt-1 mb-5 text-right">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form
          action=""
          method="get"
          class="modal-content modal-body border-0 p-0"
        >
          <div class="input-group mb-2">
            <input
              type="text"
              class="form-control"
              id="inputModalSearch"
              name="q"
              placeholder="Search ..."
            />
            <button
              type="submit"
              class="input-group-text bg-success text-light"
            >
              <i class="fa fa-fw fa-search text-white"></i>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!--  -->
    <div
      class="hero_image"
      style="
        background-image: url(https://wallpapercave.com/wp/wp9005637.jpg);
        height: 700px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 660px;
        display: table;
        color: white;
      "
    >
      <div
        class="hero_content"
        style="display: table-cell; vertical-align: middle"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-8" v-if="this.aboutList[0]">
              <h1
                style="
                  font-family: Times New Roman, Times, serif;
                  color: #e8d6d6;
                "
              >
                {{ aboutList[0].title }}
              </h1>
              <p style="color: #e8d6d6">
                {{ aboutList[0].description }}
              </p>
              <button
                type="button"
                class="btn btn-primary btn-md border-0"
                style="
                  background-image: linear-gradient(to right, blue, gray);
                  border-radius: 20px;
                "
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <figure class="text-center">
      <blockquote class="blockquote">
        <h1
          style="
            padding: 30px 30px 5px 30px;
            margin-top: 8mm;
            font-size: 45px;
            font-weight: bold;
            font-family: Times New Roman, Times, serif;
          "
        >
          Find your best clothes
        </h1>
        <p>A well-known quote, contained in a blockquote element.</p>
      </blockquote>
    </figure>

    <div class="container my-5">
      <div class="row">
        <div class="col-lg-6">
          <img
            class="w-100 shadow"
            src="https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?k=20&m=887360960&s=612x612&w=0&h=N0k2yX9noV6kNgpmKbcSXaLOl2x8Mbt_lyppAmfhNcA="
          />
        </div>
        <div class="col-lg-6">
          <div class="p-5 mt-4" v-if="this.aboutList[1]">
            <h1
              class="display-4"
              style="
                font-weight: bold;
                color: #4d110c;
                font-family: Times New Roman, Times, serif;
              "
            >
              {{ aboutList[1].title }}
            </h1>
            <p
              class="lead"
              style="
                font-family: Times New Roman, Times, serif;
                font-size: 18px;
              "
            >
              {{ aboutList[1].description }}
            </p>
            <a href="#" class="btn btn-outline-dark">Read More</a>
          </div>
        </div>
      </div>
    </div>

    <!--  -->

    <div class="features">
      <div class="container">
        <figure class="text-center">
          <blockquote class="blockquote">
            <h1
              style="
                padding: 30px 30px 5px 30px;
                margin-top: 8mm;
                font-size: 30px;
                font-family: Times New Roman, Times, serif;
              "
            >
              Features
            </h1>
            <p>The main factors of our company</p>
          </blockquote>
        </figure>
        <div class="row responsive-features" style="margin-bottom: 3cm">
          <div class="col-4 mt-5">
            <i
              class="fa fa-camera-retro fa-4x"
              style="margin-left: 4.5cm; margin-bottom: 5mm"
            ></i>
            <img class="center" alt="" />
            <h4 class="text-center text-features">
              Graphical and Numerical reports
            </h4>
            <p class="text-center text-features">
              Graphical and numerical reports(daily, weekly,<br />monthly, and
              annually) and regular invoice<br />generation
            </p>
          </div>
          <div class="col-4 mt-5">
            <i
              class="fa fa-bell fa-4x"
              aria-hidden="true"
              style="margin-left: 4.5cm; margin-bottom: 5mm"
            ></i>
            <img class="center" src="" alt="" />
            <h4 class="text-center text-features">Happy-hour pricing</h4>
            <p class="text-center text-features">
              Full management of articles and happy-hour <br />pricing
              felxibility
            </p>
          </div>
          <div class="col-4 mt-5">
            <i
              class="fa fa-user-circle-o fa-4x"
              aria-hidden="true"
              style="margin-left: 4.5cm; margin-bottom: 5mm"
            ></i>
            <img class="center" src="" alt="" />
            <h4 class="text-center text-features">Jobs</h4>
            <p class="text-center text-features">
              Job management opportunities from anywhere.Every month.
            </p>
          </div>

          <div class="col-4 mt-5">
            <i
              class="fa fa-handshake-o fa-4x"
              aria-hidden="true"
              style="margin-left: 4.5cm; margin-bottom: 5mm"
            ></i>
            <img class="center" src="" alt="" />
            <h4 class="text-center text-features">Our deals with others</h4>
            <p class="text-center text-features">
              Job management opportunities from anywhere.Every month.
            </p>
          </div>

          <div class="col-4 mt-5">
            <i
              class="fa fa-cc-paypal fa-4x"
              aria-hidden="true"
              style="margin-left: 4.5cm; margin-bottom: 5mm"
            ></i>
            <img class="center" src="" alt="" />
            <h4 class="text-center text-features">Online shopping</h4>
            <p class="text-center text-features">Safe online shopping</p>
          </div>

          <div class="col-4 mt-5">
            <i
              class="fa fa-scissors fa-4x"
              aria-hidden="true"
              style="margin-left: 4.5cm; margin-bottom: 5mm"
            ></i>
            <img class="center" src="" alt="" />
            <h4 class="text-center text-features">Materials</h4>
            <p class="text-center text-features">
              Best value and is the most comfortable option
            </p>
          </div>
        </div>
      </div>
    </div>

    <section class="features6 cid-raSLS2Jnck" id="features6-g">
      <div class="container" style="margin-bottom: 5cm">
        <div class="row justify-content-center align-items-center">
          <div class="col-sm-12 text-block col-md-6" v-if="this.aboutList[2]">
            <h3
              class="mbr-white mbr-section-title mbr-fonts-style align-center display-2"
              style="
                font-family: Times New Roman, Times, serif;
                display: flex;
                justify-content: center; ;
              "
            >
              <strong>
                {{ aboutList[2].title }}
              </strong>
            </h3>
            <div
              class="mbr-white mbr-section-text mbr-fonts-style align-center display-7"
              style="font-family: Times New Roman, Times, serif"
            >
              {{ aboutList[2].description }}
            </div>
          </div>
          <div class="col-sm-12 col-md-6 img-block align-center">
            <div class="mbr-figure">
              <img
                class="responsive-image"
                src="https://aeworld.com/wp-content/uploads/2020/01/DIOR-MENS-WINTER-20-21-GROUPSHOT-BY-BRETT-LLOYD-FOR-DIOR.jpg"
                alt="Mobirise Bootstrap landing page template"
                title=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <figure class="text-center">
      <blockquote class="blockquote">
        <h1
          style="
            padding: 30px 30px 5px 30px;
            margin-top: 8mm;
            font-size: 30px;
            font-family: Times New Roman, Times, serif;
          "
        >
          Some words from our team
        </h1>
        <p>A well-known quote, contained in a blockquote element.</p>
      </blockquote>
    </figure>

    <div class="container mt-5 mb-5">
      <div class="row g-2">
        <div class="col-md-4" style="border: none; margin-bottom: 3cm">
          <div class="card p-3 text-center px-4" style="margin-right: 1cm">
            <div class="user-image" style="margin-top: 4mm">
              <img
                src="https://i.imgur.com/ACeArwY.jpg"
                class="rounded-circle"
                width="80"
              />
            </div>
            <div class="user-content">
              <h5 class="mb-0">Veera Duncan</h5>
              <span>Software Architect</span>
              <figure class="text-center mb-0" style="margin-top: 3mm">
                <blockquote class="blockquote">
                  <p class="pb-3">
                    <span class="lead font-italic"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.orem ipsum dolor sit amet, consectetur
                      adipiscing.</span
                    >
                  </p>
                </blockquote>
                <figcaption class="blockquote-footer mb-0">
                  Thomas Edison
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div class="col-md-4" style="border: none; margin-bottom: 3cm">
          <div class="card p-3 text-center px-4" style="margin-right: 1cm">
            <div class="user-image" style="margin-top: 4mm">
              <img
                src="https://i.imgur.com/ACeArwY.jpg"
                class="rounded-circle"
                width="80"
              />
            </div>
            <div class="user-content">
              <h5 class="mb-0">Veera Duncan</h5>
              <span>Software Architect</span>
              <figure class="text-center mb-0" style="margin-top: 3mm">
                <blockquote class="blockquote">
                  <p class="pb-3">
                    <span class="lead font-italic"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.orem ipsum dolor sit amet, consectetur
                      adipiscing.</span
                    >
                  </p>
                </blockquote>
                <figcaption class="blockquote-footer mb-0">
                  Thomas Edison
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div class="col-md-4" style="border: none; margin-bottom: 3cm">
          <div class="card p-3 text-center px-4">
            <div class="user-image" style="margin-top: 4mm">
              <img
                src="https://i.imgur.com/ACeArwY.jpg"
                class="rounded-circle"
                width="80"
              />
            </div>
            <div class="user-content">
              <h5 class="mb-0">Veera Duncan</h5>
              <span>Software Architect</span>
              <figure class="text-center mb-0" style="margin-top: 3mm">
                <blockquote class="blockquote">
                  <p class="pb-3">
                    <span class="lead font-italic"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.orem ipsum dolor sit amet, consectetur
                      adipiscing.</span
                    >
                  </p>
                </blockquote>
                <figcaption class="blockquote-footer mb-0">
                  Thomas Edison
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>

  <!-- Template -->
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import apiRequests from "../utils/apiRequests";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },

  created() {
    this.fetchAbout();
  },
  methods: {
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

<style scoped>
@media screen and (max-width: 660px) {
  .responsive-image {
    width: 350px;
    height: 300px;
  }
  .responsive-features {
    display: flex;
    flex-direction: column;
  }
  .text-features {
    margin-left: 185px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    height: fit-content;
  }
}
</style>
