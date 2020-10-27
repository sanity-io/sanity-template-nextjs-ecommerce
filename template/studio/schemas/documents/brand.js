import { MdLooks } from "react-icons/md";

export default {
  name: "brand",
  type: "document",
  title: "Brand",
  icon: MdLooks,
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "tagline",
      type: "string",
    },
    {
      name: "colors",
      type: "object",
      fields: [
        {
          name: "primary",
          type: "color",
        },
        {
          name: "secondary",
          type: "color",
        },
        {
          name: "ambient",
          type: "color",
        },
      ],
    },
    {
      name: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tagline",
      media: "logo",
    },
  },
};
