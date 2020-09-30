<template>
  <div class="shadow border rounded-b-lg">
    <div class="grid text-start md:text-center gap-6 grid-cols-1 md:grid-cols-4 mb-6 pt-3 pl-4">
      <div>
        <h2>{{ location.name }}</h2>
      </div>
      <div>
        <p>{{ location.position }}</p>
      </div>
      <div>
        <a>{{ location.email }}</a>
      </div>
      <div>
        <p>{{ location.phone }}</p>
      </div>
    </div>
    <div class="grid border-top text-center grid-cols-2">
      <div class="mb-6 flex justify-center self-center text-grey-600">
        <img @click="$emit('open-edit-location')" class="cursor-pointer" src="edit.svg" />
        <p @click="$emit('open-edit-location')" class="pl-3 cursor-pointer">
          Edit
        </p>
      </div>
      <div class="mb-6 flex justify-center self-center text-red-600">
        <img @click="$parent.$parent.$emit('remove-location')" class="cursor-pointer" src="trash.svg" />
        <p @click="$parent.$parent.$emit('remove-location')" class="pl-3 cursor-pointer">
          Remove
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      required: true,
    },
  },
};
</script>
