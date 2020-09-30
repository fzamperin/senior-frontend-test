<template>
  <div>
    <v-collapse-wrapper ref="collapse">
      <div class="header" v-collapse-toggle>
        <div v-if="isNew" class="rounded-lg shadow-2xl p-6">
          <h2>Add new location</h2>
        </div>
        <div
          v-else
          class="rounded-lg shadow-2xl p-6"
          :style="{ 'background-color': location.color }"
        >
          <h2 class="text-white">{{ location.title }}</h2>
          <p class="text-white">{{ location.address }}</p>
        </div>
      </div>
      <div class="my-content pt-5" v-collapse-content>
        <details-location
          @open-edit-location="edit = !edit"
          v-if="!edit && location"
          :location="location"
        />
        <form-location
          v-else
          @close="onClose()"
          :isNew="isNew"
          :location="location"
        />
      </div>
    </v-collapse-wrapper>
  </div>
</template>

<script>
import FormLocation from "~/components/formLocation";
import DetailsLocation from "~/components/detailsLocation";

export default {
  components: {
    FormLocation,
    DetailsLocation,
  },
  props: {
    location: {
      type: Object,
    },
    isNew: {
      type: Boolean,
    },
  },
  data() {
    return {
      edit: false,
    };
  },
  methods: {
    onClose() {
      this.edit = false;
      this.$refs.collapse.close();
    }
  }
};
</script>
<style lang="scss" scoped>
.v-collapse-content {
  max-height: 0;
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  padding: 0;
}

.v-collapse-content-end {
  transition: max-height 0.3s ease-in;
  max-height: 1000px;
}
</style>
