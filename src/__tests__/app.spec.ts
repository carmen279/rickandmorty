import App from "../App.vue";
import { getCharacterStubs } from "@/__stubs__/character-stubs.factory";
import { mount } from "@vue/test-utils";

import { getDataTestSelector } from "@/__tests__/utils";

const characterCollection = getCharacterStubs(5);

jest.spyOn(App, "mounted").mockImplementation(() => {
  App.characters = characterCollection;
});

describe("App elements testing", () => {
  const wrapper = mount(App);
  it("Should render the app with a card for each character", () => {
    expect(wrapper).toBeTruthy();
    const charactersearch = wrapper.find(
      getDataTestSelector("charactersearch")
    );
    const charactercard = wrapper.findAll(getDataTestSelector("charactercard"));
    expect(charactercard.length).toEqual(5);
    expect(charactersearch).toBeTruthy();
    expect(App.getRickAndMortyChars).toHaveBeenCalledTimes(1);
  });
});
