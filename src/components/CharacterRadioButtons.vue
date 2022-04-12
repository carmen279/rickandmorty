<template>
  <div class="radiobtn-group">
    <p data-test="radiotitle" class="radiobtn-group--title">{{ title }}</p>
    <div v-for="value of values" :key="value">
      <input
        data-test="radiobtn"
        type="radio"
        :id="value"
        :value="value"
        v-model="picked"
      />
      <label data-test="radiolbl" :for="value">{{ value }}</label>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["values", "title"],
  data() {
    return {
      picked: "",
    };
  },
  watch: {
    // whenever question changes, this function will run
    picked(newselection, oldselection) {
      this.$emit("picked", newselection);
    },
  },
});
</script>

<style scoped>
.radiobtn-group {
  margin: 1rem;
}
.radiobtn-group--title {
  font-weight: bold;
}
</style>
