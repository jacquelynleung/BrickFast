function getIngredients(){
    var num = document.getElementById("ingredients");
    var myArray = [
        "Apples",
        "Bananas",
        "Pears",
        "Pinneapple",
        "Milk",
        "Rice",
        "Pomegranite",
        "Chicken",
        "Steak",
        "Cheddar Cheese"
    ];
    // Shuffle array
    const shuffled = myArray.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, num.parseInt());

    var i;
    var text;
    for(i=0; i < selected.length; i++){
        text += selected[i] + "<br>";
    }
    document.write(text);

}

function buttonFun() {
    var text = document.getElementById("text")
    var butt = document.getElementById("butt");
    var displaySetting = text.style.display;
    
    if(displaySetting == 'block'){
        //text visible, hide it
        text.style.display = 'none';
        //change button text
        butt.innerHTML = "More...";
    } else {
        //text hidden, show it
        text.style.display = 'block';
        //change button text
        butt.innerHTML = "Less"
    }
    
}
