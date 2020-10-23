import React, { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "part:@sanity/base/client";
import styles from "./ProductPreview.module.css";
import BlockContent from "@sanity/block-content-to-react";

const urlFor = (source) => imageUrlBuilder(client).image(source);

export default function ProductPreview({ document }) {
  const [number, setNumber] = useState(1);
  const handleInc = () => setNumber(number + 1);
  const handleDec = () => setNumber(number - 1);
  const { displayed } = document;
  const { defaultProductVariant, title, blurb, body, tags, mainImage } = displayed;
  return (
    <div className={styles.container}>
      <ul className={[styles.nav, styles.userNav].join(" ")}>
        <li>
          <a href="">🛒 (0)</a>
        </li>
        <li>
          <a href="">Login/Register</a>
        </li>
      </ul>

      <ul className={styles.nav}>
        <li>
          <span className={styles.logo}>PULP&nbsp;INC.</span>
        </li>
        <li>
          <a href="">Fruit</a>
        </li>
        <li>
          <a href="">Ferment</a>
        </li>
        <li>
          <a href="">Fresh</a>
        </li>
      </ul>

      <div className={styles.hero}>
        <div className={styles.photo}>
          <img src={urlFor(mainImage).width(800).height(1000).quality(100).url()} />
        </div>
        <div className={styles.info}>
          <h1>{title}</h1>
          {defaultProductVariant && <div className={styles.price}>${defaultProductVariant?.price}</div>}
          {blurb && <p>{blurb.en}</p>}
          {body && <BlockContent blocks={body?.en} />}
          <div className={styles.buy}>
            <span className={styles.quantityNumber}>Qty: {number} </span>
            <button className={styles.quantity} onClick={handleDec} disabled={number < 1}>
              -
            </button>{" "}
            <button className={styles.quantity} onClick={handleInc}>
              +
            </button>
            <button className={styles.buyButton}>BUY</button>
          </div>
          {/* {defaultProductVariant && <div>Weight: ({defaultProductVariant?.grams}g)</div>} */}
          {tags && (
            <ul className={styles.tags}>
              {tags.map((tag) => (
                <li className={styles.tag} key={tag}>
                  <a>{tag}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* <pre>{JSON.stringify(displayed, null, 2)}</pre> */}
    </div>
  );
}
