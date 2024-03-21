let temp = null;

function searchPlace() {
    let text = document.querySelector(".text");
    let textValue = text.value;
    console.log(text);
    console.log(textValue);

    displayTemp(textValue);
}

function displayTemp(weather) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=0c8ad3128f981928e8934de5e0264b44&units=metric`)
        .then((response) => {
            return response.json();
        })
        .then((value) => {
            temp = value;
            console.log("value", temp);
            showTemp(temp);
        })
        .catch(error => {
            console.log("error", error);
        });
}

function showTemp(data) {
    let container = document.querySelector(".container");
    container.innerHTML = "";

    console.log(data);

    let div1 = document.createElement("div");
    div1.classList.add("div1");

    let p1 = document.createElement("p");                                        //Date and Time

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    let currDate = "Date:-" + " " + day + "/" + month + "/" + year;             //Date

    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    let currTime = "Time:-" + " " + hr + ":" + min + ":" + sec;                 //Time

    p1.innerText = currDate.concat(" ,", currTime);                             //Date & Time Concat
    p1.classList.add("p1");

    let h6 = document.createElement("h6");
    h6.innerText = "Place:-" + data.name;
    h6.classList.add("head");

    let h4 = document.createElement("h4");
    h4.innerText = "Temperature:-" + data.main.temp;
    h4.classList.add("head2");


    let div2 = document.createElement("div");
    div2.classList.add("div2");

    let p2 = document.createElement("p");
    p2.innerText = "Min Temperature:-" + data.main.temp_min;
    p2.classList.add("p2");

    let p3 = document.createElement("p");
    p3.innerText = "Max Temperature:-" + data.main.temp_max;
    p3.classList.add("p3");

    let div3 = document.createElement("div");
    div3.classList.add("div3");

    let p4 = document.createElement("p");
    p4.innerText = "Sun Rise:" + data.sys.sunrise;
    p4.classList.add("p4");

    let p5 = document.createElement("p");
    p5.innerText = "Sun Set:-" + data.sys.sunset;
    p5.classList.add("p5");

    let div4 = document.createElement("div");
    div4.classList.add("div4");


    let p6 = document.createElement("p");
    p6.innerText = "Wind Speed:-" + data.wind.speed;
    p6.classList.add("p6");

    let p7 = document.createElement("p");
    p7.innerText = "Clouds:-" + data.clouds.all;
    p7.classList.add("p7");


    div1.append(p1, h6, h4);
    div2.append(p2, p3);
    div3.append(p4, p5);
    div4.append(p6, p7);
    container.append(div1, div2, div3, div4);


}