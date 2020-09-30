<template>
  <form @submit.prevent="onSubmit()" class="pt-5">
    <div class="grid text-center gap-6 grid-cols-3 md:grid-cols-9 mb-6">
      <div class="mb-md-6 col-start-2 md:col-start-5">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Color *
        </label>
        <input
          :class="{
            'border-red-500':
              $v.childLocation.color.$invalid && $v.childLocation.color.$dirty,
          }"
          class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="color"
          placeholder="(xxx) xxx-xxxx"
          v-model="$v.childLocation.color.$model"
        />
        <p
          v-if="$v.childLocation.color.$invalid"
          class="text-red-500 text-xs italic"
        >
          Please choose a color.
        </p>
      </div>
    </div>
    <div class="grid justify-center gap-6 grid-cols-1 md:grid-cols-3 mb-6">
      <div class="mb-md-6">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Title *
        </label>
        <input
          :class="{
            'border-red-500':
              $v.childLocation.title.$invalid && $v.childLocation.title.$dirty,
          }"
          class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          v-model="$v.childLocation.title.$model"
        />
        <p
          v-if="
            $v.childLocation.title.$invalid && $v.childLocation.title.$dirty
          "
          class="text-red-500 text-xs italic"
        >
          Please choose a Title.
        </p>
      </div>
      <div class="mb-md-6">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Address *
        </label>
        <input
          :class="{
            'border-red-500':
              $v.childLocation.address.$invalid &&
              $v.childLocation.address.$dirty,
          }"
          class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          v-model="$v.childLocation.address.$model"
        />
        <p
          v-if="
            $v.childLocation.address.$invalid && $v.childLocation.address.$dirty
          "
          class="text-red-500 text-xs italic"
        >
          Please choose an Address.
        </p>
      </div>
      <div class="mb-md-6">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Full name *
        </label>
        <input
          :class="{
            'border-red-500':
              $v.childLocation.name.$invalid && $v.childLocation.name.$dirty,
          }"
          class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          v-model="$v.childLocation.name.$model"
        />
        <p
          v-if="$v.childLocation.name.$invalid && $v.childLocation.name.$dirty"
          class="text-red-500 text-xs italic"
        >
          Please choose a Name.
        </p>
      </div>
      <div class="mb-md-6">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Job position *
        </label>
        <input
          :class="{
            'border-red-500':
              $v.childLocation.position.$invalid &&
              $v.childLocation.position.$dirty,
          }"
          class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          v-model="$v.childLocation.position.$model"
        />
        <p
          v-if="
            $v.childLocation.position.$invalid &&
            $v.childLocation.position.$dirty
          "
          class="text-red-500 text-xs italic"
        >
          Please choose a Position.
        </p>
      </div>
      <div class="mb-md-6">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Email address *
        </label>
        <input
          :class="{
            'border-red-500':
              $v.childLocation.email.$invalid && $v.childLocation.email.$dirty,
          }"
          class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="name@email.com"
          v-model="$v.childLocation.email.$model"
        />
        <p
          v-if="
            $v.childLocation.email.$invalid && $v.childLocation.email.$dirty
          "
          class="text-red-500 text-xs italic"
        >
          Enter a valid Email.
        </p>
      </div>
      <div class="mb-md-6">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Phone *
        </label>
        <input
          :class="{
            'border-red-500':
              $v.childLocation.phone.$invalid && $v.childLocation.phone.$dirty,
          }"
          class="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="tel"
          placeholder="(xxx) xxx-xxxx"
          v-mask="'(###) ###-####'"
          v-model="$v.childLocation.phone.$model"
        />
        <p
          v-if="
            $v.childLocation.phone.$invalid && $v.childLocation.phone.$dirty
          "
          class="text-red-500 text-xs italic"
        >
          Enter a valid Phone Number.
        </p>
      </div>
    </div>
    <div class="grid text-center grid-cols-1">
      <div class="mb-6">
        <button
          :class="{
            'cursor-not-allowed opacity-50': $v.childLocation.$invalid,
          }"
          class="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          :disabled="$v.childLocation.$invalid"
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

const defaultObjForm = {
  color: "#FFFFFF",
  title: "",
  address: "",
  name: "",
  position: "",
  email: "",
  phone: "",
};

export default {
  props: {
    isNew: {
      type: Boolean,
    },
    location: {
      type: Object,
      default: () => (defaultObjForm),
    },
  },
  data() {
    return {
      childLocation: {
        ...this.location,
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.isNew) {
        this.$parent.$parent.$emit("create-location", {
          ...this.childLocation,
        });
        this.childLocation = JSON.parse(JSON.stringify(defaultObjForm));
        this.$v.$reset();
      } else {
        this.$parent.$parent.$emit("update-location", {
          ...this.childLocation,
        });
      }
      this.$emit("close");
    },
  },
  validations: {
    childLocation: {
      color: {
        required,
      },
      title: {
        required,
      },
      address: {
        required,
      },
      name: {
        required,
      },
      position: {
        required,
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        minLength: minLength(14)
      },
    },
  },
};
</script>
