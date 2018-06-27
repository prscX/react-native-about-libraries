import { StyleSheet, PixelRatio } from 'react-native'

let style = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: "#F2F2F2",
    backgroundColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "#CCCCCC",
    shadowOpacity: 0.8,
    elevation: 1
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  seprator: {
    height: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#D9D9D9"
  },
  body: {
    flex: 1,
    margin: 10
  },
  name: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  description: {
    color: "#7A7A7A",
    fontSize: 12
  },
  creator: {
    marginRight: 10,
    color: "#7A7A7A",
    fontSize: 14
  },
  creatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  license: {},
  version: {},
  link: {}
});

export default style
