<template>
  <div>
    <VueDropzone
      id="dropzone"
      ref="filesDropzone"
      :options="dropzoneOptions"
      :useCustomSlot="true"
      @vdropzone-mounted="handleMount"
      @vdropzone-removed-file="removeFile"
      :destroyDropzone="false"
      class="rounded-lg mb-4"
    >
      <div class="justify-content-center">
        <h3 class="text-success font-weight-bold">
          Drag and drop to upload files
        </h3>
        <div>...or click to select a file from your computer</div>
      </div>
    </VueDropzone>
  </div>
</template>

<script>
import VueDropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import apiRequests from "../../utils/apiRequests";

export default {
  components: {
    VueDropzone,
  },
  props: {
    productId: String,
    initialFiles: String,
  },
  data() {
    return {
      dropzoneOptions: {
        url: `http://localhost:3000/products/${this.productId}/uploadFile`,
        method: "put",
        thumbnailWidth: 300,
        maxFilesize: 1,
        addRemoveLinks: true,
      },
    };
  },
  methods: {
    removeFile(file) {
      apiRequests.removeFile(this.productId, file);
    },
    async handleMount() {
      if (!this.initialFiles || this.initialFiles.length === 0) {
        return;
      }

      const documentFiles = await apiRequests.getFilesDetails(
        this.initialFiles
      );

      documentFiles.forEach(({ fileDetails, fileUrl }) => {
        this.$refs.filesDropzone.manuallyAddFile(
          fileDetails,
          `http://localhost:3000/${fileUrl}`
        );
      });
    },
  },
};
</script>
