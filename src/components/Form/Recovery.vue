<template>
  <div class="mbz-recovery pl-0 mt-2 mb-2 link-decoration">
    <a :href="linkRecovery">{{ textRecovery }}</a>
  </div>
</template>

<script>
export default {
  name: "Recovery",
  props: ["recoveryText", "recoveryLink"],
  data() {
    return {
      textRecovery: this.recoveryText,
      linkRecovery: this.recoveryLink
    };
  }
};
</script>

<style lang="scss" scoped>
.mbz-recovery {
  a {
    color: $gray-two;
    font-size: 14px;
    text-decoration: underline !important;
    &:hover {
      color: $gray-one;
    }
  }
}
</style>
