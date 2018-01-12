import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import { Library } from './Library'

/**
 * Props
 * - libraries: [{
 *   name, description, creator, license, version, link
 * }]
 *
 * - renderAbout: Function
 * - renderLibrary: Function
 */
class AboutLibraries extends Component {
  _renderAbout() {}

  _renderLibrary({ item, index }) {
    if (this.props.renderLibrary) return this.props.renderLibrary()

    return (
      <Library
        name={item.name}
        description={item.description}
        creator={item.creator}
        license={item.license}
        version={item.version}
        link={item.link}
      />
    )
  }

  _keyExtractor = (item, index) => item.name

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        keyExtractor={this._keyExtractor}
        renderItem={({ item, index }) => this._renderLibrary({ item, index })}
      />
    )
  }
}

export { AboutLibraries }
