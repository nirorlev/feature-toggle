// ALL TOGGLING LOGIC IS IN THIS ONE FILE
//
// Here we define how each toggleable component is controlled.
// For each componentName, we calculate the operation MODE.
// So we map Paragraph to 'default'/'hide'.

export const toggleableComponents = {
  Paragraph: 'Paragraph'
}

export default {
  [toggleableComponents.Paragraph]: ({showParagraph}) => showParagraph ? 'default' : 'hide'
  // more application components
}