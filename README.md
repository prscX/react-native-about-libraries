
<p align="center"><img src="hero.png" width="250" height="400"></p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-about-libraries"><img src="http://img.shields.io/npm/v/react-native-about-libraries.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-about-libraries/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-about-libraries#License"><img src="https://img.shields.io/npm/l/react-native-about-libraries.svg?style=flat" /></a>
</p>


# React Native About Libraries

The React Native About Libraries package is on a similar concept of [AboutLibraries](https://github.com/mikepenz/AboutLibraries). We would like to credit this library to all the [AboutLibraries](https://github.com/mikepenz/AboutLibraries) contributors

This package allows you to easily create an used open source libraries component within your app. As an extra feature you can also add an about this app section.

Here's a quick overview of functionalities supported:

* Listing of used open source libraries
* Provision for adding app section (optional)
* Autodetect installed packages
* Auto Font Scaling
* Much much more... try the sample for a quick overview.

## Getting started

`npm install react-native-about-libraries --save`

## Usage

```javascript
import { AboutLibraries } from 'react-native'

<AboutLibraries about={about} libraries={libraries} />


let about = {
  avatar: Avatar,
  name: 'React Native',
  description: 'About Libraries Sample',
  version: 'Version 0.0.1'
}

let libraries = [
  {
    name: 'ReactJS',
    description: `React is a JavaScript library for building user interfaces.
    creator: 'Facebook',
    license: 'MIT',
    version: '16.0.0',
    link: 'https://github.com/facebook/react'
  },
  {
    name: 'React Native',
    description: 'Facebook React Native',
    creator: 'Facebook',
    license: 'MIT',
    version: '0.52.0',
    link: 'https://github.com/facebook/react-native'
  }
]
```

## Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `about`           | `JSON`     |         | You can pass app info in order to render the app header. It's props are avatar, name, description, version |
| `libraries`       | `JSON`     |         | List of libraries you are using within your app                                                            |
| `renderAbout`     | `Function` |         | You can provide your own custom about section renderer                                                     |
| `renderLibraries` | `Function` |         | You can provide your own custom library section renderer                                                   |  |
| `libraryStyle`    | `JOSN`     |         | You can customize library renderer style by pass your custom styles                                        |  |
| `aboutStyle`      | `JSON`     |         | You can customize about section renderer by providing about style                                          |

## TODO

* Autodetect installed packages
* Auto Font Scaling

## Contributing

Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## License

React Native About Libraries is provided under the MIT License



## Other Contributions
- React Native - Spruce: [react-native-spruce](https://github.com/prscX/react-native-spruce)

![Screenshots](https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/extensibility-tests.gif)

- React Native - App Tour Library: [react-native-taptargetview](https://github.com/prscX/react-native-taptargetview) & [react-native-material-showcase-ios](https://github.com/prscX/react-native-material-showcase-ios)

![Screenshots](https://github.com/KeepSafe/TapTargetView/raw/master/.github/video.gif)
![Screenshots](https://github.com/aromajoin/material-showcase-ios/raw/master/art/material-showcase.gif?raw=true)

- React Native - Bottom Action Sheet: [react-native-bottom-action-sheet](https://github.com/prscX/react-native-bottom-action-sheet)

![](https://github.com/rubensousa/BottomSheetBuilder/raw/master/screens/normal_demo.gif)

- React Native - Popover: [react-native-popover-menu](https://github.com/prscX/react-native-popover-menu)

![](https://github.com/zawadz88/MaterialPopupMenu/raw/master/art/components_menus.png)

- React Native - Tooltips: [react-native-tooltips](https://github.com/prscX/react-native-tooltips)

![](https://camo.githubusercontent.com/add1764d27026b81adb117e07a10781c9abbde1b/687474703a2f2f692e696d6775722e636f6d2f4f4e383257526c2e676966)

- React Native - Shine Button: [react-native-shine-button](https://github.com/prscX/react-native-shine-button)

![Screenshots](https://raw.githubusercontent.com/ChadCSong/ShineButton/master/demo_shine_others.gif)

- React Native Iconic: [react-native-iconic](https://github.com/prscX/react-native-iconic)
![Screenshots](https://camo.githubusercontent.com/b18993cbfe91de8abdc0019dc9a6cd44707eec21/68747470733a2f2f6431337961637572716a676172612e636c6f756466726f6e742e6e65742f75736572732f3338313133332f73637265656e73686f74732f313639363538302f766266706f70666c6174627574746f6e332e676966)

- React Native Download Button: [react-native-download-button](https://github.com/prscX/react-native-download-button)

![](https://github.com/fenjuly/ArrowDownloadButton/raw/master/screenshots/arrowdownloadbutton.gif)

- React Native Siri Wave View: [react-native-siri-wave-view](https://github.com/prscX/react-native-siri-wave-view)

![](https://cdn.dribbble.com/users/341264/screenshots/2203511/wave.gif)

- React Native Material Shadows: [react-native-material-shadows](https://github.com/prscX/react-native-material-shadows)

![](
https://raw.githubusercontent.com/harjot-oberai/MaterialShadows/master/screens/cover.png
)

- React Native Gradient Blur View: [react-native-gradient-blur-view](https://github.com/prscX/react-native-gradient-blur-view)

![](
https://github.com/prscX/react-native-gradient-blur-view/raw/master/assets/hero.png
)

- React Native About Libraries: [react-native-about-libraries](https://github.com/prscX/react-native-about-libraries)

![](
https://github.com/prscX/react-native-about-libraries/raw/master/hero.png
)

- Visual Code Essential Plugins: [vs-essential-plugins](https://github.com/prscX/vs-essential-plugins)

![Screenshots](https://pbs.twimg.com/profile_images/922911523328081920/jEKFRPKV_400x400.jpg)

- Prettier Pack: [prettier-pack](https://github.com/prscX/prettier-pack)

![Screenshots](https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png)


