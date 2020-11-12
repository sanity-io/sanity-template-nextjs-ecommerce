import React from "react";
import PropTypes from "prop-types";
import sanityClient from "part:@sanity/base/client";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Shirt.css";

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
  return builder.image(source);
};

export default class Shirt extends React.PureComponent {
  static propTypes = {
    document: PropTypes.object,
  };

  static defaultProps = {
    document: "",
  };

  render() {
    const { decoration = {} } = this.props.document;
    const {
      heading = "No heading",
      tagline = "No tagline",
      illustration,
    } = decoration;
    const imageUrl = urlFor(illustration).width(500).url();

    return (
      <div className={styles.banner}>
        <img className={styles.backgroundImage} src={imageUrl} />
        <div className={styles.content}>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.tagline}>{tagline}</div>
        </div>
      </div>
    );
  }
}
