// City Names: Write a function called city_country() that takes in the name of a city and its country
// . The function should return a string formatted like this: "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function cityCountry(city, country){
   return `${city}, ${country}`
}

console.log(cityCountry("karachi","pakistan"))
console.log(cityCountry("silicon vally","USA"))
console.log(cityCountry("mumbai","india"))