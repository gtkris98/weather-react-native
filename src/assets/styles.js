import {StyleSheet} from 'react-native';

const colors = {
  primaryColor: 'deepskyblue',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%"
  },
  dialogContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 0,
    width: '100%',
    alignItems: 'center',
  },
  form: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headingText: {
    letterSpacing: 6,
    color: colors.primaryColor,
    fontSize: 40,
    fontFamily: 'sf-ui-display-semibold',
  },
  temperatureText: {
    letterSpacing: 2,
    fontSize: 70,
    fontFamily: 'Raleway-Light',
    color: "deepskyblue",
    margin: 0,
    padding: 0,
    textAlign: "center",

  },
  weatherDescriptionText: {
    letterSpacing: 3,
    fontSize: 40,
    fontFamily: 'Raleway-ExtraLight',
    color: "deepskyblue",
    textAlign: "center"
  },
  feelsLikeTemperatureText: {
    letterSpacing: 1,
    fontSize: 15,
    fontFamily: 'Raleway-Light',
    color: "deepskyblue",
    marginVertical: 3
  },
  minTemperatureText: {
    letterSpacing: 1,
    fontSize: 15,
    fontFamily: 'Raleway-Light',
    color: "deepskyblue",
    margin: 2
  },
  maxTemperatureText: {
    letterSpacing: 1,
    fontSize: 15,
    fontFamily: 'Raleway-Regular',
    color: "deepskyblue",
    margin: 2
  },
  buttonText: {
    color: 'black',
  },
  header: {
    backgroundColor: colors.primaryColor,
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginTop: 10,
    height: 40,
    fontSize: 20,
    width: '90%',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  button: {
    color: 'white',
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    padding: 10,
    width: '90%',
  },
  secondaryButton: {
    borderColor: 'deepskyblue',
    borderWidth: 1,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: '90%',
  },
  errorText: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    color: 'red',
    paddingVertical: 0,
    fontSize: 12,
  },
  modalInsideView: {
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    height: 300,
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default styles;
