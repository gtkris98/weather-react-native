import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      console.log('location permission denied');
      return false;
    }
  } catch (err) {
    throw err;
  }
}

export async function getUserLocation() {
  try {
    await Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        return position;
      },
      error => {
        console.log(error.code, error.message);
        throw error;
      },
      {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
    );
  } catch (err) {
    throw err;
  }
}
