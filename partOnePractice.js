// TRY IT! Create single structures from the structures below using the spread operator.

let planetsA = ["Earth", "Lamentis", "Vormir"];
let planetsB = ["Xandar", "Titan"]

// TODO: Use the spread operator to create and print a single array with all five planets.

let allPlanets = [
    ...planetsA,
   ...planetsB,
 ]
 
 console.log("All Planets :");
 console.log(allPlanets);
 
 //
 
 let laufey = {
     race: "Frost Giant",
     planet: "Jotunheim",
     position: "king",
 }
 
 // TODO: Use the spread operator to create a new object that contains the info from laufey but also contains the key/value pair, son: "Loki"
 
 let characterInfo = {
    ...laufey,
    son: "Loki"
 }
 
 console.log(characterInfo);
 
 /** DESTRUCTURING **/
 
 // For both arrays and objects, you can pull values out and assign them to individual variable names pretty easily with destructuring.
 
 // EXAMPLE: Let's say you have multiple elements in an array
 let names = ["Loki Laufeyson", "Sylvie Laufeydottir"];
 
 // Here's how you give each element its own variable
 let [ loki, sylvie ] = names;
 
 console.log(loki);
 console.log(sylvie);
 
 // EXAMPLE: This time we'll do it with an object
 let mobius = {
     fullName: "Mobius Mobius Mobius",
     employer: "TVA",
     unfulfilledDream: "jet ski",
 }
 
 // Now you can access each property with variables
 let { fullName, employer, unfulfilledDream } = mobius;
 
 console.log(fullName);
 console.log(employer);
 console.log(unfulfilledDream);
 
 // You can also skip some of the elements or properties if you want. Note that with arrays you must use extra commas to represent the skipped items, but that's not necessary with objects.
 let hunters = ["B-15", "C-20", "U-92"];
 
 let [ b15, , u92 ] = hunters;
 
 console.log(b15);
 console.log(u92);
 
 let setting = {
     location: "Roxxcart",
     year: "2050",
     event: "storm",
 }
 
 let { location, event } = setting;
 
 console.log(location);
 console.log(event);
 
 // TRY IT! Use destructuring to assign elements or properties to individual variable names.
 
let bands = ["The Black Keys", "The Flaming Lips", "Rainbow Kitten Surprise"];

let album = {
    name: "At War with the Mystics",
    released: 2006,
    band: "The Flaming Lips",
}

let { name, band } = album;

console.log(name);
console.log(band);

 // TODO: Create variables called company and adjective and then print the sentence "(company) is just plain (adjective)." using the two variables.
 let info = ["Roxxcon", "evil"];

 let [ company, adjective ] = info;

 console.log(`${company} is just plain ${adjective}`);


 
 
 // TODO: Create variables called hunterB15, throg, and classicLoki and then print each on separate lines. 
 let actors = {
     loki: "Tom Hiddleston",
     sylvie: "Sophia Di Marino",
     throg: "Chris Hemsworth",
     classicLoki: "Richard E. Grant",
     presidentLoki: "Tom Hiddleston",
     mobius: "Owen Wilson",
     hunterB15: "Wunmi Mosaku",
 };


 let { hunterB15, throg, classicLoki } = actors;

 console.log(hunterB15);
 console.log(throg);
 console.log(classicLoki);