<template>
  <nav class="bg-primary">
  <div class="container mx-auto p-4">
    <div class="flex justify-around items-center">
      <a href="#" class="text-white text-xl font-semibold">
        <img
          alt="Brand Logo"
          class="text-center"
          src="@/assets/aenaD.png"
          width="70"
          height="90"
        />
      </a>
      <div class="hidden md:flex md:w-full place-content-center space-x-4 text-center">
        <a href="#" class="text-secondary cursor-pointer">Home</a>
        <a href="#about" class="text-secondary cursor-pointer">About</a>
        <a href="#project" class="text-secondary cursor-pointer">Project</a>
        <a href="#contact" class="text-secondary cursor-pointer">Contact</a>
        <!-- <span @click="route('home, home')" class="text-secondary cursor-pointer">Home</span>
        <span @click="route('home, about')" class="text-secondary cursor-pointer">About</span>
        <span @click="route('home, service')" class="text-secondary cursor-pointer">Service</span>
        <span @click="route('home, contact')" class="text-secondary cursor-pointer">Contact</span> -->
        <!-- <span @click="route('list')" class="text-secondary cursor-pointer">List</span> -->
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  methods: {
    route(link) {
      this.$router.push({ name: link});
    }
  }
};
</script>
