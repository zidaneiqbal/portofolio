<template>
  <section id="about" class="py-20 px-5 bg-secondary">
    <div class="container h-3/4">
      <div class="flex flex-wrap">
        <div class="lg:hidden md:flex sm:flex w-full lg:w-1/4 text-primary">
          <h1 class="text-center text-3xl">
            Skills
          </h1>
        </div>
        <div class="py-10 w-full lg:w-3/4 self-center grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          <div v-for="(value, index) in skills" :key="index" class="justify-self-center">
            <img :alt="`${value.name} Logo`" class="img" :src="value.img" width="150" height="150" />
          </div>
        </div>
        <div class="hidden lg:flex w-full lg:w-1/4 text-primary">
          <h1 class="text-center text-3xl">
            Skills
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import HTMLImg from "@/assets/HTML5.png";
import CSSImg from "@/assets/CSS3.png";
export default {
  data() {
    return {
      skills: [
        {
          name: "HTML",
          img: HTMLImg
        },
        {
          name: "CSS",
          img: CSSImg
        },
        {
          name: "HTML",
          img: HTMLImg
        },
        {
          name: "CSS",
          img: CSSImg
        },
        {
          name: "HTML",
          img: HTMLImg
        },
        {
          name: "CSS",
          img: CSSImg
        },
        {
          name: "HTML",
          img: HTMLImg
        },
        {
          name: "CSS",
          img: CSSImg
        },
      ]
    };
  },
  methods: {}
};
</script>

<style>
.img {
  width: auto;
  height: 150px;
}
</style>
