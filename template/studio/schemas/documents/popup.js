import { MdLocationOn } from "react-icons/md";

export default {
  name: "popup",
  type: "document",
  title: "Popup Shop",
  icon: MdLocationOn,
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "location",
      type: "geopoint",
    },
    {
      name: "openingHours",
      type: "object",
      title: "Opening hours",
      fields: [
        {
          name: "from",
          type: "datetime",
        },
        {
          name: "to",
          type: "datetime",
        },
      ],
    },
  ],
};
