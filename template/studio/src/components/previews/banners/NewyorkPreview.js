import React from "react";
import IrlPreview from "./IrlPreview";
import NewyorkBanner from "./NewyorkBanner";

const nmatrix = [
  0.47634888418298227,
  0.058264232259280804,
  0,
  0.17470811896886312,
  -0.003580398823306301,
  0.2611819959887091,
  0,
  -0.11096900531964564,
  0,
  0,
  1,
  0,
  0.001472894678121388,
  -0.25521471790978906,
  0,
  0.9999998395947436,
];

const NewyorkPreview = ({ document }) => {
  if (!document.displayed) {
    return <div>No document to preview</div>;
  }
  return (
    <IrlPreview
      nmatrix={nmatrix}
      adHeight={500}
      adWidth={400}
      bgSrc="/static/newyork.png"
    >
      <NewyorkBanner document={document.displayed} />
    </IrlPreview>
  );
};

export default NewyorkPreview;
