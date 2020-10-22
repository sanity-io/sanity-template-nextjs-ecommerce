import urlBuilder from '@sanity/image-url'
import {client} from './client'

export default source => urlBuilder(client.config()).image(source)
