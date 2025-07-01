<template>
  <section class="bg-gray-50 dark:bg-gray-900 py-20" id="location">
    <div class="max-w-7xl mx-auto px-4">
      <h2
        class="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
      >
        موقعنا
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <!-- المعلومات -->
        <div
          data-aos="fade-right"
          class="text-gray-800 dark:text-white space-y-6"
        >
          <h3 class="text-2xl font-semibold">العنوان</h3>
          <p class="text-lg">الرياض، المملكة العربية السعودية - حي النرجس</p>

          <h3 class="text-2xl font-semibold">رقم الهاتف</h3>
          <p class="text-lg">+966 55 123 4567</p>

          <a
            href="https://www.google.com/maps?q=24.774265,46.738586"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition"
          >
            احصل على الاتجاهات
          </a>
        </div>

        <!-- خريطة -->
        <div data-aos="fade-left">
          <iframe
            class="w-full h-96 rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.850021107068!2d46.73639717579271!3d24.774265050617553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038f71e68a2b%3A0x4c4dc580c0fc3796!2z2KfZhNmF2YjZhNmK2Kkg2KfZhNix2KfZgdiMINmI2KfZhNio2KjYs9mK!5e0!3m2!1sar!2ssa!4v1719674512345!5m2!1sar!2ssa"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
