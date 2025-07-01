<template>
  <Navbar />
  <div class="pt-20 p-4">
    <HomeSection />
    <ServicesSection />
    <PortfolioSection />
    <LocationSection />
    <ContactSection />
    <WhatsappButton />
    <Footer />
  </div>
</template>

<script setup>
import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";
import HomeSection from "./components/HomeSection.vue";
import LocationSection from "./components/LocationSection.vue";
import Navbar from "./components/Navbar.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import WhatsappButton from "./components/WhatsappButton.vue";
</script>
