import { StyleSheet } from 'react-native'
import colors from './constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background
  },
  card: {
    overflow: 'hidden',
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOffset:{
      height: 3,
      width: 3
    },
    shadowOpacity: 0.5,
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  input: {
    width: '100%',
    padding: 8,
    textAlign: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    color: colors.accentFont
  },
  button: {
    padding: 15,
    width: '100%',
    backgroundColor: colors.header,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 14
  },
  textContainer: {
    flexDirection: 'row',
  },
  label: {
    width: '35%',
    fontSize: 17,
    color: colors.accentFont,
    fontWeight: 'bold',
    marginBottom: 5
  },
  detailText: {
    fontSize: 17,
    color: colors.mainFont,
    marginLeft: '5%',
    marginBottom: 5
  },
  weatherWrapper: {
    marginTop: 40
  },
  cardHeader: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.accentFont,
    marginBottom: 15
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15
  }
})

export default styles