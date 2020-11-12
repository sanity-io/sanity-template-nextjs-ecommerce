import { MdWhatshot } from "react-icons/md";

export default {
  name: "swag",
  type: "document",
  title: "Swag",
  icon: MdWhatshot,
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "decoration",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
        },
        {
          name: "tagline",
          type: "string",
        },
        {
          name: "illustration",
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "product",
      type: "reference",
      to: [
        {
          type: "product",
        },
      ],
    },
  ],
};
