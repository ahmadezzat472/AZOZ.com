let input = document.querySelector(".home__search-input");
let btn = document.querySelector(".home__search-btn");
let allHotel = [
  "aida",
  "savoy",
  "notival",
  "hilton",
  "elotel",
  "sindbad",
  "new",
  "seven",
  "victory",
  "novotel",
  "horus",
  "town",
  "sun",
  "apart",
  "arabella",
];

btn.onclick = function (ele) {
  ele.preventDefault();
  let flag = 0;
  allHotel.forEach(function (ele) {
    if (input.value == ele) {
      flag = 1;
    }
  });
  if (flag == 1) {
    allHotel.forEach(function (ele) {
      document.getElementById(ele).style.display = "none";
    });
    document.getElementById(input.value).style.display = "flex";
  } else {
    alert("hotel not found");
  }
};

input.onfocus = function () {
  allHotel.forEach(function (ele) {
    document.getElementById(ele).style.display = "flex";
  });
};

/*
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let allHotel = ["aida", "savoy", "notival", "hilton", "elotel", "sindbad", "new", "seven", "victory", "novotel", "horus", "town", "sun", "apart", "arabella"]


input.onfocus = function() {
    allHotel.forEach(function(ele) {
        document.getElementById(ele).style.display="flex";
    })

    // document.getElementById("aida").style.display="flex";
    // document.getElementById("savoy").style.display="flex";
    // document.getElementById("notival").style.display="flex";
    // document.getElementById("hilton").style.display="flex";
    // document.getElementById("elotel").style.display="flex";
    // document.getElementById("sindbad").style.display="flex";
    // document.getElementById("new").style.display="flex";
    // document.getElementById("seven").style.display="flex";
    // document.getElementById("victory").style.display="flex";
    // document.getElementById("novotel").style.display="flex";
    // document.getElementById("horus").style.display="flex";
    // document.getElementById("town").style.display="flex";
    // document.getElementById("sun").style.display="flex";
    // document.getElementById("apart").style.display="flex";
    // document.getElementById("arabella").style.display="flex";
}


function sear(){
    if(search.value=="aida" || search.value=="Aida"){
        document.getElementById("savoy").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("apart").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="savoy" || search.value=="Savoy"){
        document.getElementById("aida").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("apart").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="notival" || search.value=="Notival"){
        document.getElementById("aida").style.display="none";
        document.getElementById("savoy").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("apart").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="hilton" || search.value=="Hilton"){
        document.getElementById("aida").style.display="none";
        document.getElementById("savoy").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("apart").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="el otel" || search.value=="El otel"){
        document.getElementById("aida").style.display="none";
        document.getElementById("savoy").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("apart").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="sindbad" || search.value=="Sindbad"){
        document.getElementById("aida").style.display="none";
        document.getElementById("savoy").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("apart").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="new pyramids" || search.value=="New pyramids"){
        document.getElementById("aida").style.display="none";
        document.getElementById("savoy").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("apart").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="seven eleven" || search.value=="Seven eleven"){
        document.getElementById("aida").style.display="none";
        document.getElementById("savoy").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("apart").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="victory" || search.value=="Victory"){
        document.getElementById("aida").style.display="none";
        document.getElementById("savoy").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("apart").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="novotel" || search.value=="Novotel"){
        document.getElementById("aida").style.display="none";
        document.getElementById("savoy").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("apart").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="horus" || search.value=="Horus"){
        document.getElementById("aida").style.display="none";
        document.getElementById("savoy").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("apart").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="town view" || search.value=="Town view"){
        document.getElementById("aida").style.display="none";
        document.getElementById("savoy").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("apart").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="sunrise" || search.value=="Sunrise"){
        document.getElementById("aida").style.display="none";
        document.getElementById("savoy").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("apart").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="apartments" || search.value=="Apartments"){
        document.getElementById("aida").style.display="none";
        document.getElementById("savoy").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("arabella").style.display="none";
    }
   else if(search.value=="arabella" || search.value=="Arabella"){
        document.getElementById("aida").style.display="none";
        document.getElementById("savoy").style.display="none";
        document.getElementById("notival").style.display="none";
        document.getElementById("hilton").style.display="none";
        document.getElementById("elotel").style.display="none";
        document.getElementById("sindbad").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("seven").style.display="none";
        document.getElementById("victory").style.display="none";
        document.getElementById("novotel").style.display="none";
        document.getElementById("horus").style.display="none";
        document.getElementById("town").style.display="none";
        document.getElementById("sun").style.display="none";
        document.getElementById("apart").style.display="none";
    }
    else{
        window.alert("hotel not found")
    }
}
*/
