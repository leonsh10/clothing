<template>
  <tr class="">
    <td class="text-start">{{ contact.name }}</td>
    <td class="text-start">{{ contact.email }}</td>
    <td class="text-start">{{ contact.subject }}</td>
    <td class="text-start">{{ contact.message }}</td>
    <b-button
      class="btn btn-danger"
      style="margin-left: 3px; color: white; margin-top: 5px"
      >Delete</b-button
    >
  </tr>
</template>

<script>
export default {
  props: {
    contact: Object,
  },
};
</script>
