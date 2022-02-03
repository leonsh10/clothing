<template>
  <div>
    <Header />
    <div class="vue-tempalte">
      <form @submit.prevent="createUser">
        <h3 style="margin-bottom: 20px; margin-left: 75px">Register</h3>

        <!-- <div class="form-group">
                <label>Name</label>
                <input type="text" v-model="form.name" class="form-control form-control-lg" required />
            </div> -->

        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            v-model="form.email"
            class="form-control form-control-lg"
            required
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            v-model="form.password"
            class="form-control form-control-lg"
            required
          />
        </div>

       <div class="form-group">
          
         <p v-if="error">{{this.error}}</p>
        </div>

        <b-button type="submit" block variant="primary" class="butoni__sign-in"
          >Register</b-button
        >

        <div style="margin-top: 20px" class="social-icons">
          <ul>
            <li>
              <a href="#"><i class="fa fa-google"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
          </ul>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>


<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import apiRequests from "../utils/axios";
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
       await apiRequests.post("users/register", {
          email: this.form.email,
          password: this.form.password,
        });
      console.log(this.form.email)
        // apiRequests.get('/users/list');
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
  background-color: #e2e2e2;
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
</style>