<template>
  <v-card class="overflow-hidden" height="100%">
    <Header v-on:sideNav="setDrawer" />
    <SideBar :drawer="drawer" />
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-card>
</template>

<script>
import SideBar from "@/components/navs/SideBar.vue";
import Header from "../components/navs/Header.vue";
export default {
  name: "Home",
  components: { SideBar, Header },
  data: () => ({
    drawer: true,
  }),
  methods: {
    setDrawer() {
      this.drawer = !this.drawer;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
