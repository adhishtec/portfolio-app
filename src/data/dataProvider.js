import myData from '../assets/logindata.json'
import career from '../assets/careerdata.js'
import hobbies from '../assets/hobbies'
import axios from 'axios'

export function getUserData(){
    return myData
}

export function getCareer(){
    return career
}

export function getHobbies(){
    return hobbies
}

export async function apiServiceGetCareer(){
const url = "https://jsonplaceholder.typicode.com/todos/1"
const getAPI = await fetch(url)
return await getAPI.json()
}