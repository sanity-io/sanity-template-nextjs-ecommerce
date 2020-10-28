import PropTypes from 'prop-types'
import Cta from '../Cta'
import { PortableText, urlFor } from '../../utils/sanity'

function ImageSection (props) {
  const { heading, label, text, image, cta } = props

  if (!image) {
    return null
  }

  return (
    <div>
      <div className="container mx-auto px-6 mt-12">
        <div className="flex items-center">
          <div>
            <figure>
              <img
                className="rounded-md object-cover mx-auto"
                src={urlFor(image)
                  .auto('format')
                  .width(2000)
                  .url()}
                alt={heading}
              />
              <figcaption>
                <div>
                  <div>{label}</div>
                  <h2>{heading}</h2>
                  {text && <PortableText blocks={text} />}
                  {cta && cta.route && <Cta {...cta} />}
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string
    })
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object
}

export default ImageSection
