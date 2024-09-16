<template>
  <div
    class="vh-80 d-flex justify-content-center align-items-center row gx-1 text-white"
    id="home"
  >
    <div class="col-12 col-md-6 col-sm-12 text-center">
      <header class="position-relative">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/MyPhotoRemoved.png"
          width="300"
          height="300"
        />
      </header>
    </div>
    <div class="col-12 col-md-6 col-sm-12 about-me">
      <h1 class="text-center">
        Hi, I'm a
        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
      <span class="text-justify">
        Selamat datang di website portofolio Muhammad Zidane Iqbal, seorang
        Fullstack Developer berpengalaman sejak tahun 2020. Saya ahli dalam
        menggunakan framework Vue dan Laravel untuk menciptakan solusi web yang
        inovatif dan responsif. Jelajahi portofolio saya untuk melihat berbagai
        proyek yang telah saya selesaikan.
      </span>
    </div>
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
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Front-End Developer", "Back-End Developer"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 1500,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 100);
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      // eslint-disable-next-line prettier/prettier
      let { data: porto, error } = await supabase.from('porto').select('name').eq('id', 1)
    },
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
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
.logo {
  margin: 0 2rem 0 0;
  border-radius: 30%;
  background-image: url('data:image/svg+xml,<svg width="325" height="325" viewBox="0 0 200 200" fill="grey" xmlns="http://www.w3.org/2000/svg"> <path d="M44.9,-61.7C59,-51.4,72,-39.5,77.3,-24.8C82.5,-10,80.1,7.6,75.4,25.4C70.8,43.1,64.1,61.1,51.2,73.4C38.3,85.7,19.1,92.3,-0.1,92.4C-19.3,92.5,-38.5,86,-54.4,74.7C-70.2,63.3,-82.6,47.1,-85.1,29.9C-87.6,12.7,-80.2,-5.5,-73.9,-23.8C-67.7,-42.1,-62.6,-60.6,-50.5,-71.6C-38.3,-82.5,-19.2,-85.9,-1.9,-83.3C15.3,-80.6,30.7,-72,44.9,-61.7Z" transform="translate(100 100)"></path></svg>');
  /* background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1155" fill="%23808"><path d="M968.99 1033c-187.45.85-174.59 47.22-449 48-352 1-463-239-463-548 0-273.09 190-474 496-472 277.28 1.81 277.22 60.83 470 57 252-5 217.88-56.12 487-57 305-1 431 290 433 526s-117.08 502.4-432 507c-342 5-322-62-542-61Z"></path></svg>'); */
}
.vh-80 {
  height: 80vh;
}
.blinking-cursor {
  font-size: 6rem;
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}

@media (max-width: 768px) {
  .about-me {
    align-self: self-start !important;
  }
}
</style>
