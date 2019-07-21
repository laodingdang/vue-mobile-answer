<template>
  <div class="home">
    <itemcontainer father-component="item"></itemcontainer>
  </div>
</template>

<script>
import itemcontainer from "../../components/itemcontainer";
export default {
  name: "home",
  components: {
    itemcontainer
  }
};
</script>
