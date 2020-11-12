import { MdPerson } from "react-icons/md";

export default {
  name: "person",
  type: "document",
  title: "Person",
  icon: MdPerson,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Full name",
    },
    {
      name: "photo",
      type: "figure",
      title: "Photo",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "contactInfo",
      type: "contactInfo",
      title: "Contact information",
    },
  ],
};
