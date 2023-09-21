// src/app/weather/weather.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherData: any[] = [
    {
      region: 'Delhi',
      temperature: '35°C',
      condition: 'Sunny',
      humidity: '50%',
      windSpeed: '10 km/h'
    },
    {
      region: 'Mumbai',
      temperature: '30°C',
      condition: 'Partly Cloudy',
      humidity: '70%',
      windSpeed: '12 km/h'
    },
    {
      region: 'Chennai',
      temperature: '32°C',
      condition: 'Rainy',
      humidity: '80%',
      windSpeed: '8 km/h'
    },
    {
      region: 'Kolkata',
      temperature: '34°C',
      condition: 'Cloudy',
      humidity: '75%',
      windSpeed: '11 km/h'
    },
    {
      region: 'Bangalore',
      temperature: '28°C',
      condition: 'Clear',
      humidity: '65%',
      windSpeed: '14 km/h'
    },
    {
      region: 'Hyderabad',
      temperature: '31°C',
      condition: 'Partly Cloudy',
      humidity: '68%',
      windSpeed: '9 km/h'
    },
    {
      region: 'Jaipur',
      temperature: '37°C',
      condition: 'Sunny',
      humidity: '45%',
      windSpeed: '13 km/h'
    },
    {
      region: 'Lucknow',
      temperature: '36°C',
      condition: 'Clear',
      humidity: '55%',
      windSpeed: '10 km/h'
    },
    {
      region: 'Ahmedabad',
      temperature: '36°C',
      condition: 'Partly Cloudy',
      humidity: '63%',
      windSpeed: '12 km/h'
    },
    {
      region: 'Pune',
      temperature: '29°C',
      condition: 'Partly Cloudy',
      humidity: '60%',
      windSpeed: '15 km/h'
    },
    {
      region: 'Bhubaneswar',
      temperature: '33°C',
      condition: 'Rainy',
      humidity: '82%',
      windSpeed: '7 km/h'
    },
    {
      region: 'Thiruvananthapuram',
      temperature: '30°C',
      condition: 'Cloudy',
      humidity: '78%',
      windSpeed: '10 km/h'
    },
    {
      region: 'Chandigarh',
      temperature: '35°C',
      condition: 'Sunny',
      humidity: '48%',
      windSpeed: '11 km/h'
    },
    {
      region: 'Guwahati',
      temperature: '31°C',
      condition: 'Rainy',
      humidity: '85%',
      windSpeed: '6 km/h'
    },
    {
      region: 'Shimla',
      temperature: '28°C',
      condition: 'Cloudy',
      humidity: '70%',
      windSpeed: '9 km/h'
    },
    {
      region: 'Patna',
      temperature: '34°C',
      condition: 'Clear',
      humidity: '58%',
      windSpeed: '13 km/h'
    },
    {
      region: 'Raipur',
      temperature: '33°C',
      condition: 'Partly Cloudy',
      humidity: '62%',
      windSpeed: '10 km/h'
    },
    {
      region: 'Srinagar',
      temperature: '27°C',
      condition: 'Cloudy',
      humidity: '66%',
      windSpeed: '7 km/h'
    },
    {
      region: 'Ranchi',
      temperature: '32°C',
      condition: 'Rainy',
      humidity: '76%',
      windSpeed: '8 km/h'
    },
    {
      region: 'Agartala',
      temperature: '29°C',
      condition: 'Partly Cloudy',
      humidity: '72%',
      windSpeed: '11 km/h'
    },
    {
      region: 'Bhopal',
      temperature: '35°C',
      condition: 'Sunny',
      humidity: '52%',
      windSpeed: '10 km/h'
    },
    {
      region: 'Agra',
      temperature: '36°C',
      condition: 'Clear',
      humidity: '50%',
      windSpeed: '12 km/h'
    },
    {
      region: 'Dehradun',
      temperature: '31°C',
      condition: 'Cloudy',
      humidity: '65%',
      windSpeed: '8 km/h'
    },
    {
      region: 'Aurangabad',
      temperature: '33°C',
      condition: 'Partly Cloudy',
      humidity: '60%',
      windSpeed: '11 km/h'
    },
    {
      region: 'Nagpur',
      temperature: '34°C',
      condition: 'Clear',
      humidity: '55%',
      windSpeed: '9 km/h'
    },
    {
      region: 'Jamshedpur',
      temperature: '32°C',
      condition: 'Partly Cloudy',
      humidity: '68%',
      windSpeed: '13 km/h'
    },
    {
      region: 'Amritsar',
      temperature: '36°C',
      condition: 'Sunny',
      humidity: '48%',
      windSpeed: '10 km/h'
    },
    {
      region: 'Kochi',
      temperature: '29°C',
      condition: 'Rainy',
      humidity: '82%',
      windSpeed: '7 km/h'
    },
    {
      region: 'Indore',
      temperature: '35°C',
      condition: 'Partly Cloudy',
      humidity: '62%',
      windSpeed: '11 km/h'
    },
    {
      region: 'Jodhpur',
      temperature: '37°C',
      condition: 'Sunny',
      humidity: '45%',
      windSpeed: '14 km/h'
    },
    {
      region: 'Rajkot',
      temperature: '36°C',
      condition: 'Partly Cloudy',
      humidity: '63%',
      windSpeed: '12 km/h'
    },
    {
      region: 'Bhubaneshwar',
      temperature: '33°C',
      condition: 'Rainy',
      humidity: '80%',
      windSpeed: '10 km/h'
    },
    {
      region: 'Nashik',
      temperature: '32°C',
      condition: 'Clear',
      humidity: '54%',
      windSpeed: '9 km/h'
    },
    {
      region: 'Varanasi',
      temperature: '34°C',
      condition: 'Partly Cloudy',
      humidity: '58%',
      windSpeed: '12 km/h'
    },
    {
      region: 'Visakhapatnam',
      temperature: '30°C',
      condition: 'Rainy',
      humidity: '78%',
      windSpeed: '14 km/h'
    },
    {
      region: 'Nagaland',
      temperature: '26°C',
      condition: 'Cloudy',
      humidity: '70%',
      windSpeed: '11 km/h'
    },
    {
      region: 'Puducherry',
      temperature: '31°C',
      condition: 'Clear',
      humidity: '62%',
      windSpeed: '10 km/h'
    },
    {
      region: 'Meghalaya',
      temperature: '28°C',
      condition: 'Sunny',
      humidity: '45%',
      windSpeed: '13 km/h'
    },
    {
      region: 'Manipur',
      temperature: '30°C',
      condition: 'Partly Cloudy',
      humidity: '55%',
      windSpeed: '12 km/h'
    },
    {
      region: 'Sikkim',
      temperature: '27°C',
      condition: 'Rainy',
      humidity: '85%',
      windSpeed: '8 km/h'
    },
    {
      region: 'Goa',
      temperature: '32°C',
      condition: 'Partly Cloudy',
      humidity: '63%',
      windSpeed: '7 km/h'
    },
    {
      region: 'Himachal Pradesh',
      temperature: '28°C',
      condition: 'Cloudy',
      humidity: '70%',
      windSpeed: '11 km/h'
    },
    {
      region: 'Tripura',
      temperature: '29°C',
      condition: 'Sunny',
      humidity: '48%',
      windSpeed: '10 km/h'
    },
    {
      region: 'Chhattisgarh',
      temperature: '33°C',
      condition: 'Partly Cloudy',
      humidity: '60%',
      windSpeed: '14 km/h'
    },
    {
      region: 'Jharkhand',
      temperature: '32°C',
      condition: 'Partly Cloudy',
      humidity: '65%',
      windSpeed: '12 km/h'
    },
    {
      region: 'Odisha',
      temperature: '33°C',
      condition: 'Rainy',
      humidity: '80%',
      windSpeed: '9 km/h'
    },
    {
      region: 'Karnataka',
      temperature: '31°C',
      condition: 'Partly Cloudy',
      humidity: '68%',
      windSpeed: '13 km/h'
    },
    {
      region: 'Madhya Pradesh',
      temperature: '35°C',
      condition: 'Sunny',
      humidity: '50%',
      windSpeed: '11 km/h'
    },
    {
      region: 'Rajasthan',
      temperature: '37°C',
      condition: 'Sunny',
      humidity: '45%',
      windSpeed: '10 km/h'
    },
    {
      region: 'Uttar Pradesh',
      temperature: '36°C',
      condition: 'Clear',
      humidity: '55%',
      windSpeed: '12 km/h'
    },
    {
      region: 'Gujarat',
      temperature: '36°C',
      condition: 'Partly Cloudy',
      humidity: '63%',
      windSpeed: '8 km/h'
    },
    {
      region: 'Punjab',
      temperature: '35°C',
      condition: 'Sunny',
      humidity: '52%',
      windSpeed: '9 km/h'
    },
  ];
  

  getWeatherData() {
    return this.weatherData;
  }
}
