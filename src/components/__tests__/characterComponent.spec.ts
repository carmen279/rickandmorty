import { mount } from "@vue/test-utils";
import { getDataTestSelector } from "../../__tests__/utils";
import { getCharacterStubs } from "@/__stubs__/character-stubs.factory";
import CharacterSearch from "@/components/CharacterSearch.vue";
import RickAndMortyCharacter from "@/components/RickAndMortyCharacter.vue";

const characterCollection = getCharacterStubs(1);

describe("Character card testing", () => {
  const wrapper = mount(RickAndMortyCharacter, {
    props: {
      value: characterCollection[0],
    },
  });
  it("Should render the character card component", () => {
    expect(wrapper).toBeTruthy();
    const characterimage = wrapper.find(getDataTestSelector("characterimage"));
    const charactername = wrapper.find(getDataTestSelector("charactername"));
    const characterstatus = wrapper.find(
      getDataTestSelector("characterstatus")
    );
    const charactergender = wrapper.find(
      getDataTestSelector("charactergender")
    );
    const characterspecies = wrapper.find(
      getDataTestSelector("characterspecies")
    );
    const characterorigin = wrapper.find(
      getDataTestSelector("characterorigin")
    );

    expect(characterimage).toBeTruthy();
    expect(charactername.text()).toEqual(
      `Name: ${characterCollection[0].name}`
    );
    expect(characterstatus.text()).toEqual(
      `Status: ${characterCollection[0].status}`
    );
    expect(charactergender.text()).toEqual(
      `Gender: ${characterCollection[0].gender}`
    );
    expect(characterspecies.text()).toEqual(
      `Species: ${characterCollection[0].species}`
    );
    expect(characterorigin.text()).toEqual(
      `Origin: ${characterCollection[0].origin.name}`
    );
  });
});
