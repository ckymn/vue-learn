<template>
  <div class="hello">
    <h3 class="alert alert-danger">{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
