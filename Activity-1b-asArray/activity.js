let temp = null;


function searchTemp() {
    let text = document.querySelector(".text1");
    let textValue = text.value;

    displayTemp(textValue);
}

function displayTemp(showTemperature) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${showTemperature}&appid=0c8ad3128f981928e8934de5e0264b44&units=metric`)
        .then(response => {
            console.log("response", response);
            return response.json();
        })
        .then(value => {
            temp = value;
            showCurrTemp([temp]);
        });

}

function showCurrTemp(show) {
    let container = document.querySelector(".container");
    container.innerHTML = "";

    show.forEach(element => {
        let div = document.createElement("div");
        div.classList.add("div1");


        let h6 = document.createElement("h6");
        h6.innerText = "Place:" + element.name;
        h6.classList.add("head");

        let p1 = document.createElement("p");

        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        let dates = "Date:" + day + "/" + month + "/" + year;

        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var sec = today.getSeconds();
        let time = "Time:-" + h + ":" + m + ":" + sec;

        p1.innerText = dates.concat(",", time);
        p1.classList.add("p1");

        let div2 = document.createElement("div");
        div2.classList.add("div2");

        let p2=document.createElement("p");
        p2.innerText="Minimum Temperature:-"+ element.main.temp_min;
        p2.classList.add("p2");

        let p3=document.createElement("o");
        p3.innerText="Maximum Temperature:-"+ element.main.temp_max;
        p3.classList.add("p3");

        let p4=document.createElement("p");
        p4.innerText="Sunrise:-"+ element.sys.sunrise;
        p4.classList.add("p4");

        let p5=document.createElement("p");
        p5.innerText="Sunset:-"+ element.sys.sunset;
        p5.classList.add("p5");

        let p6=document.createElement("p");
        p6.innerText="Wind Speed:-"+ element.wind.speed;
        p6.classList.add("p6");

        let p7=document.createElement("p");
        p7.innerText="Clouds:-"+ element.clouds.all;
        p7.classList.add("p7");



        div.append(h6, p1);
        div2.append(p2,p3,p4,p5,p6,p7);
        container.append(div,div2);
    });


}





