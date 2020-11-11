import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";

export default S.listItem()
  .title("Settings")
  .child(
    S.document()
      .id("siteSettings")
      .schemaType("siteSettings")
      .documentId("siteSettings")
  )
  .icon(MdSettings);
