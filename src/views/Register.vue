<template>
  <div style="background-color: #ebebeb">
    <Header />
    <div
      class="row justify-content-center"
      style="padding-bottom: 30px !important"
    >
      <div class="column col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <img width="500" height="500" src="../assets/bg-1.jpg" />
      </div>
      <div class="column col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <form @submit.prevent="createUser">
          <h3
            style="
              margin-bottom: 24px;
              font-family: sans-serif;
              margin-top: 20px;
            "
          >
            Register
          </h3>

          <div v-if="error" class="alert alert-danger">{{ error }}</div>

          <div class="form-group">
            <label class="labels_style" style="margin-top: 6px"
              >Email address</label
            >
            <input
              type="email"
              class="form-control form-control-lg"
              style="margin-top: 8px"
              name="email"
              v-model="form.email"
              required
              placeholder="Email"
            />
          </div>

          <div class="form-group">
            <label class="labels_style" style="margin-top: 22px"
              >Password</label
            >
            <input
              type="password"
              class="form-control form-control-lg"
              name="password"
              style="margin-top: 6px"
              placeholder="Password"
              v-model="form.password"
              required
            />
          </div>

          <b-button
            style="
              background: #e3b04b;
              border: none;
              width: 350px;
              border-radius: 5px;
            "
            type="submit"
            block
            variant="primary"
            class="butoni__sign-in"
            >Register</b-button
          >
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import apiCaller from "../utils/apiRequests/apiCaller";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    async createUser() {
      try {
        await apiCaller.post("users/register", {
          email: this.form.email,
          password: this.form.password,
        });
        this.$router.push("/login");
      } catch (err) {
        this.error = err;
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background: #2554ff !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}

body,
html,
.App,
.vertical-center {
  width: 100%;
  height: 100%;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
}

.inner-block {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}

.vertical-center .form-control:focus {
  border-color: #2554ff;
  box-shadow: none;
}

.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

label {
  font-weight: 500;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}

.forgot-password a {
  color: #2554ff;
}

.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}

.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}

.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}

.vue-tempalte {
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 20px;
  margin-left: 736px;
  background-color: white;
}
form {
  margin-top: 40px;
}

.butoni__sign-in {
  margin-left: 1px;
  margin-top: 21px;
  font-size: 20px;
  width: 250px;
  border-radius: 20px;
}

.labels_style {
  font-size: 15px !important;
  font-weight: 500 !important;
  font-family: sans-serif;
}

input {
  width: 350px;
}

input:focus {
  border: 1px solid #e3b04b;
  box-shadow: 0 0 1px #e3b04b;
  outline-offset: 0px;
  outline: none;
}

::placeholder {
  font-size: 15px;
  color: #eeeeee;
}

@media screen and (max-width: 850px) {
  .image.responsive {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }

  img {
    width: 374px; /* The width is 100%, when the viewport is 800px or smaller */
    height: 374px;
  }

  .vue-tempalte {
    width: 370px;
    height: 470px;
    margin: 10px auto;
  }
}
</style>
