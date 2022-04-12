<template>
  <div class="character-card">
    <img
      data-test="characterimage"
      class="character-image"
      :src="value.image"
    />
    <div class="character-attributes">
      <p data-test="charactername" class="character-attribute">
        <span class="attribute-title">Name: </span>{{ value.name }}
      </p>
      <p data-test="characterstatus" class="character-attribute">
        <span class="attribute-title">Status: </span>{{ value.status }}
      </p>
      <p data-test="characterspecies" class="character-attribute">
        <span class="attribute-title">Species: </span>{{ value.species }}
      </p>
      <p data-test="charactergender" class="character-attribute">
        <span class="attribute-title">Gender: </span>{{ value.gender }}
      </p>
      <p data-test="characterorigin" class="character-attribute">
        <span class="attribute-title">Origin: </span>{{ value.origin.name }}
      </p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["value"],
});
</script>

<style lang="scss" scoped>
.character-card {
  display: flex;
  align-items: center;
  margin: 2rem;
  background-color: #e3e3e3;
  border-radius: 20px;
}
.character-image {
  margin: 2rem;
}

p {
  font-size: 22px;
  padding: 0.5rem;
}

.attribute-title {
  font-size: 22px;
  font-weight: bolder;
  font-style: italic;
  padding-right: 0.8rem;
}
</style>
