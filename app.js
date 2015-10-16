var list_of_words = [];

function resetNames(){
  list_of_words = ["Bark-a-lay", "Taylor", "Orange Juice (Devil's Juice)", "Stanford Cardinal", "Oregon Ducks", "Taylor Swift", "Katy Perry", "Kitty Purry", "Matthew, come over here!", "Infinity QX60", "Prius", "Tesla", "Rushun-na-na", "NY Metropolitans", "NY Jets", "NFL", "DanceLine", "8 Count Dance", "Pepperoni Pizza", "Frozen", "Fanta & Doritoes", "ESPN", "Blackish", "Modern Family", "Fresh Off the Boat", "The Goldbergs", "Sprite", "Yoga", "Fresh Corn Grill"]
}    

function resetAnimation(){
  document.getElementById("chosen_one").removeAttribute("class");
}

function namePicker(){
  //Random Color Generator
  var random1 = Math.floor(Math.random() * 9);
  var random2 = Math.floor(Math.random() * 3);
  var random3 = Math.floor(Math.random() * 3);

  //Name Picker
  //var namePick = list_of_words[Math.floor(Math.random() * list_of_words.length)]; 
  var namePick = list_of_words.splice(Math.floor(Math.random() * list_of_words.length), 1);
  var animatePick = [ "animated flipInX", "animated pulse", "animated rubberBand", "animated shake", "animated swing", "animated tada", "animated bounceIn", "animated rotateIn", "animated rotateIn", "animated flipInY"]
  
  //Display
  if (list_of_words.length > 0) {
    document.getElementById("chosen_one").innerHTML = (namePick);
    document.getElementsByTagName("body")[0].style.backgroundColor = "#"+random1+random2+random3+random1+random2+random3;
    document.getElementById("chosen_one").setAttribute("class", animatePick[random1]);
  } else {
    resetNames();
  };
  //document.write(namePick);
  //document.getElementById("chosen_one").innerHTML = (namePick);
} 

function detectSpecialKeys(e){
    var evtobj=window.event? event : e
    if (evtobj.keyCode == 32) // || evtobj.ctrlKey || evtobj.shiftKey)
      namePicker();
}
document.onclick=namePicker();
