import React from "react";
import IrlPreview from "../IrlPreview";
import Shirt from "./Shirt";

const nmatrix = [
  0.3240586730973198,
  0.01667960827044085,
  0,
  0.003341653321879987,
  -0.005802216447831465,
  0.40856293456407616,
  0,
  0.09365864064624294,
  0,
  0,
  1,
  0,
  -0.013934259443964885,
  -0.02058682468305109,
  0,
  1.0000000613503597,
];

const ShirtPreview = ({ document }) => {
  if (!document.displayed) {
    return <div>No document to preview</div>;
  }
  return (
    <IrlPreview
      nmatrix={nmatrix}
      adHeight={1500}
      adWidth={1500}
      bgSrc="https://cdn.sanity.io/images/y5p86s60/production/aca1865aa0cc5f52ca00e208430d50f27c5a2deb-3000x3000.png"
    >
      <Shirt document={document.displayed} />
    </IrlPreview>
  );
};

export default ShirtPreview;
