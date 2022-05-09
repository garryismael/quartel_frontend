<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon v-on:click="setDrawer"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <div>
      <router-link to="home">
        <span class="mr-4 white--text text-h5">Home</span>
      </router-link>
      <router-link to="about">
        <span class="mr-2 white--text text-h5">About</span>
      </router-link>
    </div>
    <v-menu offset-y button>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header",
  data: () => ({
    group: null,
    items: ["Profile", "Logout"],
  }),
  methods: {
    setDrawer() {
      this.$emit("sideNav");
    },
  },
};
</script>
