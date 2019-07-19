<template>
  <div class="itemcontainer">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "itemcontainer",
  data() {
    return {
      msg: "hello world"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
