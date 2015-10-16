var list_of_words = [];

function resetNames(){
  list_of_words = ["Bark-a-lay", "Taylor", "Orange Juice", "Stanford Cardinal", "Oregon Ducks", "Taylor Swift", "Katy Perry", "Kitty Purry", "Matthew, come over here!", "Infinity QX60", "Prius", "Tesla", "Rushun-na-na", "NY Mets", "NY Jets", "NFL", "DanceLine", "8 Count Dance", "Pepperoni Pizza", "Frozen", "Fanta & Doritos", "ESPN", "Blackish", "Modern Family", "Fresh Off the Boat", "The Goldbergs", "Sprite", "Yoga", "Fresh Corn Grill", "eRub", "eRub's Water Bottle", "eRub's Travel Toothbrush", "The Center", "Brentwood", "Crossroads", "The Willows", "Wilshire Blvd Temple", "Migis Lodge", "Quissi", "Ice Cream Sundae", "Ironman", "The Avengers", "Rancho Park", "Marcus Mariotta", "Hawaii", "Mexico", "Homework", "England", "Mango", "Carly Platt", "The Perlmutters", "Rex Ryan", "Justin Bieber", "Selena Gomez", "Maroon 5", "Star Wars", "The Karate Kid", "Minions", "The Incredibles", "Diary of a Wimpy Kid", "Honey I Shrunk the Kids", "Henny Chicken", "Lipp-Singer Football", "InNOut Burger", "Millions of Milkshakes", "Brooklyn Bagels", "Austin & Ally", "Phineas and Ferb", "Dog with a Blog", "Pinkberry", "The Daily Show", "Artkive", "FasttMath", "Crossy Road", "Flappy Bird", "PS4", "Sony Playstation", "Rachel's iPhone", "RVCA", "Resees Peanut Butter Cup", "Brutal bumpy dirt road in Mexico", "body surfing", "5 Guys Burger and Fries", "Escape from a room with a Zombie", "Water slide", "Electric Guitar", "Will the Guitar Teacher", "Ballet Shoes", "Nantucket", "Philadelphia", "Matthew is Bothering Me!!", "America's Got Talent"]
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
