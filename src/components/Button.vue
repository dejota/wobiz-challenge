<template>
  <div>
    <button type="button" class="wbz-btn btn" :class="classButton">
      <div class="button-text">
        {{ textButton }}
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["buttonClass", "buttonText"],
  data() {
    return {
      classButton: this.buttonClass,
      textButton: this.buttonText
    };
  }
};
</script>

<style lang="scss" scoped>
.wbz-btn {
  &.btn-signin {
    width: 100%;
    height: 45px !important;
    background-color: $blue-two;
    color: $white-one;
    font-weight: 700 !important;
    font-size: 13px;
    text-transform: none !important;
  }
  &.btn-signup {
    border: 1px solid $blue-one;
    height: 35px !important;
    background-color: $transparent-one;
    color: $blue-one;
    font-weight: 700 !important;
    font-size: 13px;
    text-transform: none !important;
    padding: 0 16px;
    &:hover {
      border: 1px solid $blue-one;
      background-color: $blue-one;
      color: $white-one;
    }
  }
}
</style>
