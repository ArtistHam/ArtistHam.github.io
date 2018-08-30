var buttons = document.querySelectorAll('nav a');

var tags = document.getElementsByClassName('tags');
var tagNames = [];

for(var i = 0; i < tags.length; i++){
    tagNames[i] = tags[i].innerHTML.split(", ");
}

var works = document.querySelectorAll('article');
for(var i = 0; i < works.length; i++){
    works[i].style.display = 'block';
}


function searchWorks(num) {
    switch(num){
        case 0: {
            for(var i = 0; i < works.length; i++){
                works[i].style.display = "block";
            }
        }
        break;

        case 1: {
            outer: for(var i = 0; i < tagNames.length; i++){
                for(var j = 0; j < tagNames[i].length; j++){
                    if(tagNames[i][j] == "JQuery"){
                        works[i].style.display = "block";
                        continue outer;
                    }
                    if(tagNames[i][j] != "JQuery"){
                        works[i].style.display = "none";
                        continue;
                    }
                }
            }
        }
        break;

        case 2: {
            outer: for(var i = 0; i < tagNames.length; i++){
                for(var j = 0; j < tagNames[i].length; j++){
                    if(tagNames[i][j] == "AJAX"){
                        works[i].style.display = "block";
                        continue outer;
                    }
                    if(tagNames[i][j] != "AJAX"){
                        works[i].style.display = "none";
                        continue;
                    }
                }
            }
        }
        break;

        case 3: {
            outer: for(var i = 0; i < tagNames.length; i++){
                for(var j = 0; j < tagNames[i].length; j++){
                    if(tagNames[i][j] == "Pure JS"){
                        works[i].style.display = "block";
                        continue outer;
                    }
                    if(tagNames[i][j] != "Pure JS"){
                        works[i].style.display = "none";
                        continue;
                    }
                }
            }
        }
        break;

        case 4: {
            outer: for(var i = 0; i < tagNames.length; i++){
                for(var j = 0; j < tagNames[i].length; j++){
                    if(tagNames[i][j] == "Pure HTML/CSS"){
                        works[i].style.display = "block";
                        continue outer;
                    }
                    if(tagNames[i][j] != "Pure HTML/CSS"){
                        works[i].style.display = "none";
                        continue;
                    }
                }
            }
        }
        break;

        case 5: {
            outer: for(var i = 0; i < tagNames.length; i++){
                for(var j = 0; j < tagNames[i].length; j++){
                    if(tagNames[i][j] == "Bootstrap"){
                        works[i].style.display = "block";
                        continue outer;
                    }
                    if(tagNames[i][j] != "Bootstrap"){
                        works[i].style.display = "none";
                        continue;
                    }
                }
            }
        }
        break;
    }
}


function fadeOutEffectWithHide(elem) {
    var fadeEffect = setInterval(function() {
        if (!elem.style.opacity) {
            elem.style.opacity = 1;
        }
        if (elem.style.opacity == 0) {
            clearInterval(fadeEffect);
        } else {
            elem.style.opacity -= 0.05;
        }
    }, 50);
    elem.state = elem.style.display;
    setTimeout(function(){
        elem.style.display = "none";
      }, 1000);
}

function fadeInEffectWithShow(elem) {
    elem.style.display = elem.state;
    var fadeEffect = setInterval(function() {
        if (!elem.style.opacity) {
            elem.style.opacity = 0;
        }
        if (elem.style.opacity > 0.95) {
            clearInterval(fadeEffect);
        } else {
            elem.style.opacity = +elem.style.opacity + 0.05;
        }
    }, 50);
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};