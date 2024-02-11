<script setup>
import Header from "./components/header.vue";
import {RouterView} from "vue-router";
import interestedProject from "./components/interestedProject.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
    <Header />
    <RouterView />
    <interestedProject />
    <Footer />
</template>
