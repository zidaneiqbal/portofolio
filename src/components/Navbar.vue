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
        <a href="/" class="text-secondary">Home</a>
        <a href="/#about" class="text-secondary">About</a>
        <a href="#" class="text-secondary">Services</a>
        <a href="#" class="text-secondary">Contact</a>
        <span @click="route('list')" class="text-secondary cursor-pointer">List</span>
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
