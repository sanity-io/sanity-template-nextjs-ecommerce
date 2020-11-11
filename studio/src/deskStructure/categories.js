import S from "@sanity/desk-tool/structure-builder";

export default S.listItem()
  .title("Categories")
  .schemaType("category")
  .child(S.documentTypeList("category").title("Categories"));
