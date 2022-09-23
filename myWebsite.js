const btnRight = document.getElementsByClassName("buttonRight")[0];
const btnLeft = document.getElementsByClassName("buttonLeft")[0];
const btnAuto = document.getElementsByClassName("buttonPlay")[0];
const mainPicture = document.getElementsByClassName("imgMain")[0];
const spaceSmallPic = document.getElementsByClassName("smallPictures")[0];
const text = document.getElementsByTagName("p")[0];
const nameLocation = document.getElementsByTagName("span")[0];
const namePlace = document.getElementsByTagName("h3")[0];

const content = [
  {
    src: "images/Prague.PNG",
    name: "Charles Bridge",
    location: " Charles Bridge, Prague 1",
    text: "Prague is the capital and largest city in the Czech Republic and the historical capital of Bohemia. On the Vltava river, Prague is home to about 1.3 million people.The city has a temperate oceanic climate, with relatively warm summers and chilly winters.",
  },
  {
    src: "images/grebovka.PNG",
    name: "Havlíčkovy sady",
    location: " Vinohrady, Prague 2",
    text: "The park, inspired by the Italian Renaissance, offers, in addition to unique views of Prague, sitting in the charming Viniční altan wine bar in the middle of extensive vineyards or in the Pavilon Grébovka garden café with a unique replica of the original historic bowling alley from the 1970s.",
  },
  {
    src: "images/petrin.PNG",
    name: "Petřín",
    location: "Prague 5",
    text: "Petřín Lookout Tower, one of the most prominent landmarks of Prague, was built as part of the Jubilee Exhibition in 1891 as a loose copy inspired by the Eiffel Tower (at a ratio of 1:5). It is 58.70 metres high, and 299 steps lead to its peak, which is at the same altitude as the real Eiffel Tower.",
  },
  {
    src: "images/restaurant.PNG",
    name: "Marthy's Kitchen",
    location: " Francouzská 13, Prague 2",
    text: "What is guaranteed to attract you to Marthy's are quality ingredients, home procedures, cozy interior in French style, the presence of the owner and at the same time the chef Marin Petrák",
  },
  {
    src: "images/tresor.PNG",
    name: "Tresor - dancing club",
    location: " Vinohradská 25, Prague 2",
    text: "Multifunctional space in the center of Prague, which offers a lot of entertainment and also use for corporate events, parties, balls, concerts, festivals, competitions, conferences, weddings and much more.",
  },
];

// creating first main picture
mainPicture.setAttribute("src", content[0].src);
namePlace.innerText = content[0].name;
nameLocation.innerText = content[0].location;
text.innerText = content[0].text;

let listImages = [];
let index = 0;

// creating little pictures on the left side
for (let i = 0; i < content.length; i++) {
  let image = document.createElement("img");
  let div = document.createElement("div");
  spaceSmallPic.appendChild(div.appendChild(image));
  image.setAttribute("class", "smallPic");
  image.setAttribute("src", content[i].src);
  listImages.push(image);

  // showing picture after clicking
  image.onclick = () => {
    showPicture(i);
  };
}

// FUNCTION - to print the main picture
function showPicture(index) {
  mainPicture.setAttribute("src", content[index].src);
  let urlPicture = mainPicture.getAttribute("src");
  makeBorder(urlPicture);
  namePlace.innerText = content[index].name;
  nameLocation.innerText = content[index].location;
  text.innerText = content[index].text;
}

// FUNCTION - creating significant border
function makeBorder(urlPicture) {
  content.forEach((picture, index) => {
    if (picture.src == urlPicture) {
      listImages[index].setAttribute("class", "smallPic_withBorder");
    } else {
      listImages[index].setAttribute("class", "smallPic");
    }
  });
}

// button RIGHT
btnRight.onclick = () => {
  showPicture(index);

  if (index == content.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  console.log(index);
};

// button LEFT
btnLeft.onclick = () => {
  showPicture(index);

  if (index == 0) {
    index = content.length - 1;
  } else {
    index -= 1;
  }
  console.log(index);
};

// button PLAY
btnAuto.onclick = () => {
  let interval = setInterval(() => {
    showPicture(index);
    index++;

    if (index == content.length) {
      index = 0;
      clearInterval(interval);
    }
  }, 1000);
};
