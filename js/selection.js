var getCookie = Cookies.get('carInfo');
console.log(getCookie);

var getCookie = Cookies.get('carInfo');
var cookieParse = JSON.parse(getCookie);
appendSelection();

function appendSelection() {
    //Create elements in DOM
    var selectedImg = document.createElement('img');
    var selectedTitle = document.createElement('h2');
    var selectedRent = document.createElement('p');
    var parent = document.getElementById('parent');

    //setting the values for each created element and append to DOM
    selectedImg.setAttribute('src', cookieParse.pic);
    parent.append(selectedImg);

    selectedTitle.innerText = cookieParse.name;
    parent.append(selectedTitle);

    selectedRent.innerText = cookieParse.rent;
    parent.append(selectedRent);
}

//Remove cookies and takes user back to home page
var myBtn = document.getElementById('btnGoBack');
myBtn.addEventListener('click', newOption);

function newOption() {
   Cookies.remove('carInfo');
}