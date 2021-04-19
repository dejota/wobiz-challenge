<template>
  <div class="wbz-logo">
    <a :href="linkLogo">
      <img :src="pathLogo" :width="widthLogo" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: ["logoLink", "logoPath", "logoWidth"],
  data() {
    return {
      linkLogo: this.logoLink,
      pathLogo: this.logoPath,
      widthLogo: this.logoWidth
    };
  }
};
</script>

<style lang="scss" scoped>
.wbz-logo {
  padding: 10px 0 0;
}
</style>
