import CtaButton from "../components/cta-button.vue";

export default {
  title: "Common/cta-button",
  component: CtaButton,
  parameters: {
    componentSubtitle: "Cta(Call To Action) button component",
  },
  argTypes: {
    inputText: { control: "text" },
    active: { control: "boolean" },
    disabled: { control: "boolean" },
    colorType: {
      control: { type: "select" },
      options: [
        "blue (default)",
        "blue-fill",
        "red",
        "red-fill",
        "green",
        "green-fill",
        "white",
      ],
    },
    buttonType: {
      control: { type: "select" },
      options: [
        "default",
        "dropdown",
        "date-picker",
        "upload",
        "export",
        "text",
        "text dropdown",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "small"],
    },
  },
};

const DefaultTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CtaButton },
  template: `<cta-button v-bind="$props" :click="clickHandler">{{ inputText }}</cta-button>`,
});

const ColorTypeTemplate = () => ({
  components: { CtaButton },
  template: `
    <div style="display: flex; gap: 10px;">
        <cta-button colorType="blue">blue</cta-button>
        <cta-button colorType="blue-fill">blue-fill</cta-button>
        <cta-button colorType="red">red</cta-button>
        <cta-button colorType="red-fill">red-fill</cta-button>
        <cta-button colorType="green">green</cta-button>
        <cta-button colorType="green-fill">green-fill</cta-button>
        <cta-button colorType="white">white</cta-button>
    </div>`,
});

const ButtonTypeTemplate = () => ({
  components: { CtaButton },
  template: `
      <div style="display: flex; gap: 10px;">
          <cta-button buttonType="">default</cta-button>
          <cta-button buttonType="dropdown">dropdown</cta-button>
          <cta-button buttonType="date-picker">date-picker</cta-button>
          <cta-button buttonType="upload">upload</cta-button>
          <cta-button buttonType="export">export</cta-button>
          <cta-button buttonType="text">text</cta-button>
          <cta-button buttonType="text dropdown">text dropdown</cta-button>
      </div>`,
});

const SizeTemplate = () => ({
  components: { CtaButton },
  template: `
      <div style="display: flex; gap: 10px;">
          <cta-button size="">default</cta-button>
          <cta-button size="small">small</cta-button>
      </div>`,
});

export const Default = DefaultTemplate.bind({});
Default.args = {
  inputText: "button",
  styleProps: "",
  colorType: "",
  buttonType: "",
  size: "",
  clickHandler() {
    console.log("clicked.");
  },
};

export const ColorTypes = ColorTypeTemplate.bind({});
ColorTypes.args = {};

export const ButtonTypes = ButtonTypeTemplate.bind({});
ColorTypes.args = {};

export const SizeTypes = SizeTemplate.bind({});
ColorTypes.args = {};
