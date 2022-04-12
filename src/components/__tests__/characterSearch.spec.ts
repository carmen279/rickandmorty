import { mount } from "@vue/test-utils";
import { getDataTestSelector } from "../../__tests__/utils";
import { getCharacterStubs } from "@/__stubs__/character-stubs.factory";
import CharacterSearch from "@/components/CharacterSearch.vue";

const characterCollection = getCharacterStubs(5);

describe("Character search testing", () => {
  const wrapper = mount(CharacterSearch);
  it("Should render the character search component", () => {
    expect(wrapper).toBeTruthy();
    const nameinput = wrapper.find(getDataTestSelector("searchinput"));
    const radiobtngroup = wrapper.find(
      getDataTestSelector("searchradiobtngroup")
    );
    const searchbtn = wrapper.find(getDataTestSelector("searchbtn"));

    expect(nameinput).toBeTruthy();
    expect(radiobtngroup).toBeTruthy();
    expect(searchbtn).toBeTruthy();
  });
});
