<template>
  <section class="bg-gray-100 dark:bg-gray-900 py-20" id="contact">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2
        class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8"
        data-aos="fade-down"
      >
        تواصل معنا
      </h2>
      <p
        class="text-gray-600 dark:text-gray-300 mb-12 text-lg"
        data-aos="fade-up"
      >
        نحن جاهزون لخدمتك، تواصل معنا عبر واتساب أو أرسل لنا بريدًا إلكترونيًا.
      </p>

      <div
        class="flex flex-col md:flex-row justify-center items-center gap-6"
        data-aos="zoom-in"
      >
        <!-- زر واتساب -->
        <a
          href="https://wa.me/201009039628"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition w-60 flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M...Z" />
          </svg>
          تواصل عبر واتساب
        </a>

        <!-- زر البريد الإلكتروني -->
        <a
          href="mailto:hassanabdelaziz940@gmail.com?subject=طلب%20تواصل&body=السلام%20عليكم%D8%8C%20أرغب%20في%20التواصل%20معكم%20بخصوص%20خدماتكم."
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition w-60 flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 4h16v16H4z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 4l8 8 8-8"
            />
          </svg>
          أرسل بريد إلكتروني
        </a>
      </div>
    </div>

    <!-- أيقونات التواصل -->
    <div class="flex gap-5 justify-center mt-8 items-center">
      <!-- واتساب -->
      <a
        href="https://wa.me/966551234567"
        target="_blank"
        class="text-green-500 hover:scale-110 transition"
      >
        <img
          src="../assets/whats.svg"
          alt=""
          class="w-10 h-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        />
      </a>

      <!-- إنستقرام -->
      <a
        href="https://www.instagram.com/yourprofile"
        target="_blank"
        class="text-pink-500 hover:scale-110 transition"
      >
        <img
          src="../assets/instagram.svg"
          alt=""
          class="w-12 h-12"
          fill="currentColor"
          viewBox="0 0 24 24"
        />
      </a>

      <!-- سناب شات -->
      <a
        href="https://www.snapchat.com/add/yourprofile"
        target="_blank"
        class="text-yellow-400 hover:scale-110 transition"
      >
        <img
          src="../assets/snapchat.svg"
          alt=""
          class="w-10 h-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        />
      </a>
    </div>
  </section>
</template>
