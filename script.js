let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

let options = {
    method:"GET"
}

function getSendRequestStatus(){
    let url = "https://gorest.co.in/public-api/users"
    fetch(url, options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        requestStatusEl.textContent = jsonData.code;
        let data = JSON.stringify(jsonData);
        httpResponseEl.textContent = data;
    });
}

sendGetRequestBtnEl.addEventListener("click", getSendRequestStatus);
