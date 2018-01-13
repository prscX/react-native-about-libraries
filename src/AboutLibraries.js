import React, { Component } from 'react'
import { View, FlatList, Text, Image } from 'react-native'

import { Library } from './Library'

import style from './AboutLibraries.style'

/**
 * Props
 * - libraries: [{
 *   name, description, creator, license, version, link
 * }]
 *
 * - libraryStyle
 *
 * - renderAbout: Function
 * - renderLibrary: Function
 */
class AboutLibraries extends Component {
  _renderAbout() {
    if (this.props.renderAbout) return this.props.renderAbout()
    if (!this.props.about) return <View />

    let { avatar, name, description, version } = this.props.about

    return (
      <View style={style.aboutContainer}>
        <Image style={style.avatar} source={avatar} />
        <View style={style.nameContainer}>
          <Text style={style.name}>{name}</Text>
        </View>
        <View style={style.descriptionContainer}>
          <Text style={style.description}>{description}</Text>
        </View>
        <View style={style.versionContainer}>
          <Text style={style.version}>{version}</Text>
        </View>
      </View>
    )
  }

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
        style={this.props.libraryStyle}
      />
    )
  }

  _keyExtractor = (item, index) => item.name

  render() {
    return (
      <FlatList
        style={{ width: '100%' }}
        data={this.props.libraries}
        keyExtractor={this._keyExtractor}
        ListHeaderComponent={() => this._renderAbout()}
        renderItem={({ item, index }) => this._renderLibrary({ item, index })}
      />
    )
  }
}

export { AboutLibraries }
