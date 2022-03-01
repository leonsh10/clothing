<template>
  <tr class="">
    <td class="text-start">{{ about.title }}</td>
    <td class="text-start">{{ about.description }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    about: Object,
  },
};
</script>
