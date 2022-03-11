<template>
  <img
    class="card-img-top"
    style="height: 310px"
    alt="..."
    v-if="src"
    :src="src"
  />
</template>
<script>
export default {
  props: {
    productImage: Object,
  },
  computed: {
    src() {
      const filename = this.productImage?.split(";")[0];

      return filename ? `http://localhost:3000/static/${filename}` : null;
    },
  },
};
</script>
