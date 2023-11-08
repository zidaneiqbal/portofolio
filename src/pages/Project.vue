<template>
  <section id="project" class="py-20 px-5 bg-secondary">
    <div class="container h-3/4 mx-auto p-4 text-center self-center">
      <h1 class="text-2xl font-bold mb-4">Project Showcase</h1>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="(data, index) in projects" :key="index" @mouseover="zoomIn(index)" @mouseleave="zoomOut(index)" class="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
            <img :src="data.image" alt="gallery image" class="transition-transform duration-500 transform" :class="{ 'scale-110': zoomedIndex === index }" />
          </div>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ data.name }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ data.description }}</p>
            <a
              :href="data.link" target="_blank"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit SITE
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ocbcSekuritasImage from "@/assets/ocbcsekuritas.png";
import risetImage from "@/assets/risetai.png";
import tagImage from "@/assets/tagid.png";
import kratomImage from "@/assets/kratom.png";
export default {
  data() {
    return {
      projects: [
        { 
          name: "OCBC Sekuritas",
          description: "Mengembangkan Website Company Profile Dinamis Menggunakan Vue & Laravel, Menggunakan 2 Bahasa (Indonesia & English). Termasuk Website Dashboard untuk Keperluan Content dll. Saya berkontribusi sebagai fullstack developper dimana saya develop untuk kebutuhan API & Tampilan",
          link: 'https://www.ocbcsekuritas.com/',
          image: ocbcSekuritasImage
        },
        { 
          name: "Riset AI",
          description: "Mengembangkan Website Company Profile Dinamis Menggunakan Vue & Laravel. Termasuk Website Dashboard untuk Keperluan Content dll. Saya berkontribusi sebagai fullstack developper dimana saya develop untuk kebutuhan API & Tampilan",
          link: 'https://www.riset.ai/',
          image: risetImage
        },
        { 
          name: "Kratom XYZ",
          description: "Mengembangkan Website Company Profile Dinamis Menggunakan Vue & Laravel. Termasuk Website Dashboard untuk Keperluan Content dll. Saya berkontribusi sebagai fullstack developper dimana saya develop untuk kebutuhan API & Tampilan",
          link: 'https://kratomxyz.net/',
          image: kratomImage
        },
        { 
          name: "TAGID",
          description: "Website Kartu Nama Digital Menggunakan Vue & Laravel. Terdapat Fitur Login untuk Keperluan Penyesuaian Informasi Kartu Nama Digital. Saya berkontribusi sebagai fullstack developper dimana saya develop untuk kebutuhan API & Tampilan",
          link: 'https://zidaneiqbal02.tagid.ai/',
          image: tagImage
        }
      ],
      zoomedIndex: -1,
    };
  },
  methods: {
    zoomIn(index) {
      this.zoomedIndex = index;
    },
    zoomOut(index) {
      this.zoomedIndex = -1;
    },
  },
};
</script>

<style>
/* You can also add custom styles here */
</style>
