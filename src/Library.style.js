import { StyleSheet, PixelRatio } from 'react-native'

let style = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: '#f2f2f2',
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#cccccc',
    shadowOpacity: 0.8,
    elevation: 1
  },
  header: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  seprator: {
    height: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#d9d9d9'
  },
  body: {
    flex: 1,
    margin: 10
  },
  name: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  description: {
    color: '#7a7a7a',
    fontSize: 12
  },
  creator: {
    marginRight: 10,
    color: '#7a7a7a',
    fontSize: 14
  },
  creatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  license: {},
  version: {},
  link: {}
})

export default style
