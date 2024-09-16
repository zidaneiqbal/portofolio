<template>
  <div
    class="vh-80 w-50 d-flex justify-content-center align-items-center text-white"
    id="home"
  >
    <div class="col-12">
      <span
        class="card bg-red mb-2"
        v-for="(data, index) in listItem"
        :key="index"
      >
        <span class=""> {{ data.name }} </span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listItem: [
        {
          name: "Tiktok",
          url: "https://www.tiktok.com/@enaaaaad._",
        },
        {
          name: "Saweria",
          url: "https://saweria.co/aenaD",
        },
      ],
    };
  },
};
</script>
