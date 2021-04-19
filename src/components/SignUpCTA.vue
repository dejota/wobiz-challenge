<template>
  <div class="wbz-signupcta">
    <p class="mr-3 mt-2">{{ textSignupcta }}</p>
    <a :href="button.path">
      <Button :button-class="button.class" :button-text="button.text" />
    </a>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "SignUpCTA",
  components: {
    Button
  },
  props: ["signupctaText"],
  data() {
    return {
      textSignupcta: this.signupctaText,
      button: {
        class: "btn-signup",
        text: "Crea tu cuenta",
        path: "/signup"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.wbz-signupcta {
  float: right;
  p {
    color: $blue-one;
    font-size: 13px;
    float: left;
    margin-right: 13px;
  }
  a {
    float: left;
  }
}
</style>
