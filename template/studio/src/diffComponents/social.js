import React, {useEffect, useState} from 'react'
import {useDebounce} from './useDebounce'
import {DiffFromTo, FromTo, DiffCard, DiffTooltip } from '@sanity/field/diff'

// make your own watson API key here
const apiKey = process.env.SANITY_DIFF_WATSON
const watsonURL = process.env.SANITY_WATSON_URL
let headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa('apikey:' + apiKey));

function TextPreviewComponent({value, diff, from}) {
  const [tone, setTone] = useState(false)
  const fetchSentiment = () => {
    fetch(`${watsonURL}=${value}`, {headers})
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
