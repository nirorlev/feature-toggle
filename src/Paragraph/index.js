import {getComponentToggleProxy, featureToggleService} from '../featureToggleLib'
import {toggleableComponents} from '../featureToggleConfig'


import Paragraph from './Paragraph'
import HiddenParagraph from './Paragraph_hidden'

featureToggleService.register(toggleableComponents.Paragraph, {
  'default': Paragraph,
  'hide': HiddenParagraph
})

export default new getComponentToggleProxy(toggleableComponents.Paragraph)
