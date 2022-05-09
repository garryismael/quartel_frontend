<template>
  <v-card elevation="2" class="mx-auto my-auto" width="400">
    <v-card-text>
      <v-form ref="form" class="pa-4">
        <label class="body-2 text--disabled">Nom d'utilisateur</label>
        <v-text-field
          v-model="username"
          :rules="usernameRules"
          outlined
          single-line
        />
        <label class="body-2 text--disabled">Mot de passe</label>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          type="password"
          outlined
          single-line
        />
        <v-btn
          @click="signUp"
          height="50px"
          max-width="200"
          rounded
          class="mx-auto"
        >
          Se connecter
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>


<script>
import { mapActions, mapState } from "vuex";
import { required } from "@/utils/validators";

export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
    valid: false,
    usernameRules: [required()],
    passwordRules: [required()],
  }),
  computed: {
    ...mapState("auth", ["next", "token"]),
  },
  methods: {
    ...mapActions("auth", ["login"]),
    signUp() {
      if (this.$refs.form.validate()) {
        this.login({
          username: this.username,
          password: this.password,
        }).then(() => {
          if (this.token !== "") {
            this.$router.push({ path: this.next || "/" })
          }
        });
      }
    },
  },
};
</script>