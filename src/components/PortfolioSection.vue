<template>
  <section class="bg-white dark:bg-gray-900 py-20" id="portfolio">
    <div class="max-w-7xl mx-auto px-4">
      <h2
        class="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
      >
        بعض أعمالنا
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in displayedItems"
          :key="index"
          class="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div class="bg-gray-50 dark:bg-gray-800 p-4">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              {{ item.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- زر عرض المزيد -->
      <div
        v-if="visibleCount < portfolioItems.length"
        class="text-center mt-10"
      >
        <button
          @click="showMore"
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
        >
          عرض المزيد
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const portfolioItems = [
  {
    title: "تنظيف فيلا بالرياض",
    description: "تنظيف شامل من الداخل والخارج باستخدام مواد آمنة.",
    image: "منزل 1.png",
  },
  {
    title: "نقل عفش لعميل بجدة",
    description: "فك وتغليف ونقل آمن ومضمون.",
    image: "نقل عفش.png",
  },
  {
    title: "مكافحة حشرات بمستودع",
    description: "رش وتطهير بأحدث الأجهزة والمبيدات المعتمدة.",
    image: "حشرات.png",
  },
  {
    title: "تنظيف واجهات زجاجية",
    description: "استخدام أدوات متطورة للوصول لأعلى النقاط.",
    image: "منزل زجاج.png",
  },
  {
    title: "نقل أثاث مكتب كامل",
    description: "تنفيذ خلال يوم واحد مع إعادة ترتيب الأثاث.",
    image: "نقل اثاث.png",
  },
  {
    title: "تنظيف سجاد ومجالس",
    description: "تعقيم بالبخار وإزالة الروائح الكريهة.",
    image: "سجاد.png",
  },
  {
    title: "تلميع أرضيات",
    description: "تنظيف وتلميع احترافي للرخام والسيراميك.",
    image: "ارضيات.png",
  },
  {
    title: "نقل عفش مع التخزين",
    description: "نقل وتخزين الأثاث بأمان تام.",
    image: "نقل المنزل.png",
  },
  {
    title: "تنظيف بعد البناء",
    description: "تنظيف مخلفات البناء وتجهيز المكان للمعيشة.",
    image: "عامل .png",
  },
];

const visibleCount = ref(3);

const displayedItems = computed(() =>
  portfolioItems.slice(0, visibleCount.value)
);

const showMore = () => {
  visibleCount.value += 3;
};
</script>
