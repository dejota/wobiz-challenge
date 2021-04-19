<template>
  <div class="wbz-form row h-100">
    <div class="h-100 col">
      <Logo
        :logo-link="logo.link"
        :logo-path="logo.path"
        :logo-width="logo.width"
      />

      <div v-if="!successful">
        <Title :title-text="title.text" />

        <div v-if="errorResponse" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>

        <input
          type="text"
          class="form-control"
          placeholder="ej: usuario@mail.com"
          v-model="state.email"
          v-on:keyup.enter="$event.target.nextElementSibling.focus()"
          @keyup.enter="submitForm"
        />
        <div v-if="v$.email.$error" class="alert alert-danger" role="alert">
          {{ emailErrors(v$.email.$errors[0].$message) }}
        </div>

        <input
          type="password"
          class="form-control"
          placeholder="Escribe tu contraseña"
          v-model="state.password"
          v-on:keyup.enter="$event.target.nextElementSibling.focus()"
          @keyup.enter="submitForm"
        />
        <div v-if="v$.password.$error" class="alert alert-danger" role="alert">
          {{ passwordErrors(v$.password.$errors[0].$message) }}
        </div>

        <Recovery
          :recovery-link="recovery.link"
          :recovery-text="recovery.text"
        />

        <Button
          :button-class="button.class"
          :button-text="button.text"
          @click="submitForm"
        />
      </div>

      <div v-else>
        <Title title-text="Inicio Satisfactorio" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Form/Logo.vue";
import Title from "@/components/Form/Title.vue";
import Recovery from "@/components/Form/Recovery.vue";
import Button from "@/components/Button.vue";
import axios from "axios";
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import consola from "consola";
import mock from "../mock";

export default {
  name: "Form",
  props: {},
  components: {
    Logo,
    Title,
    Recovery,
    Button
  },
  data() {
    return {
      logo: {
        link: "https://www.wobiz.com/",
        path: "/assets/img/logo.svg",
        width: "180"
      },
      title: {
        text: "Ingresas a tu cuenta"
      },
      recovery: {
        text: "¿Olvidaste tu contraseña?",
        link: "/recovery"
      },
      button: {
        class: "btn-signin",
        text: "Ingresar a mi cuenta"
      },
      errorResponse: false,
      errorMessage:
        "Tu email o contraseña son incorrectos. Revísalos y vuelve a intentar.",
      successful: false
    };
  },
  mounted() {
    mock;
  },
  methods: {
    submitForm() {
      this.v$.$validate();

      if (!this.v$.$error) {
        console.log("Form successfully submitted");

        axios
          .get("http://admin.localwobiz.com/login", {
            params: { email: this.state.email, password: this.state.password }
          })
          .then(response => {
            consola.success(response.status);
            consola.info(response.data);
            this.errorResponse = false;

            this.successful = true;
          })
          .catch(err => {
            consola.error(err.response.status);
            consola.error(err.response.data);

            this.errorResponse = true;
          });
      } else {
        console.log("Form failed validation");
      }
    },
    emailErrors(e) {
      switch (e) {
        case "Value is required":
          return "Necesitamos tu email.";
        case "Value is not a valid email address":
          return "El email ingresado no es correcto.";
      }
    },
    passwordErrors(e) {
      switch (e) {
        case "Value is required":
          return "Necesitamos tu contraseña.";
        case "This field should be at least 6 long":
          return "La contraseña no tiene un formato válido.";
      }
    }
  },
  setup() {
    const state = reactive({
      email: "",
      password: ""
    });

    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required, minLength: minLength(6) }
      };
    });

    const v$ = useValidate(rules, state);

    return {
      state,
      v$
    };
  }
};
</script>

<style lang="scss" scoped>
.wbz-form {
  padding: 20px 47px 30px !important;
  -webkit-box-shadow: 0 0 6px 0 $transparent-two;
  box-shadow: 0 0 6px 0 $transparent-two;

  input {
    height: 49.75px;
    margin-bottom: 13px;
    padding: 4.875px 9.75px;
  }

  .alert {
    padding: 10px 10px 10px 25px;
    background-color: $orange-one;
    color: $white-one;
    font-size: 13px;
    font-weight: 500;
  }
}
</style>
