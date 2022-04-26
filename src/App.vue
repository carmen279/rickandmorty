<template>
  <div class="body">
    <h1>RICK AND MORTY API</h1>
    <div>
      <CharacterSearch data-test="charactersearch" />
      <TransitionGroup name="list" tag="ul">
        <RickAndMortyCharacter
          data-test="charactercard"
          v-for="character of getRickAndMortyChars"
          :key="character.id"
          :value="character"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RickAndMortyCharacter from "@/components/RickAndMortyCharacter.vue";
import CharacterSearch from "@/components/CharacterSearch.vue";
import createStore from "@/store/index";

export default defineComponent({
  components: {
    RickAndMortyCharacter,
    CharacterSearch,
  },
  computed: {
    getRickAndMortyChars() {
      return createStore.state.characters;
    },
  },
  methods: {},
  mounted() {
    createStore.dispatch("getRickAndMortyChars");
  },
});
</script>

<style lang="scss">
* {
  font-family: arial, sans-serif;
  font-size: 18px;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 36px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
</style>
