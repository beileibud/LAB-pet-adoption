const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "blue",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl:
      "https://img0.baidu.com/it/u=2195798052,353601345&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl:
      "https://img0.baidu.com/it/u=1806410389,3150448266&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
  },
  {
    id: 5,
    name: "Spooky",
    color: "blue",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
    "https://img1.baidu.com/it/u=2253107297,1511316049&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333"
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    id: 7,
    name: "Oreo",
    color: "Blue",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl:
      "https://img2.baidu.com/it/u=4161340330,2479868154&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
  },
  {
    id: 9,
    name: "Sassy",
    color: "Blue",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    id: 10,
    name: "Sammy",
    color: "blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl: "https://img2.baidu.com/it/u=2719238377,1046478758&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl:
      "https://img0.baidu.com/it/u=2120203385,3878907624&fm=253&fmt=auto&app=138&f=JPEG?w=801&h=500"
  },
  {
    id: 14,
    name: "Samantha",
    color: "blue",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl:
      "https://cf.ltkcdn.net/cats/cat-breeds/images/std-lg/322349-1200x833-blue-point-himalayan-cat.webp"
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl:
      "https://img0.baidu.com/it/u=3417896720,1339326506&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=397"
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl:
      "https://img2.baidu.com/it/u=1787162763,204721328&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=350"
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl:
      "https://img0.baidu.com/it/u=974415533,1057829347&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=472"
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/736x/02/b2/75/02b2755ae8251962626bb0c629c6ec27.jpg"
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "https://img0.baidu.com/it/u=3920208398,2946808578&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl:
      "https://img1.baidu.com/it/u=3204717301,2719628540&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500"
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl:
      "https://img0.baidu.com/it/u=3087082169,3269005890&fm=253&fmt=auto&app=138&f=JPEG?w=582&h=379"
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_0NGAfxttBDTMKcXW1Yx71NcdEXgksBnJA&usqp=CAU"
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl:
      "https://cf.ltkcdn.net/cats/cat-breeds/images/std-lg/322406-1200x833-longhair-calico-cat.webp"
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl:
      "https://img1.baidu.com/it/u=3932265644,3530081097&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400"
  }
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  console.log("divId", divId);

  selectedDiv.innerHTML = htmlToRender;
  console.log("html", htmlToRender);
};

const cardsOnDom = (pets) => {
  let domString = "";
  for (const pet of pets) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">${pet.name}</p>
      <p class="card-text">${pet.color}</p>
      <p class="card-text">${pet.specialSkill}</p>
      <button class="btn btn-secondary" id="delete--${pet.id}">Delete</button>
    </div>
    <footer>${pet.type}</footer>
  </div>`;
  }

  renderToDom("#app", domString);
};

// function to filter teammates with color
const filter = (pets, colorString) => {
  const colorArray = [];

  for (const pet of pets) {
    if (pet.type === colorString) {
      colorArray.push(pet);
    }
  }

  return colorArray;
};

const allButton = document.querySelector("#btn-all");
const catsButton = document.querySelector("#btn-cat");
const dogsButton = document.querySelector("#btn-dog");
const dinoButton = document.querySelector("#btn-dino");

allButton.addEventListener("click", () => {
  cardsOnDom(pets);
});

catsButton.addEventListener("click", () => {
  const catsButton = filter(pets, "cat");
  cardsOnDom(catsButton);
});

dogsButton.addEventListener("click", () => {
  const dogsButton = filter(pets, "dog");
  cardsOnDom(dogsButton);
});

dinoButton.addEventListener("click", () => {
  const dinoButton = filter(pets, "dino");
  cardsOnDom(dinoButton);
});

const createMember = (event) => {
  event.preventDefault();
  // grab the values from form
  const name = document.querySelector("#name");
  const image = document.querySelector("#image");
  const color = document.querySelector("#color");
  const specialSkill = document.querySelector("#specialSkill");
  const type = document.querySelector("#type");
  console.log(name);
  console.log(name.value);

  const newMember = {
    name: name.value,
    image: image.value,
    color: color.value,
    specialSkill: specialSkill.value,
    type: type.value
  };
  console.log("new member", newMember);

  // push to team array
  pets.push(newMember);

  // rerender with new team
  cardsOnDom(pets);
};

// 2. Add an event listener for the form submit and pass it the function (callback)

const submitButton = document.querySelector("#form-submit");
submitButton.addEventListener("click", createMember);

// ******************** //
// ****** DELETE ****** //
// ******************** //

// Here we will be using event bubbling
// 1. Target the app div

const appDiv = document.querySelector("#app");

// 2. Add an event listener to capture clicks

appDiv.addEventListener("click", (event) => {
  // 3. check e.target.id includes "delete"
  if (event.target.id.includes("delete")) {
    // 4. add logic to remove from array
    const [, memberId] = event.target.id.split("--");
    // what object needs to be removed and I know my memberId
    //Find where the object we want to delete is in the array
    const indexOfMember = pets.findIndex(
      (object) => object.id === Number(memberId)
    );

    // Now we can use a splice to delete the object at the index
    pets.splice(indexOfMember, 1);
  }
  // 5. Repaint the DOM with the updated array
  cardsOnDom(pets);
});

const startApp = () => {
  cardsOnDom(pets);
  // events(); // ALWAYS LAST
};

startApp();
