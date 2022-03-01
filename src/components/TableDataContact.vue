<template>
  <tr class="">
    <td class="text-start">{{ contact.name }}</td>
    <td class="text-start">{{ contact.email }}</td>
    <td class="text-start">{{ contact.subject }}</td>
    <td class="text-start">{{ contact.message }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    contact: Object,
  },
};
</script>
