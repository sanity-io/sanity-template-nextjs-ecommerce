import S from "@sanity/desk-tool/structure-builder";
import EyeIcon from "part:@sanity/base/eye-icon";
import EditIcon from "part:@sanity/base/edit-icon";

export default S.listItem()
  .title("People")
  .schemaType("person")
  .child(
    S.documentTypeList("person")
      .title("People")
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType("person")
          .views([S.view.form().icon(EditIcon)])
      )
  );
