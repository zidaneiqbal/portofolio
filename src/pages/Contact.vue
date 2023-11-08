<template>
  <section id="contact" class="py-20 px-5 bg-secondary">
    <div class="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">Contact</h2>
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            v-model.trim="form.name"
            type="text"
            name="name"
            id="name"
            autocomplete="name"
            :class="{ 'border-red-500': formErrors.name }"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p v-if="formErrors.name" class="text-red-500 text-sm mt-1">{{ formErrors.name }}</p>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model.trim="form.email"
            type="email"
            name="email"
            id="email"
            autocomplete="email"
            :class="{ 'border-red-500': formErrors.email }"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p v-if="formErrors.email" class="text-red-500 text-sm mt-1">{{ formErrors.email }}</p>
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea v-model.trim="form.message" rows="4" :class="{ 'border-red-500': formErrors.message }" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          <p v-if="formErrors.message" class="text-red-500 text-sm mt-1">{{ formErrors.message }}</p>
        </div>
        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      formErrors: {},
    };
  },
  methods: {
    submitForm() {
      this.formErrors = {};

      if (!this.form.name) {
        this.formErrors.name = "Name is required.";
      }

      if (!this.form.email) {
        this.formErrors.email = "Email is required.";
      } else if (!this.validEmail(this.form.email)) {
        this.formErrors.email = "Please enter a valid email.";
      }

      if (!this.form.message) {
        this.formErrors.message = "Message is required.";
      }

      if (Object.keys(this.formErrors).length === 0) {
        // Handle form submission logic here
        console.log("Form submitted:", this.form);
      }
    },
    validEmail(email) {
      // Basic email validation
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
  },
};
</script>

<style>
/* Add custom styles here if needed */
</style>
