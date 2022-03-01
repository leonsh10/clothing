<template>
  <tr class="">
    <td class="text-start">
      <img
        class="rounded-0 img-fluid pt-2 pb-2"
        style="object-fit: cover; height: 100px; width: 100px"
        v-if="src"
        :src="src"
      />
    </td>
    <td class="text-start">{{ product.name }}</td>
    <td class="text-start">{{ product.sizes }}</td>
    <td class="text-start">{{ product.price }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  computed: {
    src() {
      const filename = this.product.files?.split(";")[0];

      return filename ? `http://localhost:3000/static/${filename}` : null;
    },
  },
};
</script>
