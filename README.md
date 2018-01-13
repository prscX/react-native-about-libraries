# React Native About Libraries

The React Native About Libraries package is on a similar concept of [AboutLibraries](https://github.com/mikepenz/AboutLibraries). We would like to credit this library to all the [AboutLibraries](https://github.com/mikepenz/AboutLibraries) contributors

This package allows you to easily create an used open source libraries component within your app. As an extra feature you can also add an about this app section.

Here's a quick overview of functionalities supported:

* Listing of used open source libraries
* Provision for adding app section (optional)
* Autodetect installed packages
* Auto Font Scaling
* Much much more... try the sample for a quick overview.

<center><img src="hero.png"></center>

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
