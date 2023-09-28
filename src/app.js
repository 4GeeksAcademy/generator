window.onload = () => {
  document.querySelector("#ursulo").addEventListener("click", () => {
    document.querySelector("#Excuse").innerHTML = excuseGenerator();
  });
};

function excuseGenerator() {
  let pronoun = ["the dog", "the cat", "the frog", "the turtle", "the rabbit"];
  let verb = ["ate", "destroyed", "played", "slept", "drank"];
  let object = [
    "in the bed",
    "in the house",
    "in the basement",
    "in the living room",
    "in the cage"
  ];
  let place = [
    "in the park",
    "at the school",
    "at 4 geeks",
    "my bedroom",
    "in the ground"
  ];
  let time = [
    "yesterday",
    "in the morning",
    "two hours ago",
    "coming to class",
    "on monday"
  ];

  const pronounIndex = Math.floor(Math.random() * pronoun.length);
  const verbIndex = Math.floor(Math.random() * verb.length);
  const objectIndex = Math.floor(Math.random() * object.length);
  const placeIndex = Math.floor(Math.random() * place.length);
  const timeIndex = Math.floor(Math.random() * time.length);

  return `${pronoun[pronounIndex]} ${verb[verbIndex]} ${object[objectIndex]} ${place[placeIndex]} ${time[timeIndex]} .`;
}
