<template>
  <tr class="">
    <td class="text-start">{{ about.title }}</td>
    <td class="text-start">{{ about.description }}</td>
    <td class="text-start">
      <b-button class="btn btn-primary" style="color: white">Edit</b-button>
      <b-button class="btn btn-danger" style="margin-left: 3px; color: white"
        >Delete</b-button
      >
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    about: Object,
  },
};
</script>
