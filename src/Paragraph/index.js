import {smartProxy, featureToggleService} from '../featureToggleLib'

import Paragraph from './Paragraph'
import HiddenParagraph from './Paragraph_hidden'

const COMPONENT_NAME = 'Paragraph'

featureToggleService.register(COMPONENT_NAME, {
  'default': Paragraph,
  'hide': HiddenParagraph
})

export default new smartProxy(COMPONENT_NAME)
