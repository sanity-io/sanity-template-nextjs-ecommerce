import S from "@sanity/desk-tool/structure-builder";
import EyeIcon from "part:@sanity/base/eye-icon";
import EditIcon from "part:@sanity/base/edit-icon";

// IRL preview
import MagazinePreview from "../components/previews/banners/MagazinePreview";
import OsakaPreview from "../components/previews/banners/OsakaPreview";

export default S.listItem()
  .title("Ads")
  .schemaType("ad")
  .child(
    S.documentTypeList("ad")
      .title("Ads")
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType("ad")
          .views([
            S.view.form().icon(EditIcon),
            S.view
              .component(MagazinePreview)
              .icon(EyeIcon)
              .id("magazine")
              .title("Magazine"),
            /* S.view
              .component(NewyorkPreview)
              .icon(EyeIcon)
              .id('newyork')
              .title('New York'), */
            S.view
              .component(OsakaPreview)
              .icon(EyeIcon)
              .id("osaka")
              .title("Osaka"),
          ])
      )
  );
