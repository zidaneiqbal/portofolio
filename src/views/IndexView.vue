<template>
  <div class="about-me">
    <h2>About Me</h2>
    <img src="@/assets/prof.jpg" alt="Profile Picture" />
    <p>Bio</p>
    <ul>
      <li><strong>Name:</strong> {{ name }}</li>
      <li><strong>Location:</strong> {{ location }}</li>
      <li><strong>Age:</strong> {{ age }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Zidane",
      age: "20",
      location: "Malang",
    };
  },
};
</script>

<style>
section {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}

.about-me img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 1rem 0;
}
</style>
