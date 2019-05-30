let temp = 70;

// Logical And Operator - True if both sides are True.
// False otherwise

if (temp >= 60 && temp <= 90) {
  console.log("It is pretty nice outside");
} else if (temp <= 0 || temp >= 120) {
  console.log("Do not go outside");
} else {
  console.log("Eh. Do whatever you want");
}

// Logical Or Operator - True if one of the sides is true
// false only then everything is false

// Challenge area

let OneVegan = true;
let SecondVegan = false;

// Are both vegan? only offer up vegan dishes
// At least one vegan? Make sure to offre up some vegan options
// Else, Offer up anything on the menue

if (OneVegan && SecondVegan) {
  console.log("Vegan dishes only");
} else if (OneVegan || SecondVegan) {
  console.log("Both vegan and non-vegan food");
} else {
  console.log("Offer up anything from the menu");
}
