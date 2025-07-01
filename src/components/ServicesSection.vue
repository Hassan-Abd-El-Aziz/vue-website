<template>
  <section class="bg-gray-50 dark:bg-gray-900 py-20" id="services">
    <div class="max-w-7xl mx-auto px-4">
      <h2
        class="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
      >
        خدماتنا
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-2xl border-gray-300 shadow-lg p-6 text-center transform transition hover:-translate-y-2 hover:shadow-2xl duration-300"
          :data-aos="'zoom-in'"
          :data-aos-delay="index * 100"
        >
          <div class="flex justify-center mb-4">
            <img :src="service.icon" alt="icon" class="w-16 h-16" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: "تنظيف منازل",
    description: "نقدّم خدمات تنظيف شاملة واحترافية للبيوت والشقق.",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
  },
  {
    title: "نقل عفش",
    description: "فريق متخصص في تغليف ونقل الأثاث بأمان وسرعة.",
    icon: "https://cdn-icons-png.flaticon.com/512/2942/2942925.png",
  },
  {
    title: "مكافحة حشرات",
    description: "حلول فعالة وآمنة للتخلص من جميع أنواع الحشرات.",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910763.png",
  },
];
</script>
