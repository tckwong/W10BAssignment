//Make relevent selections to store info and add into object
function getInfo(element) {
    var parent = element.parentElement;
    var selImg = parent.querySelector('img').getAttribute('src');
    var selTitle = parent.querySelector('h2').innerText;
    var selPrice = parent.querySelector('p').innerText;
    
    var selectedItem = {
        pic : selImg,
        name : selTitle,
        rent : selPrice
    }
    Cookies.set('carInfo', selectedItem);
}

