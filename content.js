//Linkedin Saved Post....
let ulHeader = document.querySelector("ul.global-nav__primary-items");

let liViewPosts = document.createElement("li");
liViewPosts.classList.add("global-nav__primary-item");

let aViewPosts = document.createElement("a");

aViewPosts.setAttribute("target", "_blank");
aViewPosts.setAttribute(
  "href",
  "https://www.linkedin.com/my-items/saved-posts/"
);
aViewPosts.classList.add("app-aware-link", "global-nav__primary-link");

let divOuter = document.createElement("div");
divOuter.classList.add("ivm-image-view-model", "global-nav__icon-ivm");

let divInner = document.createElement("div");
divInner.classList.add("ivm-view-attr__img-wrapper", "display-flex");

let img = document.createElement("img");
img.setAttribute("src", chrome.runtime.getURL("assets/save.png"));
img.setAttribute("id", "imgSaved");

divInner.appendChild(img);
divOuter.appendChild(divInner);
aViewPosts.appendChild(divOuter);

let spanViewPosts = document.createElement("span");
spanViewPosts.classList.add(
  "t-12",
  "break-words",
  "block",
  "t-black--light",
  "t-normalglobal-nav__primary-link-text"
);
spanViewPosts.innerHTML = "Saved Posts";

aViewPosts.appendChild(spanViewPosts);
liViewPosts.appendChild(aViewPosts);
ulHeader.appendChild(liViewPosts);

// shortcut keys- 

// document.addEventListener("keypress", handleKbd);
// function handleKbd(event) {
//   console.log(event);
//   if (event.shiftKey && event.altKey && event.code === "O") {
//     aViewPosts.click();
//   }
// }




//create a object voice recognition
let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.lang = "en-in";
speechRecognition.start();

//onresult event
speechRecognition.onresult = (event) => {
  //transcript to store the result of speech
  let transcript = event.results[event.resultIndex][0].transcript;

  console.log(event);
  console.log(transcript);
  if (transcript.trim().toLowerCase().includes("open save post")) {
    aViewPosts.click();
  }else  if (transcript.trim().toLowerCase().includes("open activities")) {
    aMyActivity.click();
  }else  if (transcript.trim().toLowerCase().includes("open my network")) {
    aMyNetwork.click();
  }else  if (transcript.trim().toLowerCase().includes("open jobs")) {
    aMyJob.click();
  }else  if (transcript.trim().toLowerCase().includes("open chats")) {
    aMyMessaging.click();
  }else  if (transcript.trim().toLowerCase().includes("open notifications")) {
    aMyNotifications.click();
  }else  if (transcript.trim().toLowerCase().includes("open my connections")) {
    aMyConnection.click();
  }else  if (transcript.trim().toLowerCase().includes("back to feed")) {
    aHome.click();
  }else  if (transcript.trim().toLowerCase().includes("open profile")) {
    aProfile.click();
  }
};




// My activities    ..............
let aMyActivity = document.createElement("a");

aMyActivity.setAttribute("target", "_blank");
aMyActivity.setAttribute(
  "href",
  "https://www.linkedin.com/in/harshal-patil-187a87245/recent-activity/all/"
);


// My Networks    ..............
let aMyNetwork = document.createElement("a");

aMyNetwork.setAttribute("target", "_blank");
aMyNetwork.setAttribute(
  "href",
  "https://www.linkedin.com/mynetwork/grow/"
);


// My Jobs P  ..............
let aMyJob = document.createElement("a");

aMyJob.setAttribute("target", "_blank");
aMyJob.setAttribute(
  "href",
  "https://www.linkedin.com/my-items/saved-jobs/"
);

// My Messagings   ..............
let aMyMessaging = document.createElement("a");

aMyMessaging.setAttribute("target", "_blank");
aMyMessaging.setAttribute(
  "href",
  "https://www.linkedin.com/messaging/thread/2-M2M1ZTg4NmMtMzk2Mi00ZjZmLWE5YWMtMjNlMzQwZDIzOGNmXzAxMw==/"
);


// My Notifications   ..............
let aMyNotifications = document.createElement("a");

aMyNotifications.setAttribute("target", "_blank");
aMyNotifications.setAttribute(
  "href",
  "https://www.linkedin.com/notifications/?filter=all"
);


// My Connection List   ..............
let aMyConnection = document.createElement("a");

aMyConnection.setAttribute("target", "_blank");
aMyConnection.setAttribute(
  "href",
  "https://www.linkedin.com/mynetwork/invite-connect/connections/"
);



// back to Home feed   ..............
let aHome = document.createElement("a");

aHome.setAttribute("target", "_blank");
aHome.setAttribute(
  "href",
  "https://www.linkedin.com/feed/"
);


// My profile feed   ..............
let aProfile = document.createElement("a");

aProfile.setAttribute("target", "_blank");
aProfile.setAttribute(
  "href",
  "https://www.linkedin.com/in/harshal-patil-187a87245/"
);



// // Github Dashboard  ..............
// let agithub = document.createElement("a");

// agithub.setAttribute("target", "_blank");
// agithub.setAttribute(
//   "href",
//   "https://github.com/harshal0151?tab=repositories"
// );


// // Geekster Dashboard  ..............
// let aGeekPosts = document.createElement("a");

// aGeekPosts.setAttribute("target", "_blank");
// aGeekPosts.setAttribute(
//   "href",
//   "https://www.geekster.in/home/new-full-stack-web-development-program/"
// );


// //Insta profile ....

// let aGpt = document.createElement("a");

// aGpt.setAttribute("target", "_blank");
// aGpt.setAttribute(
//   "href",
//   "https://chatgpt.com/?oai-dm=1"
// );


// //Youtub profile ....

// let aYoutub = document.createElement("a");
// aYoutub.setAttribute("target", "_blank");
// aYoutub.setAttribute(
//   "href",
//   "https://www.youtube.com/"
// );

// //Gmail profile ....

// let aGmail = document.createElement("a");
// aGmail.setAttribute("target", "_blank");
// aGmail.setAttribute(
//   "href",
//   "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
// );



// //Gmail profile ....

// let aCricket = document.createElement("a");
// aCricket.setAttribute("target", "_blank");
// aCricket.setAttribute(
//   "href",
//   "https://www.google.com/search?q=cricket&sca_esv=8ffd5b3fe64f0225&sca_upv=1&rlz=1C1CHBF_enIN1028IN1028&prmd=nivsmbtz&sxsrf=ADLYWILEaVqsXCfaedgSufc8wuc5LknExg:1715604853039&source=lnms&sa=X&ved=2ahUKEwik7duO1oqGAxVNt1YBHeuXAOYQ0pQJegQIBhAC&biw=1536&bih=776&dpr=1.25"
// );












//Help btn
let body = document.querySelector("body");

let helpbtn = document.createElement("button");
helpbtn.setAttribute("id", "btnHelp");
helpbtn.addEventListener("click", doSomething);
body.appendChild(helpbtn);

// create a object voice recognition
let speechRecognition2 = new webkitSpeechRecognition();
speechRecognition2.continuous = true;
speechRecognition2.interimResults = true;
speechRecognition2.lang = "en-in";

// onresult event
let transcript = "";
speechRecognition2.onresult = function (event) {
  //   transcript to store the result of speech
  transcript = "";
  for (let i = 0; i < event.results.length; ++i) {
    transcript += event.results[i][0].transcript;
  }
};

function doSomething() {
  if (helpbtn.hasAttribute("listening") === false) {
    helpbtn.setAttribute("listening", true);
    speechRecognition2.start();
  } else {
    helpbtn.removeAttribute("listening");
    speechRecognition2.stop();
    console.log(transcript);
  }
}


