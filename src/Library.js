import React, { Component } from 'react'

import {
  View,
  Text,
  Linking,
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform
} from 'react-native'
import style from './Library.style'

/**
 * Props
 * - name, description, creator, license, version, link
 *
 * - renderLibrary
 */
class Library extends Component {
  _renderHeader() {
    let { name, creator, license, version, link } = this.props
    let libraryStyle = this.props.libraryStyle
    if (!libraryStyle) libraryStyle = {}

    return (
      <View style={[style.header, libraryStyle.header]}>
        <View style={[style.nameContainer, libraryStyle.nameContainer]}>
          <Text style={[style.name, libraryStyle.name]}>{name}</Text>
        </View>
        <View style={[style.creatorContainer, libraryStyle.creatorContainer]}>
          <Text style={[style.creator, libraryStyle.creator]}>{creator}</Text>
        </View>
      </View>
    )
  }

  _renderBody() {
    let { name, description, creator, license, version, link } = this.props
    let libraryStyle = this.props.libraryStyle
    if (!libraryStyle) libraryStyle = {}

    return (
      <View style={[style.body, libraryStyle.body]}>
        <Text style={[style.description, libraryStyle.description]}>
          {description}
        </Text>
      </View>
    )
  }

  _renderLibrary() {
    let { name, description, creator, license, version, link } = this.props
    let libraryStyle = this.props.libraryStyle
    if (!libraryStyle) libraryStyle = {}

    let Touchable = Platform.select({
      ios: () => TouchableHighlight,
      android: () => TouchableNativeFeedback
    })()

    return (
      <Touchable
        onPress={() => {
          Linking.openURL(link)
        }}
        style={[style.container, libraryStyle.container]}
        underlayColor={'#FFF'}
      >
        <View>
          {this._renderHeader()}
          <View style={[style.seprator, libraryStyle.seprator]} />
          {this._renderBody()}
        </View>
      </Touchable>
    )
  }

  render() {
    if (this.props.renderLibrary) return this.props.renderLibrary()

    return this._renderLibrary()
  }
}

export { Library }
