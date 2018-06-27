export const getComponentToggleProxy = (componentName) => {
  /* ... */
  // return new componentToggleProxy(componentName)
  return componentsRegistry[componentName]['default']
}

const componentsRegistry = {}

class componentToggleProxy {
  // wraps the component and exposes the same interface
  // calls addComponentToggleListener and switches implementation
  constructor(componentName) {
    this.componentName = componentName
    /* ... */
    this.onToggle(this._switchModule)
  }

  _switchModule(nextMode, prevMode) { // switches implementation
    /* ... */
  }

  onToggle(callback) { // exposes an easy way for parent to listen to module toggles
    featureToggleService.addComponentToggleListener(this.componentName, callback)
  }
}

export const featureToggleService = {
  register: (componentName, modes) => {
    console.log(`registered ${componentName} with states: ${Object.keys(modes)}`)
    componentsRegistry[componentName] = modes
  },
  addComponentToggleListener: (componentName, callback) => {
    /* ... */
    // add callback to list of listeners
    // when component mode changes, callbacks are called with (prevMode, nextMode)
  }
}