import { PortableText } from '../utils/sanity'
import RenderSections from './RenderSections'

function LandingPage ({ page = {} }) {
  const { title, content = [] } = page
  return <RenderSections sections={content} />
}

export default LandingPage
