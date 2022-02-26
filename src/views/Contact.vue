<template>
  <div>
    <Header />
    
    <div class="container-fluid bg-light py-5">
        <div class="col-md-6 m-auto text-center">
            <h1 class="h1" style=" font-family: Times New Roman;">Contact Us</h1>
            <p>
                Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet.
            </p>
        </div>
    </div>
<div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.343786761927!2d21.149849415806784!3d42.63287127916947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549eed611519f3%3A0x67f0cab2bd31c914!2sAlbi%20Mall!5e0!3m2!1sen!2s!4v1571741329054!5m2!1sen!2s" width="100%" height="380" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>

    
<div class="container py-5">
        <div class="row py-5">
             <h1
              class="display-4"
              style="
                
                color:#30302f;
                font-family: Times New Roman;
                margin-left:10.5cm;
                padding-bottom:1cm;
              "
            >
             Send us a message!
            </h1>
    
            <form class="col-md-9 m-auto" @submit.prevent="createContact">
                <div class="row">
                    <div class="form-group col-md-6 mb-3">
                        

                        <label for="inputname"  style=" font-weight:bold;font-family: Times New Roman, Times, serif;">
                            Name:</label>
                        <input type="text" v-model="form.name" class="form-control mt-1" id="name" name="name" placeholder="Name">
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="inputemail" style=" font-weight:bold;font-family: Times New Roman, Times, serif;">Email:</label>
                        <input type="email" v-model="form.email" class="form-control mt-1" id="email" name="email" placeholder="Email">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="inputsubject" style=" font-weight:bold;font-family: Times New Roman, Times, serif;">Subject:</label>
                    <input type="text" v-model="form.subject" class="form-control mt-1" id="subject" name="subject" placeholder="Subject">
                </div>
                <div class="mb-3">
                    <label for="inputmessage" style=" font-weight:bold;font-family: Times New Roman, Times, serif;">Message:</label>
                    <textarea class="form-control mt-1" v-model="form.message" id="message" name="message" placeholder="Message" rows="8"></textarea>
                </div>
                <div class="row">
                    <div class="col text-end mt-2">
                        <button type="submit" class="btn btn-success btn-lg px-3">Let’s Talk</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    
    
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import apiRequests from "../utils/apiRequests"
export default {
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      error: null,
    };
  },
  methods:{
      async createContact() {
     await apiRequests.createContact({ ...this.form });
      alert("Forma u dergua me sukses")
      // this.$router.push(`/view/${newRealEstate._id}`);
  }

  }

};
</script>

<style scoped></style>
