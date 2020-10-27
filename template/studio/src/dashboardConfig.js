export default {
  widgets: [
    {
      name: "sanity-tutorials",
      options: {
        templateRepoId: "sanity-io/sanity-template-nextjs-ecommerce",
      },
    },
    { name: "structure-menu" },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent products",
        order: "_createdAt desc",
        types: ["product"],
      },
      layout: { width: "medium" },
    },
  ],
};
