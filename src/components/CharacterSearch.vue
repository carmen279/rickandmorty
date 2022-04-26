<template>
  <form class="search-form">
    <input
      data-test="radiotitle"
      class="search-input"
      type="text"
      v-model="text"
      placeholder="Character name"
      @input="filterCharacters()"
    />
    <div data-test="searchradiobtngroup" class="radiobtn-collection">
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
    <p>Number of humans: {{ countHumans }}</p>
  </form>
</template>

<script>
import { defineComponent } from "vue";
import CharacterRadioButtons from "@/components/CharacterRadioButtons";
import createStore from "@/store";

export default defineComponent({
  components: { CharacterRadioButtons },
  data() {
    return {
      text: "",
      status: "",
      gender: "",
    };
  },
  computed: {
    countHumans() {
      return createStore.getters.getNumHumans;
    },
  },
  methods: {
    changeStatus(status) {
      this.status = status;
      this.filterCharacters();
    },
    changeGender(gender) {
      this.gender = gender;
      this.filterCharacters();
    },
    filterCharacters() {
      createStore.dispatch("filterChars", {
        name: this.text,
        status: this.status,
        gender: this.gender,
      });
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

.radiobtn-collection {
  display: flex;
}
</style>
