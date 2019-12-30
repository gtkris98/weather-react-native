import cityResourceFile from '../assets/files/city-list.txt'
import loadLocalResource from 'react-native-local-resource'


export default async function citySearch(searchString) {

    cityListArray = []
    cityListWithId = []

    cityResource = await loadLocalResource(cityResourceFile).then(content => {
        console.log("loading complete");
        this.cityListArray = JSON.parse(content)
    })
    console.log(this.cityListArray[0]);

    for (let city of this.cityListArray) {
        let cityObj = {}
        cityObj['id'] = city["id"]
        cityObj['name'] = city["name"] + ", " + city["country"]
        this.cityListWithId.push(cityObj)
    }
    console.log("this.cityListWithId[0]",this.cityListWithId[0]);
    

    return this.cityListWithId
} 