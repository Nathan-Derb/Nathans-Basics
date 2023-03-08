const citizens = [
  "Ryan",
  "Kolton",
  "Kody",
  "John",
  "Jacob",
  "Jingleheimer",
  "Schmidt",
]; // Add more names to grow Loop City!

/////////////////////// DON'T ALTER THIS CODE //////////////////////////
const populationCount = document.getElementById("populationCount");
const citizenList = document.getElementById("citizenList");
const addCitizenBtn = document.getElementById("addCitizenBtn");
populationCount.innerText = citizens.length;
////////////////////////////////////////////////////////////////////////

// HINT!!! Looks like the way to get the amount of names is citizens.length
// Maybe that could be used in our loop.....just a thought

/*
  CODE TO PUT INSIDE OF LOOP BLOCK

  const listElement = document.createElement('li');
  listElement.innerText = citizens[i];
  citizenList.appendChild(listElement);
*/

/////////////////////// WRITE YOUR CODE HERE /////////////////////////
let list = document.getElementById("citizenList");
citizens.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  citizenList.appendChild(li);
});

//////////////////////////////////////////////////////////////////////
