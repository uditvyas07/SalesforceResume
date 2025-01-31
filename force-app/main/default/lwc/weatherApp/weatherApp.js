import { LightningElement } from 'lwc';

export default class WeatherApp extends LightningElement {
    cityName = ''
    searchHandler(event){
        this.cityName = event.target.value
    }

    submitHandler(event){
        event.preventDefault()
        this.fetchdata()
    }
    fetchdata(){
        console.log("cityName", this.cityName)
    }
}
