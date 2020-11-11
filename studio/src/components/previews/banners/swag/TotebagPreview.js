import React from "react";
import IrlPreview from "../IrlPreview";
import Totebag from "./Totebag";

const nmatrix = [
  0.4721665923698971,
  -0.004838596800691464,
  0,
  -0.010156274352329873,
  0.0034625401702901393,
  0.30905733275145053,
  0,
  -0.0050914851979598,
  0,
  0,
  1,
  0,
  -0.004606645812998735,
  0.14868293730433127,
  0,
  1.0000001057490668,
];

const TotebagPreview = ({ document }) => {
  if (!document.displayed) {
    return <div>No document to preview</div>;
  }
  return (
    <IrlPreview
      nmatrix={nmatrix}
      adHeight={800}
      adWidth={1200}
      bgSrc="https://cdn.sanity.io/images/y5p86s60/production/6d95a96a48fbfac767deef6c37719883b55721eb-800x1200.png?fit=max"
    >
      <Totebag document={document.displayed} />
    </IrlPreview>
  );
};

export default TotebagPreview;
