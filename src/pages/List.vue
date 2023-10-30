<template>
  <div
    class="bg-primary h-screen text-black"
    id="home"
  >
    <div class="grid flex justify-center items-center">
      <span
        class="rounded overflow-hidden shadow-lg bg-white my-4 row-1 px-12 py-2 flex cursor-pointer items-center"
        v-for="(data, index) in listItem"
        :key="index"
        @click="openNewTab(data.url)"
      >
        <img :src="data.icon" :alt="data.name + `Icon`" class="w-8 h-8 mr-2">
        <span class="text-sm">{{ data.name }}</span>
      </span>
    </div>
  </div>
</template>
<script>
import tiktokIcon from "@/assets/tiktok.png";
import saweriaIcon from "@/assets/saweria.png";
import instagramIcon from "@/assets/instagram.png";
export default {
  data() {
    return {
      listItem: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/enaaaaad__/",
          icon: instagramIcon
        },
        {
          name: "Tiktok",
          url: "https://www.tiktok.com/@enaaaaad._",
          icon: tiktokIcon
        },
        {
          name: "Saweria",
          url: "https://saweria.co/aenaD",
          icon: saweriaIcon
        }
      ],
    };
  },
  methods: {
    openNewTab(link) {
      window.open(link, '_blank');
    }
  }
};
</script>
