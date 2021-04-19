<template>
  <div
    class="mbz-artwork"
    :style="{
      'background-image': 'url(assets/img/' + pathArtwork + ')'
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "artwork",
  props: ["artworkPath"],
  data() {
    return {
      pathArtwork: this.artworkPath
    };
  }
};
</script>

<style lang="scss" scoped>
.mbz-artwork {
  background-size: cover;
  background-position: right bottom;
  width: 100%;
  height: 100vh;
  padding: 45px 75px;
  overflow: hidden;
}
</style>
