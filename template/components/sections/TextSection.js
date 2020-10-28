import { PortableText } from '../../utils/sanity'

function TextSection (props) {
  const { text } = props
  return (
    <div>
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center">
          {text && <PortableText blocks={text} />}
        </div>
      </div>
    </div>
  )
}

export default TextSection
