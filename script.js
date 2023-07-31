const textAnim = document.getElementById("textAnim");
let array = [
  "a Sound Designer",
  "a cinematographer",
  "creative",
  "dynamic",
  "enthusiast",
  "a cinephile",
  "a video games lover",
  "a musician",
  "a technician",
];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  textAnim.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2400);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2400);
    }
  }, 55);
};
loop();

const unmute = () => {
  mute.innerHTML = '<i class="fa-solid fa-volume-high fa-lg"></i>';
};
const muted = () => {
  mute.innerHTML = '<i class="fa-solid fa-volume-xmark fa-lg"></i>';
};

let muteState = true;
const muteVideo = () => {
  if (muteState === true) {
    unmute();
    muteState = false;
    introVideo.muted = false;
  } else {
    muted();
    muteState = true;
    introVideo.muted = true;
  }
};
// mute.addEventListener("click", () => {
//   if (muteState === true) {
//     unmute();
//     muteState = false;
//     introVideo.muted = false;
//   } else {
//     muted();
//     muteState = true;
//     introVideo.muted = true;
//   }
// });

//===============================//

// NAVIGATION 1

const workAccess = document.body.querySelector(".workAccess");
const aboutAccess = document.body.querySelector(".aboutAccess");
const cinemaAccess = document.body.querySelector(".cinemaAccess");
const wallAccess = document.body.querySelector(".wallAccess");

const workCall = () => {
  afterWork.style.background = "rgb(142, 231, 142)";
  afterAbout.style.background = "transparent";
  afterCinema.style.background = "transparent";
  afterWall.style.background = "transparent";
};
// workAccess.addEventListener("click", () => {
//   afterWork.style.background = "rgb(142, 231, 142)";
//   afterAbout.style.background = "transparent";
//   afterCinema.style.background = "transparent";
//   afterWall.style.background = "transparent";
// });

const aboutCall = () => {
  afterWork.style.background = "transparent";
  afterAbout.style.background = "rgb(142, 231, 142)";
  afterCinema.style.background = "transparent";
  afterWall.style.background = "transparent";
};

const cinemaCall = () => {
  afterWork.style.background = "transparent";
  afterAbout.style.background = "transparent";
  afterCinema.style.background = "rgb(142, 231, 142)";
  afterWall.style.background = "transparent";
};

const wallCall = () => {
  afterWork.style.background = "transparent";
  afterAbout.style.background = "transparent";
  afterCinema.style.background = "transparent";
  afterWall.style.background = "rgb(142, 231, 142)";
};

// NAVIGATION 2

const featuresPage = document.body.querySelector(".features");
const documentaryPage = document.body.querySelector(".documentary");
const andMorePage = document.body.querySelector(".andMore");

const featuresCall = () => {
  document.body.querySelector(".features").style.visibility = "visible";
  document.body.querySelector(".documentary").style.visibility = "hidden";
  document.body.querySelector(".andMore").style.visibility = "hidden";
  afterFeatures.style.background = "rgb(142, 231, 142)";
  afterDocumentary.style.background = "transparent";
  afterMore.style.background = "transparent";
};
// featuresAccess.addEventListener("click", () => {
//   featuresPage.style.visibility = "visible";
//   documentaryPage.style.visibility = "hidden";
//   andMorePage.style.visibility = "hidden";
//   afterFeatures.style.background = "rgb(142, 231, 142)";
//   afterDocumentary.style.background = "transparent";
//   afterMore.style.background = "transparent";
// });

const documentaryCall = () => {
  document.body.querySelector(".features").style.visibility = "hidden";
  document.body.querySelector(".documentary").style.visibility = "visible";
  document.body.querySelector(".andMore").style.visibility = "hidden";
  afterFeatures.style.background = "transparent";
  afterDocumentary.style.background = "rgb(142, 231, 142)";
  afterMore.style.background = "transparent";
};

const moreCall = () => {
  document.body.querySelector(".features").style.visibility = "hidden";
  document.body.querySelector(".documentary").style.visibility = "hidden";
  document.body.querySelector(".andMore").style.visibility = "visible";
  afterFeatures.style.background = "transparent";
  afterDocumentary.style.background = "transparent";
  afterMore.style.background = "rgb(142, 231, 142)";
};

//

//==================================//

// ----------- TRAILERS ----------- //

// 0 - Variables

const survivorsVideo =
  "https://res.cloudinary.com/dnxl4odrm/video/upload/v1690842712/SOundDesigner/Video/Survivants_Trailer_vaqaui.mp4";

const teddyVideo =
  "https://res.cloudinary.com/dnxl4odrm/video/upload/v1690842720/SOundDesigner/Video/Teddy_Trailer_eplctm.mp4";

const juniorsVideo =
  "https://res.cloudinary.com/dnxl4odrm/video/upload/v1690842721/SOundDesigner/Video/Junior_Trailer_iqls2t.mp4";

const sharkVideo =
  "https://res.cloudinary.com/dnxl4odrm/video/upload/v1690842717/SOundDesigner/Video/ADR_Trailer_vx2rl5.mp4";

const brotherVideo =
  "https://res.cloudinary.com/dnxl4odrm/video/upload/v1690842717/SOundDesigner/Video/Mon_fr%C3%A8re_trailer_oaha40.mp4";

const micVideo =
  "https://res.cloudinary.com/dnxl4odrm/video/upload/v1690842721/SOundDesigner/Video/Made_In_China_Trailer_nh5zj8.mp4";

const raisingVideo =
  "https://res.cloudinary.com/dnxl4odrm/video/upload/v1690842716/SOundDesigner/Video/Raising_Trailer_u9ghlu.mp4";

const nekfeuVideo =
  "https://res.cloudinary.com/dnxl4odrm/video/upload/v1690842708/SOundDesigner/Video/Nekfeu_Trailer_jytyan.mp4";

const maronaVideo =
  "https://res.cloudinary.com/dnxl4odrm/video/upload/v1690842720/SOundDesigner/Video/Marona_trailer_k261hc.mp4";

const tankVideo =
  "https://res.cloudinary.com/dnxl4odrm/video/upload/v1690842728/SOundDesigner/Video/TANK2_trailer_epy5u4.mp4";

const theWayVideo =
  "https://res.cloudinary.com/dnxl4odrm/video/upload/v1690842713/SOundDesigner/Video/TheWay_Trailer_vymoua.mp4";

const novarosaVideo =
  "https://res.cloudinary.com/dnxl4odrm/video/upload/v1690842726/SOundDesigner/Video/Pub_Novarosa_AdobeExpress_k8rthe.mp4";

//

// 1 - Trailer for FEATURES

const allTrailers = () => {
  survivorsTrailer();
  juniorsTrailer();
  brotherTrailer();
  teddyTrailer();
  micTrailer();
  sharkTrailer();
  nekfeuTrailer();
  raisingTrailer();
  maronaTrailer();
  tankTrailer();
  theWayTrailer();
  novarosaTrailer();
};

const survivorsTrailer = () => {
  survivors.addEventListener("click", () => {
    workContainer.innerHTML += `<div id="featureVideo">
  <video src=${survivorsVideo} controls autoplay type="video.mp4"></video>
  <button id="featureVideoButton" > <i class="fa-regular fa-circle-xmark"></i></button>
  </div>`;
    featureVideoButton.addEventListener("click", () => {
      featureVideo.remove();
      allTrailers();
    });
  });
};
survivorsTrailer();
// Pour que la video puisse être rejouée au click après l'avoir fermée en appuyant sur la croix, ce qui déclenche le remove(), il faut ensuite la rappeler, pour réactiver la fonction qui permettra de déclencher la vidéo au click.

const juniorsTrailer = () => {
  juniors.addEventListener("click", () => {
    workContainer.innerHTML += `<div id="featureVideo">
  <video src=${juniorsVideo} controls autoplay type="video.mp4"></video>
  <button id="featureVideoButton" > <i class="fa-regular fa-circle-xmark"></i></button>
  </div>`;
    featureVideoButton.addEventListener("click", () => {
      featureVideo.remove();
      allTrailers();
    });
  });
};
juniorsTrailer();

const brotherTrailer = () => {
  brother.addEventListener("click", () => {
    workContainer.innerHTML += `<div id="featureVideo">
  <video src=${brotherVideo} controls autoplay type="video.mp4"></video>
  <button id="featureVideoButton" > <i class="fa-regular fa-circle-xmark"></i></button>
  </div>`;
    featureVideoButton.addEventListener("click", () => {
      featureVideo.remove();
      allTrailers();
    });
  });
};
brotherTrailer();

const teddyTrailer = () => {
  teddy.addEventListener("click", () => {
    workContainer.innerHTML += `<div id="featureVideo">
  <video src=${teddyVideo} controls autoplay type="video.mp4"></video>
  <button id="featureVideoButton" > <i class="fa-regular fa-circle-xmark"></i></button>
  </div>`;
    featureVideoButton.addEventListener("click", () => {
      featureVideo.remove();
      allTrailers();
    });
  });
};
teddyTrailer();

const micTrailer = () => {
  mic.addEventListener("click", () => {
    workContainer.innerHTML += `<div id="featureVideo">
  <video src=${micVideo} controls autoplay type="video.mp4"></video>
  <button id="featureVideoButton" > <i class="fa-regular fa-circle-xmark"></i></button>
  </div>`;
    featureVideoButton.addEventListener("click", () => {
      featureVideo.remove();
      allTrailers();
    });
  });
};
micTrailer();

const sharkTrailer = () => {
  shark.addEventListener("click", () => {
    workContainer.innerHTML += `<div id="featureVideo">
  <video src=${sharkVideo} controls autoplay type="video.mp4"></video>
  <button id="featureVideoButton" > <i class="fa-regular fa-circle-xmark"></i></button>
  </div>`;
    featureVideoButton.addEventListener("click", () => {
      featureVideo.remove();
      allTrailers();
    });
  });
};
sharkTrailer();

// 2 - Trailers for Documentary
const nekfeuTrailer = () => {
  nekfeu.addEventListener("click", () => {
    workContainer.innerHTML += `<div id="featureVideo">
  <video src=${nekfeuVideo} controls autoplay type="video.mp4"></video>
  <button id="featureVideoButton" > <i class="fa-regular fa-circle-xmark"></i></button>
  </div>`;
    featureVideoButton.addEventListener("click", () => {
      featureVideo.remove();
      allTrailers();
    });
  });
};
nekfeuTrailer();

const raisingTrailer = () => {
  raising.addEventListener("click", () => {
    workContainer.innerHTML += `<div id="featureVideo">
  <video src=${raisingVideo} controls autoplay type="video.mp4"></video>
  <button id="featureVideoButton" > <i class="fa-regular fa-circle-xmark"></i></button>
  </div>`;
    featureVideoButton.addEventListener("click", () => {
      featureVideo.remove();
      allTrailers();
    });
  });
};
raisingTrailer();

// 3 - Trailers for More

const maronaTrailer = () => {
  marona.addEventListener("click", () => {
    workContainer.innerHTML += `<div id="featureVideo">
  <video src=${maronaVideo} controls autoplay type="video.mp4"></video>
  <button id="featureVideoButton" > <i class="fa-regular fa-circle-xmark"></i></button>
  </div>`;
    featureVideoButton.addEventListener("click", () => {
      featureVideo.remove();
      allTrailers();
    });
  });
};
maronaTrailer();

const tankTrailer = () => {
  tank.addEventListener("click", () => {
    workContainer.innerHTML += `<div id="featureVideo">
  <video src=${tankVideo} controls autoplay type="video.mp4"></video>
  <button id="featureVideoButton" > <i class="fa-regular fa-circle-xmark"></i></button>
  </div>`;
    featureVideoButton.addEventListener("click", () => {
      featureVideo.remove();
      allTrailers();
    });
  });
};
tankTrailer();

const theWayTrailer = () => {
  theWay.addEventListener("click", () => {
    workContainer.innerHTML += `<div id="featureVideo">
  <video src=${theWayVideo} controls autoplay type="video.mp4"></video>
  <button id="featureVideoButton" > <i class="fa-regular fa-circle-xmark"></i></button>
  </div>`;
    featureVideoButton.addEventListener("click", () => {
      featureVideo.remove();
      allTrailers();
    });
  });
};
theWayTrailer();

const novarosaTrailer = () => {
  novarosa.addEventListener("click", () => {
    workContainer.innerHTML += `<div id="featureVideo">
  <video src=${novarosaVideo} controls autoplay type="video.mp4"></video>
  <button id="featureVideoButton" > <i class="fa-regular fa-circle-xmark"></i></button>
  </div>`;
    featureVideoButton.addEventListener("click", () => {
      featureVideo.remove();
      allTrailers();
    });
  });
};
novarosaTrailer();
