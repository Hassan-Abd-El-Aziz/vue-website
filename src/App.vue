<template>
  <Navbar />
  <div class="pt-20 p-4">
    <HomeSection />
    <ServicesSection />
    <PortfolioSection />
  </div>
</template>

<script setup>
import HomeSection from "./components/HomeSection.vue";
import Navbar from "./components/Navbar.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
</script>
