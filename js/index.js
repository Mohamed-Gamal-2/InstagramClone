"use strict";
//Array of obj for stories
"D:\Projects\Instagram Clone\images\Stories\Story11.jpg";
let stories = [
  {
    storyID: "storyID0",
    images: ["./images/Stories/Story1.jpg", "./images/Stories/Story2.jpg"],
  },

  {
    storyID: "storyID1",
    images: ["./images/Stories/Story3.jpg", "./images/Stories/Story4.jpg"],
  },

  {
    storyID: "storyID2",
    images: ["./images/Stories/Story5.jpg", "./images/Stories/Story6.jpg"],
  },

  {
    storyID: "storyID3",
    images: ["./images/Stories/Story7.jpg", "./images/Stories/Story8.jpg"],
  },
  {
    storyID: "storyID4",
    images: ["./images/Stories/Story9.jpg", "./images/Stories/Story10.jpg"],
  },
  {
    storyID: "storyID5",
    images: ["./images/Stories/Story11.jpg", "./images/Stories/Story12.jpg"],
  },
  {
    storyID: "storyID6",
    images: ["./images/Stories/Story11.jpg", "./images/Stories/Story12.jpg"],
  },
  {
    storyID: "storyID7",
    images: ["./images/Stories/Story13.jpg", "./images/Stories/Story14.jpg"],
  },
  {
    storyID: "storyID8",
    images: ["./images/Stories/Story15.jpg", "./images/Stories/Story16.jpg"],
  },
  {
    storyID: "storyID9",
    images: ["./images/Stories/Story17.jpg", "./images/Stories/Story18.jpg"],
  },
];
//Random Code Generator
function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
//fetching data (posts) and appending it to the body
async function getPosts() {
  fetch("https://dummyapi.io/data/v1/post?limit=20", {
    method: "GET",
    headers: {
      "app-id": "64df978ba1af5f804d833ab9",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let returnedData = data.data;
      for (let i = 0; i < data.data.length; i++) {
        document.getElementById("postsContiner").innerHTML += `
            <div class="post my-5">
                <div class = "relativeToBe">
                    <img src='${data.data[i].owner.picture}' class="userPhoto "><span class = "userInfoToPopOver">
                        ${data.data[i].owner.firstName}_${data.data[i].owner.lastName}
                        <div class="d-none userPopOver">
                        <div class="d-block ">
                            <img src='${data.data[i].owner.picture}' class="userPhoto m-3"><span>${data.data[i].owner.firstName}_${data.data[i].owner.lastName}</span>
                        </div>
                        <div class="d-flex flex-row flex-nowrap justify-content-evenly fw-bold">
                            <div>Posts</div>
                            <div>Follower</div>
                            <div>Following</div>
                        </div>
                    </div>
                    </span>
                </div>
                <div>
                    <div>
                    <img src='${data.data[i].image}' class="postPhoto mt-3">
                    </div>
                    <div class="d-flex justify-content-between downthePostImg">
                        <div class="mt-3">
                            <i class="fa-regular fa-heart fa-2x me-2 dark-fa id${data.data[i].id}" style="color: #000000;"></i>
                            <i class="fa-regular fa-comment dark-fa  fa-2x me-2 idciid${data.data[i].id}" style="color: #000000;"></i>
                            <i class="fa-solid fa-share dark-fa fa-2x" style="color: #000000;"></i>
                        </div>
                        <div class="mt-3 bookMark">
                            <i class="fa-regular fa-bookmark dark-fa fa-2x   id${data.data[i].id}" style="color: #000000;"></i>    
                        </div>
                    </div>
                    <div class="mt-2 " id= "likesCount${data.data[i].id}">
                        ${data.data[i].likes} likes
                    </div>
                    <div class="mt-2 relativeToBe">
                        <span class="userNameInCap userInfoToPopOver">
                            ${data.data[i].owner.firstName}_${data.data[i].owner.lastName}
                            <div class="d-none userPopOver">
                            <div class="d-block ">
                                <img src='${data.data[i].owner.picture}' class="userPhoto m-3"><span>${data.data[i].owner.firstName}_${data.data[i].owner.lastName}</span>
                            </div>
                            <div class="d-flex flex-row flex-nowrap justify-content-evenly fw-bold ">
                                <div>Posts</div>
                                <div>Follower</div>
                                <div>Following</div>
                            </div>
                        </div>
                        </span>
                        <span>${data.data[i].text}</span>
                    </div>
                    <div class="viewCom mt-2 idciid${data.data[i].id}">
                        View all <span id="allComment${data.data[i].id}">0</span> comments
                    </div>
                    <div class="mt-2 newCommentDiv ">
                        <input type="text" name="newComment" class="newComment" placeholder="Add a Comment..." id="inputNewComment${data.data[i].id}">
                        <button class="postCommentBttn d-none postCommentBtn${data.data[i].id}" id="postCommentBtn${data.data[i].id}">
                          post
                        </button>
                    </div>
                </div>
            </div>
            <div  class = "d-none CommentsPopUp idComm${data.data[i].id}" id = "idciid${data.data[i].id}">
              <div style="top:15px;right:15px" class="position-absolute closeBtnForCommentsPop"  >
              <button type="button" class="btn-close"></button>
              </div>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-column justify-content-center">
                  <img src='${data.data[i].image}' class="commentPhoto my-3">
                </div>
                <div class="d-flex flex-column w-50">
                  <div class="mb-2">
                    comments
                    <hr>
                  </div>
                  <div class="addComment${data.data[i].id} mt-1" id="addComment${data.data[i].id}">
                  </div>
                </div>
              </div>
            </div>
            `;
      }
      for (let i = 0; i < 4; i++) {
        document.getElementById("addContainer").innerHTML += `
                <div class="d-flex justify-content-between mt-3">
                    <div class = "relativeToBe">
                        <img src='${data.data[i].owner.picture}' class="userPhoto "><span class="userInfoToPopOver">
                            ${data.data[i].owner.firstName}_${data.data[i].owner.lastName}
                            <div class="d-none userPopOver">
                                <div class="d-block">
                                    <img src='${data.data[i].owner.picture}' class="userPhoto m-3"><span>${data.data[i].owner.firstName}_${data.data[i].owner.lastName}</span>
                                </div>
                                <div class="d-flex flex-row flex-nowrap justify-content-evenly fw-bold ">
                                    <div>Posts</div>
                                    <div>Follower</div>
                                    <div>Following</div>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div>
                        <button class="followBtn">Follow</button>
                    </div>
                </div>    `;
      }

      //stories
      for (let i = 0; i < 10; i++) {
        document.getElementById("storiesContainer").innerHTML += `
        <div class="d-inline storyID " id="storyID${i}"><img src='${data.data[i].owner.picture}' class="userPhotoBoarder indvstory"></div>`;
      }
      //open stories
      $(".storyID").click(function () {
        $(this).children("img").removeClass("userPhotoBoarder");
        $(this).children("img").addClass("userPhotoBoarderOpened");
        for (let i = 0; i < stories.length; i++) {
          if (stories[i].storyID == this.id) {
            document.getElementById("userStoryPop").innerHTML = `
            <img src='${data.data[i].owner.picture}' class="userPhoto "><span class="userInfoToPopOver" style="color:white">
            ${data.data[i].owner.firstName}_${data.data[i].owner.lastName}`;
            document
              .getElementById("storiesPopContainer")
              .classList.add("d-flex");
            document
              .getElementById("storiesPopContainer")
              .classList.remove("d-none");
            document
              .getElementById("storyIDImg")
              .setAttribute("src", stories[i].images[0]);
            setTimeout(function () {
              document
                .getElementById("storyIDImg")
                .setAttribute("src", stories[i].images[1]);
            }, 5000);
          }
        }
      });

      for (let i = 0; i < data.data.length; i++) {
        document.getElementById("seeAllPopup").innerHTML += `
                    <div class="w-50 d-flex justify-content-between mt-3 mx-auto">
                        <div class = "relativeToBe">
                            <img src='${data.data[i].owner.picture}' class="userPhoto">
                            <span class="userInfoToPopOver">
                                ${data.data[i].owner.firstName}_${data.data[i].owner.lastName}
                                <div class="d-none userPopOver">
                                <div class="d-block">
                                    <img src='${data.data[i].owner.picture}' class="userPhoto m-3"><span>${data.data[i].owner.firstName}_${data.data[i].owner.lastName}</span>
                                </div>
                                <div class="d-flex flex-row flex-nowrap justify-content-evenly fw-bold ">
                                    <div>Posts</div>
                                    <div>Follower</div>
                                    <div>Following</div>
                                </div>
                            </div>
                            </span>
                        </div>
                        <div>
                            <button class="popUpfollowBtn">Follow</button>
                        </div>
                    </div> `;
      }
      //jQuery (action on click) like
      $(".post .fa-heart").click(function () {
        let classArr = $(this).attr("class").split(/\s+/);
        let postID = classArr.find((item) => /^id/.test(item));
        let objectfinal = returnedData.find(
          (item) => item.id == postID.slice(2)
        );
        if ($(this).hasClass("fa-regular")) {
          $(this).addClass("fa-solid");
          $(this).removeClass("fa-regular");
          $(this).attr("style", "color: red");
          objectfinal.likes += 1;
          document.getElementById("likesCount" + postID.slice(2)).innerHTML =
            objectfinal.likes + " likes";
        } else {
          $(this).addClass("fa-regular");
          $(this).removeClass("fa-solid");
          $(this).attr("style", "color: black");
          objectfinal.likes -= 1;
          document.getElementById("likesCount" + postID.slice(2)).innerHTML =
            objectfinal.likes + " likes";
        }
      });

      $(".postPhoto").dblclick(function () {
        let currPic = $(this)
          .parent()
          .siblings("div")
          .children("div")
          .children("i")
          .first();
        let classArr = $(currPic).attr("class").split(/\s+/);
        let postID = classArr.find((item) => /^id/.test(item));
        let objectfinal = returnedData.find(
          (item) => item.id == postID.slice(2)
        );
        if ($(currPic).hasClass("fa-regular")) {
          $(currPic).addClass("fa-solid");
          $(currPic).removeClass("fa-regular");
          $(currPic).attr("style", "color: red");
          objectfinal.likes += 1;
          document.getElementById("likesCount" + postID.slice(2)).innerHTML =
            objectfinal.likes + " likes";
        } else {
          $(currPic).addClass("fa-regular");
          $(currPic).removeClass("fa-solid");
          $(currPic).attr("style", "color: black");
          objectfinal.likes -= 1;
          document.getElementById("likesCount" + postID.slice(2)).innerHTML =
            objectfinal.likes + " likes";
        }
      });

      //see all suggestion Pop Up
      document
        .getElementById("seeAllBtn")
        .addEventListener("click", function () {
          document.getElementById("seeAllPopup").classList.add("d-md-block");
          document.getElementById("postsContiner").classList.add("d-none");
        });

      //jQuery (action on hover)
      $(".post .fa-heart").hover(
        function () {
          if ($(this).hasClass("fa-regular"))
            $(this).attr("style", "color: #737373");
        },
        function () {
          if ($(this).hasClass("fa-regular"))
            $(this).attr("style", "color: black");
        }
      );
      //comments
      $(".post .fa-comment").hover(
        function () {
          $(this).attr("style", "color: #737373");
        },
        function () {
          $(this).attr("style", "color: black");
        }
      );
      $(".post .fa-comment").click(function () {
        let classArr = $(this).attr("class").split(/\s+/);
        let postID = classArr.find((item) => /^idciid/.test(item));
        if ($(`#${postID}`).hasClass("d-sm-flex")) {
          document.getElementById(postID).classList.remove("d-sm-flex");
        } else {
          document.getElementById(postID).classList.add("d-sm-flex");
        }
      });
      $(".viewCom").click(function () {
        let classArr = $(this).attr("class").split(/\s+/);
        let postID = classArr.find((item) => /^idciid/.test(item));
        if ($(`#${postID}`).hasClass("d-sm-flex")) {
          document.getElementById(postID).classList.remove("d-sm-flex");
        } else {
          document.getElementById(postID).classList.add("d-sm-flex");
        }
      });
      $(".closeBtnForCommentsPop").click(function () {
        this.parentNode.classList.remove("d-sm-flex");
      });

      //adding new Comment (show and hide post botton)
      $(".newComment").keyup(function () {
        if ($(this).val() != "") {
          $(this).siblings(".d-none").addClass("d-sm-block");
          $(this).parent().addClass("position-relative");
        } else {
          $(this).siblings(".d-none").removeClass("d-sm-block");
          $(this).parent().removeClass("position-relative");
        }
      });
      $(".postCommentBttn").click(function () {
        let classArr = $(this).attr("class").split(/\s+/);
        let postID = classArr.find((item) => /^postCommentBtn/.test(item));
        let objectfinal = returnedData.find(
          (item) => item.id == postID.slice(14)
        );
        document.getElementById(`allComment${objectfinal.id}`).innerHTML =
          +document.getElementById(`allComment${objectfinal.id}`).innerHTML + 1;
        let inputVal = document.getElementById(
          `inputNewComment${objectfinal.id}`
        ).value;
        let parent = document.getElementById(`addComment${objectfinal.id}`);
        let LoggedInUser = localStorage.getItem("LoggedInUser");
        parent.innerHTML += `<div class="my-2">
                              <div>
                                <img src="images/Userimage.jpg" class="commentPopUpPhoto"><span>${LoggedInUser}</span>
                              </div>
                              <div style="margin-left:45px">
                                ${inputVal}
                                <hr>
                              </div>
                          </div>`;
        document.getElementById(`inputNewComment${objectfinal.id}`).value = "";
        $(`#inputNewComment${objectfinal.id}`)
          .siblings(".d-none")
          .removeClass("d-sm-block");
      });

      //share
      $(".post .fa-share").hover(
        function () {
          $(this).attr("style", "color: #737373");
        },
        function () {
          $(this).attr("style", "color: black");
        }
      );
      $(".post .fa-bookmark").hover(
        function () {
          if ($(this).hasClass("fa-regular"))
            $(this).attr("style", "color: #737373");
        },
        function () {
          if ($(this).hasClass("fa-regular"))
            $(this).attr("style", "color: black");
        }
      );

      //save and unsave items
      $(".post .fa-bookmark").click(function () {
        let classArr = $(this).attr("class").split(/\s+/);
        let postID = classArr.find((item) => /^id/.test(item));
        let objectfinal = returnedData.find(
          (item) => item.id == postID.slice(2)
        );
        if ($(this).hasClass("fa-regular")) {
          $(this).addClass("fa-solid");
          $(this).removeClass("fa-regular");
          $(this).attr("style", "color: black");
          document.getElementById("savedItems").innerHTML += `
          <div id="idsi${objectfinal.id}">
            <div>
              <img src='${objectfinal.image}' class="savedItemPhoto mt-3">
            </div>
            <div>
            <img src='${objectfinal.owner.picture}' class="userPhoto "><span>
                ${objectfinal.owner.firstName}_${objectfinal.owner.lastName}
                <div class="d-none userPopOver">
                    <div class="d-block">
                        <img src='${objectfinal.owner.picture}' class="userPhoto m-3"><span>${objectfinal.owner.firstName}_${objectfinal.owner.lastName}</span>
                    </div>
                </div>
            </span>
        </div>
        </div>
          `;
        } else {
          $(this).addClass("fa-regular");
          $(this).removeClass("fa-solid");
          $(this).attr("style", "color: black");
          document.getElementById(`idsi${objectfinal.id}`).remove();
        }
      });

      //pop over with user info
      $(".userInfoToPopOver").hover(
        function () {
          $(this).find(".userPopOver").addClass("d-md-block");
          $(this).parent(".relativeToBe").addClass("position-relative");
        },
        function () {
          $(".userPopOver").removeClass("d-md-block");
          $(".relativeToBe").removeClass("position-relative");
        }
      );
      //Search lg and md screens (clear Search)
      $("#clearLgScreenSearch").click(function () {
        document.getElementById("lgScreenSearch").value = "";
        document.getElementById("searchingResult").innerHTML = "";
      });
      //Search sm screens (clear Search)
      $("#clearsmScreenSearch").click(function () {
        document.getElementById("smScreenSearch").value = "";
        document.getElementById("searchingResultsm").innerHTML = "";
      });
      //(Searching) lg and md
      document
        .getElementById("lgScreenSearch")
        .addEventListener("input", function () {
          let searchData = returnedData.filter((e) =>
            e.owner.firstName
              .toLowerCase()
              .includes(
                document.getElementById("lgScreenSearch").value.toLowerCase()
              )
          );
          document.getElementById("searchingResult").innerHTML = "";
          if (document.getElementById("lgScreenSearch").value != "") {
            for (let i = 0; i < searchData.length; i++) {
              document.getElementById("searchingResult").innerHTML += `
        <div>
          <img src='${searchData[i].owner.picture}' class="userPhoto m-3">
         ${searchData[i].owner.firstName}_${searchData[i].owner.lastName}
        </div>
        
        `;
            }
          } else document.getElementById("searchingResult").innerHTML = "";
        });

      //(Searching) sm

      document
        .getElementById("smScreenSearch")
        .addEventListener("input", function () {
          let searchData = returnedData.filter((e) =>
            e.owner.firstName
              .toLowerCase()
              .includes(
                document.getElementById("smScreenSearch").value.toLowerCase()
              )
          );
          document.getElementById("searchingResultsm").innerHTML = "";
          if (document.getElementById("smScreenSearch").value != "") {
            for (let i = 0; i < searchData.length; i++) {
              document.getElementById("searchingResultsm").innerHTML += `
        <div class="searchsmScreenPops searchsmScreenPopshold">
          <img src='${searchData[i].owner.picture}' class="userPhoto m-3">
         ${searchData[i].owner.firstName}_${searchData[i].owner.lastName}
        </div>
        
        `;
            }
          } else document.getElementById("searchingResultsm").innerHTML = "";
        });
      //follow
      $(".followBtn").click(function () {
        if ($(this).html() == "Follow") {
          $(this).css({ color: "black" });
          $(this).html("Followed");
        } else {
          $(this).css({ color: "#67c0fa" });
          $(this).html("Follow");
        }
      });
      $(".popUpfollowBtn").click(function () {
        if ($(this).html() == "Follow") {
          $(this).css({ color: "black" });
          $(this).html("Followed");
        } else {
          $(this).css({ color: "white" });
          $(this).html("Follow");
        }
      });
    });
}
getPosts();

// nav bar search popup
document.getElementById("searchBtn").addEventListener("click", function () {
  if (document.getElementById("navbarSearchAtt").style.display == "block") {
    document.getElementById("navbarSearchAtt").style.display = "none";
    document.getElementById("navbarSearchAtt").classList.remove("d-md-block");
  } else {
    document.getElementById("navbarSearchAtt").style.display = "block";
    document.getElementById("navbarSearchAtt").classList.add("d-none");
    document.getElementById("navbarSearchAtt").classList.add("d-md-block");
    document.getElementById("navbarSearchAtt").classList.add("navBarSearchlg");
  }
});
// nav bar saved menu
document.getElementById("savedItem").addEventListener("click", function () {
  if (document.getElementById("savedMenu").style.display == "block") {
    document.getElementById("savedMenu").style.display = "none";
    document.getElementById("savedMenu").classList.remove("d-md-block");
  } else {
    document.getElementById("savedMenu").style.display = "block";
    document.getElementById("savedMenu").classList.add("d-none");
    document.getElementById("savedMenu").classList.add("d-md-block");
  }
});

// nav bar notifi popup
//large and medium
document.getElementById("notifiBtn").addEventListener("click", function () {
  if (document.getElementById("navbarNotifiAtt").style.display == "block") {
    document.getElementById("navbarNotifiAtt").style.display = "none";
    document.getElementById("navbarNotifiAtt").classList.remove("d-md-block");
  } else {
    document.getElementById("navbarNotifiAtt").style.display = "block";
    document.getElementById("navbarNotifiAtt").classList.add("d-none");
    document.getElementById("navbarNotifiAtt").classList.add("d-md-block");
    document.getElementById("navbarNotifiAtt").classList.add("navBarSearchlg");
  }
});
//small
document
  .getElementById("notifiSmNavBar")
  .addEventListener("click", function () {
    if (document.getElementById("navbarNotifism").style.display == "block") {
      document.getElementById("navbarNotifism").style.display = "none";
      document.getElementById("navbarNotifism").classList.remove("d-sm-block");
    } else {
      document.getElementById("navbarNotifism").style.display = "block";
      document.getElementById("navbarNotifism").classList.add("d-none");
      document.getElementById("navbarNotifism").classList.add("d-sm-block");
      document.getElementById("navbarNotifism").classList.add("navBarNotifism");
      document.getElementById("smallUp").classList.remove("d-sm-flex");
      document.getElementById("smallDown").classList.remove("d-sm-flex");
      document.getElementById("smallUp").classList.add("d-none");
      document.getElementById("smallDown").classList.add("d-none");
    }
  });
document
  .getElementById("notifBackSmall")
  .addEventListener("click", function () {
    document.getElementById("navbarNotifism").style.display = "none";
    document.getElementById("navbarNotifism").classList.remove("d-none");
    document.getElementById("navbarNotifism").classList.remove("d-sm-block");
    document
      .getElementById("navbarNotifism")
      .classList.remove("navBarNotifism");
    document.getElementById("smallUp").classList.add("d-sm-flex");
    document.getElementById("smallDown").classList.add("d-sm-flex");
    document.getElementById("smallUp").classList.remove("d-none");
    document.getElementById("smallDown").classList.remove("d-none");
  });

//ceate new post
document.getElementById("dragArea").addEventListener("dragover", function (e) {
  document.getElementById("dragArea").classList.add("dragAreaOver");
  document.getElementById("dragArea").classList.remove("dragArea");
  e.preventDefault();
});
document.getElementById("dragArea").addEventListener("dragleave", function () {
  document.getElementById("dragArea").classList.add("dragArea");
  document.getElementById("dragArea").classList.remove("dragAreaOver");
});
document.getElementById("dragArea").addEventListener("dragend", function () {
  document.getElementById("dragArea").classList.add("dragArea");
  document.getElementById("dragArea").classList.remove("dragAreaOver");
});
document.getElementById("DAD2").addEventListener("click", function () {
  document.getElementById("dropZoneInput").click();
});
document
  .getElementById("dropZoneInput")
  .addEventListener("change", function (e) {
    if (
      /(.png|.jpg|.jepg)/i.test(
        document.getElementById("dropZoneInput").files[0].name
      )
    ) {
      document.getElementById("dragArea").classList.add("dragArea");
      document.getElementById("dragArea").classList.remove("dragAreaOver");
      document.getElementById("DAD").classList.add("d-none");
      document.getElementById("DAD2").classList.add("d-none");
      document.getElementById("DAD3").classList.add("d-none");
      document.getElementById("captionDiv").classList.remove("d-none");
      let reader = new FileReader();
      reader.readAsDataURL(document.getElementById("dropZoneInput").files[0]);
      reader.onload = function () {
        document.getElementById("imgAdded").classList.remove("d-none");
        document.getElementById("imgAdded").innerHTML = `
      <img src="${reader.result}">
      `;
      };
    }
  });

let imageURL;
document.getElementById("dragArea").addEventListener("drop", function (e) {
  e.preventDefault();
  if (/(.png|.jpg|.jepg)/i.test(e.dataTransfer.files[0].name)) {
    document.getElementById("dropZoneInput").files = e.dataTransfer.files;
    document.getElementById("dragArea").classList.add("dragArea");
    document.getElementById("dragArea").classList.remove("dragAreaOver");
    document.getElementById("DAD").classList.add("d-none");
    document.getElementById("DAD2").classList.add("d-none");
    document.getElementById("DAD3").classList.add("d-none");
    document.getElementById("captionDiv").classList.remove("d-none");
    let reader = new FileReader();
    reader.readAsDataURL(e.dataTransfer.files[0]);
    reader.onload = function () {
      document.getElementById("imgAdded").classList.remove("d-none");
      document.getElementById("imgAdded").classList.add("d-flex");
      document.getElementById("imgAdded").innerHTML = `
      <img src="${reader.result}>
      `;
    };
  }
});
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
});

document.getElementById("postAnewPost").addEventListener("click", function (e) {
  let postIDGene = makeid(24);
  e.preventDefault();
  let reader = new FileReader();
  reader.readAsDataURL(document.getElementById("dropZoneInput").files[0]);
  reader.onload = function () {
    let div = document.createElement("div");
    document.getElementById("postsContiner").prepend(div);
    document.getElementById("postsContiner").firstChild.innerHTML += `

    <div class="post my-5">
    <div class = "relativeToBe">
        <img src='./images/Userimage.jpg' class="userPhoto "><span class = "userInfoToPopOver">
            ${localStorage.getItem("LoggedInUser")}
            <div class="d-none userPopOver">
            <div class="d-block ">
                <img src='./images/Userimage.jpg' class="userPhoto m-3"><span>${localStorage.getItem(
                  "LoggedInUser"
                )}</span>
            </div>
            <div class="d-flex flex-row flex-nowrap justify-content-evenly fw-bold">
                <div>Posts</div>
                <div>Follower</div>
                <div>Following</div>
            </div>
        </div>
        </span>
    </div>
    <div>
        <div>
        <img src='${reader.result}' class="postPhoto mt-3">
        </div>
        <div class="d-flex justify-content-between downthePostImg">
            <div class="mt-3">
                <i class="fa-regular fa-heart fa-2x me-2 dark-fa id${postIDGene}" style="color: #000000;"></i>
                <i class="fa-regular fa-comment dark-fa  fa-2x me-2 idciid${postIDGene}" style="color: #000000;"></i>
                <i class="fa-solid fa-share dark-fa fa-2x" style="color: #000000;"></i>
            </div>
            <div class="mt-3 bookMark">
                <i class="fa-regular fa-bookmark dark-fa fa-2x   id${postIDGene}" style="color: #000000;"></i>    
            </div>
        </div>
        <div class="mt-2 " id= "likesCount${postIDGene}">
            ${0} likes
        </div>
        <div class="mt-2 relativeToBe">
            <span class="userNameInCap userInfoToPopOver">
            ${localStorage.getItem("LoggedInUser")}
                <div class="d-none userPopOver">
                <div class="d-block ">
                    <img src='./images/Userimage.jpg' class="userPhoto m-3"><span>${localStorage.getItem(
                      "LoggedInUser"
                    )}</span>
                </div>
                <div class="d-flex flex-row flex-nowrap justify-content-evenly fw-bold ">
                    <div>Posts</div>
                    <div>Follower</div>
                    <div>Following</div>
                </div>
            </div>
            </span>
            <span>${document.getElementById("postCaption").value}</span>
        </div>
        <div class="viewCom mt-2 idciid${postIDGene}">
            View all <span id="allComment${postIDGene}">0</span> comments
        </div>
        <div class="mt-2 newCommentDiv ">
            <input type="text" name="newComment" class="newComment" placeholder="Add a Comment..." id="inputNewComment${postIDGene}">
            <button class="postCommentBttn d-none postCommentBtn${postIDGene}" id="postCommentBtn${postIDGene}">
              post
            </button>
        </div>
    </div>
</div>
<div  class = "d-none CommentsPopUp idComm${postIDGene}" id = "idciid${postIDGene}">
  <div style="top:15px;right:15px" class="position-absolute closeBtnForCommentsPop"  >
  <button type="button" class="btn-close"></button>
  </div>
  <div class="d-flex justify-content-between">
    <div class="d-flex flex-column justify-content-center">
      <img src='${reader.result}' class="commentPhoto my-3">
    </div>
    <div class="d-flex flex-column w-50">
      <div class="mb-2">
        comments
        <hr>
      </div>
      <div class="addComment${postIDGene} mt-1" id="addComment${postIDGene}">
      </div>
    </div>
  </div>
</div>

   `;
    document.getElementById("postCaption").value = "";
    document.getElementById("dragArea").classList.remove("dragArea");
    document.getElementById("dragArea").classList.add("dragAreaOver");
    document.getElementById("DAD").classList.remove("d-none");
    document.getElementById("DAD2").classList.remove("d-none");
    document.getElementById("DAD3").classList.remove("d-none");
    document.getElementById("captionDiv").classList.add("d-none");
    document.getElementById("postAnewPost").classList.add("d-none");
    document.getElementById("imgAdded").innerHTML = "";
    document.getElementById("btn-close").click();
  };
});

document.getElementById("postCaption").addEventListener("input", function () {
  if (document.getElementById("postCaption").value == "")
    document.getElementById("postAnewPost").classList.add("d-none");
  else document.getElementById("postAnewPost").classList.remove("d-none");
});

//darkmode
document.getElementById("switchApp").addEventListener("click", function () {
  document.getElementById("html").classList.toggle("dark-mode");
  document.getElementById("body").classList.toggle("dark-mode");
  document.getElementById("seeAllPopup").classList.toggle("dark-mode");
  document.getElementById("mdlgNav").classList.toggle("navbarMineDarkMode");
  document.getElementById("mdlgNav").classList.toggle("navbarMine");

  if (
    document
      .getElementById("smallDown")
      .classList.contains("smScreenNavtop-dark")
  )
    document
      .getElementById("smallDown")
      .classList.remove("smScreenNavtop-dark");
  else
    document.getElementById("smallDown").classList.add("smScreenNavtop-dark");

  if (document.getElementById("smallUp").classList.contains("smScreenNav-dark"))
    document.getElementById("smallUp").classList.remove("smScreenNav-dark");
  else document.getElementById("smallUp").classList.add("smScreenNav-dark");

  for (const nav of document.getElementsByClassName("nav-link")) {
    nav.classList.toggle("dark-mode");
  }

  for (const com of document.getElementsByClassName("newComment")) {
    com.classList.toggle("dark-mode");
  }

  for (const com of document.getElementsByClassName("lgScreenNavSpanshold")) {
    com.classList.toggle("lgScreenNavSpans");
  }

  for (const pops of document.getElementsByClassName("userPopOver")) {
    pops.classList.toggle("dark-mode-bord");
  }

  for (const nav of document.getElementsByClassName("navbarIcons")) {
    if (nav.style.color == "rgb(0, 0, 0)")
      nav.style.color = "rgb(255, 255, 255)";
    else nav.style.color = "rgb(0, 0, 0)";
  }

  for (const fa of document.getElementsByClassName("dark-fa")) {
    if (fa.style.color == "rgb(0, 0, 0)") fa.style.color = "rgb(255, 255, 255)";
    else fa.style.color = "rgb(0, 0, 0)";
  }

  if (
    document.getElementById("Logo-Instagram").getAttribute("src") ==
    "./images/Logo-Instagram.png"
  )
    document.getElementById("Logo-Instagram").src =
      "./images/Logo-Instagram-Dark.png";
  else
    document.getElementById("Logo-Instagram").src =
      "./images/Logo-Instagram.png";

  if (
    document.getElementById("smScreenLogo").getAttribute("src") ==
    "./images/Logo-Instagram.png"
  )
    document.getElementById("smScreenLogo").src =
      "./images/Logo-Instagram-Dark.png";
  else
    document.getElementById("smScreenLogo").src = "./images/Logo-Instagram.png";

  if (
    document.getElementById("instalogomdScreens").style.color == "rgb(0, 0, 0)"
  )
    document.getElementById("instalogomdScreens").style.color =
      "rgb(255, 255, 255)";
  else
    document.getElementById("instalogomdScreens").style.color = "rgb(0, 0, 0)";
});

document.getElementById("leftArrowBtn").addEventListener("click", function () {
  document.getElementById("storiesContainer").scrollBy(-100, 0);
});
document.getElementById("rightArrowBtn").addEventListener("click", function () {
  document.getElementById("storiesContainer").scrollBy(100, 0);
});
//------------------

document.getElementById("closeStory").addEventListener("click", function () {
  document.getElementById("storiesPopContainer").classList.remove("d-flex");
  document.getElementById("storiesPopContainer").classList.add("d-none");
});

$("#leftStoryArrow").click(function () {
  stories.forEach((obj) => {
    obj.images.forEach((img, i) => {
      if (img == document.getElementById("storyIDImg").getAttribute("src"))
        if (i == 1) {
          document
            .getElementById("storyIDImg")
            .setAttribute("src", obj.images[0]);
          setTimeout(function () {
            document
              .getElementById("storyIDImg")
              .setAttribute("src", obj.images[1]);
          }, 5000);
        }
    });
  });
  document.getElementById("storyIDImg").getAttribute("src");
});
$("#rightStoryArrow").click(function () {
  stories.forEach((obj) => {
    obj.images.forEach((img, i) => {
      if (img == document.getElementById("storyIDImg").getAttribute("src"))
        if (i == 0) {
          document
            .getElementById("storyIDImg")
            .setAttribute("src", obj.images[1]);
        }
    });
  });
  document.getElementById("storyIDImg").getAttribute("src");
});
