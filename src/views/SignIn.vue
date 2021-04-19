<template>
  <div class="row mr-0">
    <div class="col-12 col-md-6 col-lg-4 p-0 ml-0 col">
      <SignInForm />
    </div>
    <div class="col-lg-8 col-md-6 d-none d-md-block p-0 col">
      <Artwork :artwork-path="artwork.path">
        <SignUpCTA :signupcta-text="signupcta.text" />
      </Artwork>
    </div>
  </div>
</template>
<script>
import SignInForm from "@/components/SignInForm.vue";
import Artwork from "@/components/Artwork/Artwork.vue";
import SignUpCTA from "@/components/SignUpCTA.vue";

export default {
  name: "SignIn",
  components: {
    SignInForm,
    Artwork,
    SignUpCTA
  },
  data() {
    return {
      artwork: {
        path: "bg.png"
      },
      signupcta: {
        text: "¿No tienes una cuenta en Wobiz?"
      }
    };
  }
};
</script>
<style lang="scss" scoped></style>
