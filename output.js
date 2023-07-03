var temp= 'hi';
function display(){
    console.log(temp);
    var temp = 'bye';
};
display();
// This means that even though the variable temp is declared at the beginning of the display() function, its initialization with the value 'bye' is not hoisted .