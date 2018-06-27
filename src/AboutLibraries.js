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
    let { about, aboutStyle, renderAbout } = this.props;

    if (renderAbout) return renderAbout()
    if (!about) return <View />

    let { avatar, name, description, version } = about
    let aboutStyle = aboutStyle

    if (!aboutStyle) aboutStyle = {}

    return (
      <View style={[style.aboutContainer, aboutStyle.aboutContainer]}>
        <Image style={[style.avatar, aboutStyle.avatar]} source={avatar} />
        <View style={[style.nameContainer, aboutStyle.nameContainer]}>
          <Text style={[style.name, aboutStyle.name]}>{name}</Text>
        </View>
        <View
          style={[style.descriptionContainer, aboutStyle.descriptionContainer]}
        >
          <Text style={[style.description, aboutStyle.description]}>
            {description}
          </Text>
        </View>
        <View style={[style.versionContainer, aboutStyle.versionContainer]}>
          <Text style={[style.version, aboutStyle.version]}>{version}</Text>
        </View>
      </View>
    )
  }

  _renderLibrary({ item, index }) {
    let { libraries, libraryStyle, renderLibrary } = this.props

    if (renderLibrary) return renderLibrary()

    return (
      <Library
        name={item.name}
        description={item.description}
        creator={item.creator}
        license={item.license}
        version={item.version}
        link={item.link}
        libraryStyle={libraryStyle}
      />
    )
  }

  _keyExtractor = (item, index) => item.name

  render() {
    return (
      <FlatList
        style={{ width: '100%' }}
        data={libraries}
        keyExtractor={this._keyExtractor}
        ListHeaderComponent={() => this._renderAbout()}
        renderItem={({ item, index }) => this._renderLibrary({ item, index })}
      />
    )
  }
}

export { AboutLibraries }
