import {Dimensions, StyleSheet} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A22',
    height: '100%',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#141A22',
    flexDirection: 'column',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatRow: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  chatBox: {
    maxWidth: screenWidth * 0.7,
    minWidth: screenWidth * 0.4,
    backgroundColor: '#19212A',
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#000',
  },
  recieved: {
    backgroundColor: '#19212A',
  },
  sent: {
    backgroundColor: '#2B5278',
  },
  time: {
    fontSize: 9,
    color: '#fff',
  },
  author: {
    color: '#71BAFA',
    marginRight: 10,
  },
  text: {
    color: '#fff',
    marginTop: 10,
  },

  //Compose

  inputContainer: {
    // marginTop: 'auto',
    height: 70,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#141A22',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    backgroundColor: '#141A22',
    padding: 7,
    borderRadius: 25,
    flex: 1,
    borderWidth: 1,
    borderColor: '#71BAFA',
    height: 55,
  },
  textInput: {backgroundColor: '#141A22', flex: 1, color: '#fff'},
  submit: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: 'rgba(248,117,1,0.1)',
  },
  send: {backgroundColor: '#71BAFA'},
});

export default styles;
