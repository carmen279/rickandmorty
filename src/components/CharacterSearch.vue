<template>
  <form
    class="search-form"
    v-on:submit.prevent="
      $emit('search', {
        name: this.$refs.input.value,
        status: this.status,
        gender: this.gender,
      })
    "
  >
    <input
      class="search-input"
      type="text"
      ref="input"
      placeholder="Character name"
    />
    <div class="radiobtn-collection">
      <CharacterRadioButtons
        v-on:picked="changeStatus($event)"
        :title="'Select status'"
        :values="['All', 'Alive', 'Dead']"
      />
      <CharacterRadioButtons
        v-on:picked="changeGender($event)"
        :title="'Select gender'"
        :values="['All', 'Male', 'Female']"
      />
    </div>
    <input class="search-btn" type="submit" id="search-btn" value="Search" />
  </form>
</template>

<script>
import { defineComponent } from "vue";
import CharacterRadioButtons from "@/components/CharacterRadioButtons";

export default defineComponent({
  components: { CharacterRadioButtons },
  data() {
    return {
      status: "",
      gender: "",
    };
  },
  methods: {
    changeStatus(status) {
      this.status = status;
    },
    changeGender(gender) {
      this.gender = gender;
    },
  },
});
</script>

<style scoped>
.search-form {
  margin: 1rem 5rem;
  background-color: #f6f6f6;
  padding: 1rem;
  border-radius: 15px;
}
input {
  padding: 0.5rem;
}
.search-btn {
  color: white;
  background-color: dodgerblue;
  border: none;
  padding: 0.7rem;
  margin: 0.5rem;
}

.radiobtn-collection {
  display: flex;
}
</style>
