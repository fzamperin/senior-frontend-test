<template>
  <div class="container mx-auto px-4">
    <h1 class="text-6xl">Offices</h1>
    <office-card
      @create-location="data => createLocation(data)"
      :is-new="true"
    />
    <div class="grid justify-center grid-cols-1">
      <div :key="index" v-for="(location, index) in locations">
        <office-card
          @update-location="data => updateLocation(data, index)"
          @remove-location="() => removeLocation(index)"
          :index="index"
          :location="location"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OfficeCard from "~/components/officeCard";
import FormLocation from "~/components/formLocation";

export default {
  components: {
    OfficeCard,
    FormLocation,
  },
  data() {
    return {
      locations: [
        {
          color: "#2F9CB0",
          title: "Repair Shop",
          address: "3763 W. Dallas St.",
          name: "Nicholas F. Sanchez",
          position: "Equipment repairer",
          email: "nicholasFSanchez@jourrapide.com",
          phone: "(332) 482-3229",
        },
        {
          color: "#931D18",
          title: "My Rep",
          address: "3255 Terry Fox Dr",
          name: "Tammy J. Killough",
          position: "Paymaster",
          email: "tammyJKillough@dayrep.com",
          phone: "(819) 380-4276",
        },
        {
          color: "#1E1E1E",
          title: "Headquarters",
          address: "4597 Rue Ontario Ouest",
          name: "Ava A. Sherrill",
          position: "Home appliance repairer",
          email: "avaasherrill@jourrapide.com",
          phone: "(514) 840-2834",
        },
      ],
    };
  },
  methods: {
    removeLocation(index) {
      this.locations.splice(index, 1);
    },
    createLocation(location) {
      this.locations.push(location);
    },
    updateLocation(data, index) {
      this.$set(this.locations, index, data);
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  padding-bottom: 20px;
}
.text-6xl {
  color: #2f9cb0;
  text-align: center;
}
</style>
