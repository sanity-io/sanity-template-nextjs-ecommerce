import {MdPeople} from 'react-icons/md'
import {TextAnalysisFieldDiff} from '../../src/diffComponents/social'
export default {
  name: 'social',
  type: 'document',
  title: 'Social',
  icon: MdPeople,
  fields: [
    {
      name: 'channel',
      type: 'string',
      options: {
        list: ['twitter','instagram', 'linkedin']
      }
    },
    {
      name: 'text',
      type: 'text',
      diffComponent: TextAnalysisFieldDiff
    },
    {
      name: 'attachment',
      type: 'image',
      title: 'Attachment',
      options: {hotspot: true}
    }
  ]
}
