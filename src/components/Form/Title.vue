<template>
  <div class="wbz-title">
    <h2 class="mt-5 mb-4">
      {{ textTitle }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["titleText"],
  data() {
    return {
      textTitle: this.titleText
    };
  }
};
</script>

<style lang="scss" scoped>
.wbz-title {
  h2 {
    color: $blue-one;
    font-size: 26px;
    font-weight: 700;
    line-height: 31.2px;
  }
}
</style>
