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
import { supabase } from "/src/libs/supabaseClient";

export default {
  data() {
    return {
      name: "Zidane",
      age: "20",
      location: "Malang",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      // eslint-disable-next-line prettier/prettier
      let { data: porto, error } = await supabase.from('porto').select('name').eq('id', 1)

      console.log(porto, error);
    },
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
