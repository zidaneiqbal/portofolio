<template>
  <section id="about" class="py-20 px-5 bg-secondary">
    <div class="container h-3/4">
      <div class="flex flex-wrap">
        <div class="lg:hidden md:flex sm:flex w-full lg:w-1/4 text-primary">
          <h1 class="text-center text-3xl">
            Skills
          </h1>
        </div>
        <div class="py-5 w-full lg:w-3/4 self-center grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6">
          <div v-for="(value, index) in skills" :key="index" class="justify-self-center py-6">
            <img @mouseover="value.tooltip = true" @mouseout="value.tooltip = false" :alt="`${value.name} Logo`" class="img" :src="value.img" />
            <div v-if="value.tooltip" class="tooltip">
              {{ value.name }}
            </div>
          </div>
        </div>
        <div class="hidden lg:flex w-full lg:w-1/4 text-primary">
          <h1 class="text-center text-3xl">
            Skills that I am good at
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import HTMLImg from "@/assets/HTML5.png";
import CSSImg from "@/assets/CSS3.png";
import PHPImg from "@/assets/Php.png";
import TailwindImg from "@/assets/Tailwind.png";
import BootstrapImg from "@/assets/Bootstrap.png";
import VueImg from "@/assets/Vue.png";
import ReactImg from "@/assets/React.png";
import LaravelImg from "@/assets/Laravel.png";
import NuxtImg from "@/assets/Nuxt.png";
export default {
  data() {
    return {
      skills: [
        {
          name: "HTML",
          img: HTMLImg,
          tooltip: false
        },
        {
          name: "CSS",
          img: CSSImg,
          tooltip: false
        },
        {
          name: "PHP",
          img: PHPImg,
          tooltip: false
        },
        {
          name: "Tailwind",
          img: TailwindImg,
          tooltip: false
        },
        {
          name: "Bootstrap",
          img: BootstrapImg,
          tooltip: false
        },
        {
          name: "Vue",
          img: VueImg,
          tooltip: false
        },
        {
          name: "React",
          img: ReactImg,
          tooltip: false
        },
        {
          name: "Nuxt",
          img: NuxtImg,
          tooltip: false
        },
        {
          name: "Laravel",
          img: LaravelImg,
          tooltip: false
        },
      ],
      showTooltip: false
    };
  },
  methods: {}
};
</script>

<style>
.img {
  width: auto;
  height: 125px;
}

.tooltip {
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  transform: translateY(-100%);
}
</style>
