import React, { Component } from 'react'

import { View, Text } from 'react-native'

/**
 * Props
 * - name, description, creator, license, version, link
 *
 * - renderLibrary
 */
class Library extends Component {
  _renderLibrary() {
    let { name, description, creator, license, version, link } = this.props

    return (
      <View style={{ height: 300, width: '100%' }}>
        <Text>{name}</Text>
        <Text>{description}</Text>
        <Text>{creator}</Text>
        <Text>{license}</Text>
        <Text>{version}</Text>
        <Text>{link}</Text>
      </View>
    )
  }

  render() {
    if (this.props.renderLibrary) return this.props.renderLibrary()

    return this._renderLibrary()
  }
}

export { Library }
