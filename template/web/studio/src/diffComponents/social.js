import React, {useEffect, useState} from 'react'
import {useDebounce} from './useDebounce'
import {DiffFromTo, FromTo, DiffCard, DiffTooltip } from '@sanity/field/diff'

const apiKey = 'HCGFupt5a1XsC9BEKpJbm4pgX8Z1GxsOznbWfcxV18SV'
let headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa('apikey:' + apiKey));

function TextPreviewComponent({value, diff, from}) {
  const [tone, setTone] = useState(false)
  const fetchSentiment = () => {
    fetch(`https://api.eu-de.tone-analyzer.watson.cloud.ibm.com/instances/c9a6ea11-f5b7-436f-a454-4d1f8784a1dc/v3/tone?version=2017-09-21&text=${value}`, {headers})
    .then(res => res.json())
    .then(data => setTone(data))
  }

  useEffect(() => fetchSentiment(), [value])

  return (<div>
    <div><DiffTooltip as="p" diff={diff}>{from ? <del>{value}</del> : <span>{value}</span>}</DiffTooltip></div>
    { tone
      ? <div><small>Sentiment: {tone.document_tone.tones.reduce((acc, curr, index) => `${acc}${index > 0 ? ';' : ''} ${curr.tone_name} (${(Math.round(curr.score * 100) / 100).toFixed(2)})`, '')}</small></div>
      : <div><small>Analyzing tone…</small></div>
    }
    </div>)

}


export function TextAnalysisFieldDiff({diff, schemaType}) {
  const {fromValue, toValue, action} = diff
  return (
    <FromTo
      from={<TextPreviewComponent diff={diff} value={fromValue} from />}
      to={<TextPreviewComponent diff={diff} value={toValue} />}
    />
  )
}
