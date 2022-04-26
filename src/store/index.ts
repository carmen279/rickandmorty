import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [] as any[],
    totalcharacters: [] as any[],
  },
  getters: {
    getNumHumans(state) {
      return state.characters.filter((char) => char.species === "Human").length;
    },
  },
  mutations: {
    replace(state, ...elems) {
      state.characters = [...elems][0];
    },
    set(state, ...elems) {
      state.totalcharacters = [...elems][0];
    },
  },
  actions: {
    async getRickAndMortyChars(context) {
      const Url = `https://rickandmortyapi.com/api/character/`;
      let data: any[] = [];
      for (let i = 1; i < 6; i++) {
        data = [
          ...data,
          ...(await fetch(`${Url}?page=${i}`)
            .then((response) => response.json())
            .then((data) => data.results)),
        ];
      }
      console.log(data);

      context.commit("set", data);
      context.commit("replace", data);
      console.log(Url);
    },

    filterChars(context, args = { name: "", status: "", gender: "" }) {
      let filteredChars = context.state.totalcharacters;
      console.log(args);
      if (args.name !== undefined) {
        filteredChars = filteredChars.filter(
          (char: { name: string; status: string; gender: string }) =>
            char.name.toLowerCase().includes(args.name.toLowerCase())
        );
      }
      switch (args.status) {
        case "Alive":
        case "Dead":
          filteredChars = filteredChars.filter(
            (char: { name: string; status: string; gender: string }) =>
              char.status === args.status
          );
      }
      switch (args.gender) {
        case "Male":
        case "Female":
          filteredChars = filteredChars.filter(
            (char: { name: string; status: string; gender: string }) =>
              char.gender === args.gender
          );
      }
      context.commit("replace", filteredChars);
    },
  },
  modules: {},
});
