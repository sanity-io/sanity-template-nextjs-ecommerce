import { MdInsertEmoticon } from "react-icons/md";

export default {
  name: "ad",
  type: "document",
  title: "Ad",
  icon: MdInsertEmoticon,
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "tagline",
      type: "text",
      title: "Tagline",
    },
    {
      name: "illustration",
      type: "figure",
      title: "Illustration",
    },
  ],
};
