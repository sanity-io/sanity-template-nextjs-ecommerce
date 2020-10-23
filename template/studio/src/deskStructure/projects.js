import S from '@sanity/desk-tool/structure-builder'

import EyeIcon from 'part:@sanity/base/eye-icon'
import EditIcon from 'part:@sanity/base/edit-icon'
import {MdAccessibility} from 'react-icons/md'

// Web preview
import IframePreview from '../components/previews/iframe/IframePreview'
import SeoPreview from '../components/previews/seo/SeoPreviews'

// a11y preview
import ColorblindPreview from '../components/previews/a11y/colorblind-filter/ColorblindPreview'
import TextToSpeechPreview from '../components/previews/a11y/text-to-speech/TextToSpeechPreview'
import BraillePreview from '../components/previews/a11y/braille/Braille'

// Web preview configuration
const remoteURL = 'https://gatsby-portfolio-preview-poc-4165823465.gtsb.io'
const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export default S.listItem()
  .title('Projects')
  .schemaType('sampleProject')
  .child(
    S.documentTypeList('sampleProject')
      .title('Projects')
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('sampleProject')
          .views([
            S.view.form().icon(EditIcon),
            S.view.component(IframePreview)
              .options({previewURL})
              .title('Web Preview')
              .icon(EyeIcon),
            S.view
              .component(SeoPreview)
              .options({previewURL})
              .icon(EyeIcon)
              .title('SEO Preview'),
            S.view
              .component(ColorblindPreview)
              .options({previewURL})
              .icon(EyeIcon)
              .title('Colorblind'),
            S.view
              .component(TextToSpeechPreview)
              .options({fields: ['title', 'excerpt', 'body']})
              .icon(MdAccessibility)
              .title('Text to speech'),
            S.view
              .component(BraillePreview)
              .icon(MdAccessibility)
              .title('Braille')
          ])
      )
  )
