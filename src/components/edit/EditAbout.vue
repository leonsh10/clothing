<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#0d6efd" dark v-bind="attrs" v-on="on">
          <i class="fa fa-edit"></i> Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit About Info</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form
              ref="form"
              style="height: 200px"
              v-model="valid"
              lazy-validation
              @submit.prevent="editAbout"
            >
              <v-text-field
                v-model="form.title"
                :counter="20"
                :rules="titleRules"
                label="Title"
                required
                placeholder="example: Lorem Ipsum"
              ></v-text-field>

              <v-text-field
                v-model="form.description"
                :counter="400"
                :rules="descriptionRules"
                label="Description"
                required
                placeholder="example: Lorem Ipsum"
              ></v-text-field>
              <!-- <v-btn color="blue darken-1" texttype="submit" :disabled="!valid">
                Save
              </v-btn> -->
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
          <v-btn color="blue darken-1" text @click="dialog = false">
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
    about: Object,
    fetchAbout: Function,
  },
  data() {
    return {
      form: {
        _id: this.about._id,
        title: this.about.title,
        description: this.about.description,
      },
      dialog: false,
      error: null,
      valid: true,
      title: "",
      titleRules: [
        (v) => !!v || "Title is required",
        (v) => (v && v.length <= 20) || "Title must be less than 20 characters",
      ],
      description: "",
      descriptionRules: [
        (v) => !!v || "Description is required",
        (v) =>
          (v && v.length <= 400) ||
          "Description must be less than 400 characters",
      ],
    };
  },
  methods: {
    successEditToast() {
      this.$bvToast.toast("About edited successfully!", {
        title: "Success",
        variant: "success",
        autoHideDelay: 5000,
        solid: true,
      });
    },
    async editAbout() {
      const response = await apiRequests.editAbout({ ...this.form });
      if (response) {
        this.successEditToast();
        this.fetchAbout();
        this.dialog = false;
      }
    },
  },
};
</script>
