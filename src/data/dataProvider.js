import myData from "../assets/data/logindata.json";
import career from "../assets/data/careerdata.js";
import hobbies from "../assets/data/hobbies";

export function getUserData() {
  return myData;
}

export function getCareer() {
  return career;
}

export function getHobbies() {
  return hobbies;
}

export async function apiServiceGetCareer() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const getAPI = await fetch(url);
  return await getAPI.json();
}
