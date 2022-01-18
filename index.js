// Day 4 - Task no 4

const getCountries = () => {
    console.log("Getting countries.....");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        const countries = xhr.response;
        const countNameList = countries.filter(countries => countries.name.common && countries.population && countries.region && countries.subregion);
        console.log(countNameList.map((countNameList) => { return { name: countNameList.name.common , population: countNameList.population , region : countNameList.region , subregion : countNameList.subregion}}));

        const allCountFlags = countries.map(countries => countries.flags);
        console.log(allCountFlags);
    }
}

getCountries();


// How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

// we can use _.isEqual( obj1 , obj2) to compare two objects irrespective of the order

