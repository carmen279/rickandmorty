import { mount } from "@vue/test-utils";
import { getDataTestSelector } from "../../__tests__/utils";
import CharacterRadioButtons from "@/components/CharacterRadioButtons.vue";

describe("Radio buttons testing", () => {
  const textvalues = ["Text 1", "Text 2", "Text 3"];
  const fulltitle = "Test title";
  const wrapper1 = mount(CharacterRadioButtons, {
    props: {
      values: textvalues,
      title: fulltitle,
    },
  });
  it("Should render 3 radio buttons with their text labels", () => {
    expect(wrapper1).toBeTruthy();
    const radiotitle = wrapper1.find(getDataTestSelector("radiotitle"));
    expect(radiotitle.text()).toEqual(fulltitle);
    const radiobtns = wrapper1.findAll(getDataTestSelector("radiobtn"));
    const radiolbls = wrapper1.findAll(getDataTestSelector("radiolbl"));
    expect(radiobtns.length).toEqual(textvalues.length);
    expect(radiolbls.length).toEqual(textvalues.length);

    for (let i = 0; i < textvalues.length; i++) {
      expect(radiolbls[i].text()).toEqual(textvalues[i]);
    }
  });

  const numvalues = [1, 2, 3];
  const emptytitle = "";
  const wrapper2 = mount(CharacterRadioButtons, {
    props: {
      values: numvalues,
      title: emptytitle,
    },
  });
  it("Should render 3 radio buttons with their num labels as strings", () => {
    expect(wrapper2).toBeTruthy();
    const radiotitle = wrapper2.find(getDataTestSelector("radiotitle"));
    expect(radiotitle.text()).toEqual(emptytitle);
    const radiobtns = wrapper2.findAll(getDataTestSelector("radiobtn"));
    const radiolbls = wrapper2.findAll(getDataTestSelector("radiolbl"));
    expect(radiobtns.length).toEqual(numvalues.length);
    expect(radiolbls.length).toEqual(numvalues.length);

    for (let i = 0; i < numvalues.length; i++) {
      expect(radiolbls[i].text()).toEqual(numvalues[i].toString());
    }
  });
  const onevalue = ["1"];
  const wrapper3 = mount(CharacterRadioButtons, {
    props: {
      values: onevalue,
    },
  });
  it("Should render 1 radio button with its label", () => {
    expect(wrapper3).toBeTruthy();
    const radiotitle = wrapper3.find(getDataTestSelector("radiotitle"));
    expect(radiotitle.text()).toEqual("");
    const radiobtns = wrapper3.findAll(getDataTestSelector("radiobtn"));
    const radiolbls = wrapper3.findAll(getDataTestSelector("radiolbl"));
    expect(radiobtns.length).toEqual(onevalue.length);
    expect(radiolbls.length).toEqual(onevalue.length);

    for (let i = 0; i < onevalue.length; i++) {
      expect(radiolbls[i].text()).toEqual(onevalue[i]);
    }
  });
  const wrapper4 = mount(CharacterRadioButtons, {
    props: {},
  });
  it("Should render no radio buttons", () => {
    expect(wrapper4).toBeTruthy();
    const radiotitle = wrapper4.find(getDataTestSelector("radiotitle"));
    expect(radiotitle.text()).toEqual("");
    const radiobtns = wrapper4.findAll(getDataTestSelector("radiobtn"));
    const radiolbls = wrapper4.findAll(getDataTestSelector("radiolbl"));
    expect(radiobtns.length).toEqual(0);
    expect(radiolbls.length).toEqual(0);
  });
});
