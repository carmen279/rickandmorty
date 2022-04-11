<template>
  <div class="body">
    <h1>RICK AND MORTY API</h1>
    <div>
      <CharacterSearch
        v-on:search="
          filterCharacters($event.name, $event.status, $event.gender)
        "
      >
      </CharacterSearch>
      <TransitionGroup name="list" tag="ul">
        <RickAndMortyCharacter
          v-for="character of characters"
          :key="character.id"
          :value="character"
        ></RickAndMortyCharacter>
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RickAndMortyCharacter from "@/components/RickAndMortyCharacter.vue";
import CharacterSearch from "@/components/CharacterSearch.vue";
export default defineComponent({
  components: {
    RickAndMortyCharacter,
    CharacterSearch,
  },
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    getRickAndMortyChars() {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
          this.characters = data.results;
        });
    },
    filterCharacters(name: string, status: string, gender: string) {
      let filterUrl = `https://rickandmortyapi.com/api/character/?name=${name}`;
      switch (status) {
        case "Alive":
        case "Dead":
          filterUrl = filterUrl + `&status=${status}`;
      }
      switch (gender) {
        case "Male":
        case "Female":
          filterUrl = filterUrl + `&gender=${gender}`;
      }
      fetch(filterUrl)
        .then((response) => response.json())
        .then((data) => {
          this.characters = data.results;
        });
    },
  },
  mounted() {
    this.getRickAndMortyChars();
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
