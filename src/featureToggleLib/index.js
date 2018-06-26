import React, {Component} from 'react'

const dic = {}
export const smartProxy = (componentName) => dic[componentName]['hide']

export const featureToggleService = {
  register: (componentName, info) => {
    console.log(`registered ${componentName} with states: ${Object.keys(info)}`)
    dic[componentName] = info
  }
}