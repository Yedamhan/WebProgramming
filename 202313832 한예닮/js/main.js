const $inputChat = document.getElementsByClassName("input-chat")[0];
  const $btnChat = document.getElementsByClassName("btn-chat")[0];
  const $commentBox = document.getElementsByClassName("box-comment")[0];

  // 댓글 쓰기
  const leaveComment = function (e) {
    e.preventDefault();
    const comment = document.createElement("p");
    const wrapComment = document.createElement("div");
    comment.textContent = $inputChat.value;
    wrapComment.appendChild(comment);
    comment.classList.add("text-comment");
    $inputChat.value = "";

    const likeIcon = document.createElement("img");
    likeIcon.src = "./src/icon/heart.png";
    likeIcon.width = 14;
    likeIcon.height = 14;
    likeIcon.classList.add("img-heart-comment");
    wrapComment.appendChild(likeIcon);

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./src/icon/delete.png";
    deleteIcon.width = 10;
    deleteIcon.height = 10;
    deleteIcon.classList.add("img-delete-comment");
    wrapComment.appendChild(deleteIcon);

    $commentBox.appendChild(wrapComment);
  };

  const visibleButton = function () {
    if ($inputChat.value.length > 0) {
      $btnChat.classList.add("btn-chat-effect");
    } else {
      $btnChat.classList.remove("btn-chat-effect");
    }
  };

  $btnChat.addEventListener("click", leaveComment);
  $inputChat.addEventListener("keyup", visibleButton);

  // 하트 & 지우기
  const controlImg = function (e) {
    if (e.target.getAttribute("src") == "./src/icon/heart.png") {
      e.target.setAttribute("src", "./src/icon/fullHeart.png");
    } else if (e.target.getAttribute("src") == "./src/icon/fullHeart.png") {
      e.target.setAttribute("src", "./src/icon/heart.png");
    }
    if (e.target.className === "img-delete-comment") {
      let parent = e.target.parentElement;
      parent.remove();
    }
  };
  $commentBox.addEventListener("click", controlImg);

  // 아이디 찾기
  const $searchBar = document.getElementsByClassName("input-searchBar")[0];
  const $filteredBox = document.getElementsByClassName("box-filteredId")[0];
  const idData = [
    {
      userId: "LGTwins",
      userName: "무적LG",
      userImg: "./src/img/profile/lgtwins.png",
    },
    {
      userId: "KIATigers",
      userName: "최강기아",
      userImg: "./src/img/profile/kiatigers.png",
    },
    {
      userId: "doosanbears",
      userName: "최강두산",
      userImg: "./src/img/profile/doosanbears.png",
    },
    {
      userId: "Hanwheagles",
      userName: "최강한화",
      userImg: "./src/img/profile/Hanwheagles.png",
    },
    
  ];

  const searchId = function () {
    let result = idData.filter((v, i) => {
      return v.userId.includes($searchBar.value);
    });
    result.forEach((v, i) => {
      const wrapFiltered = document.createElement("div");
      const wrapText = document.createElement("div");
      const filteredImg = document.createElement("img");
      const filteredId = document.createElement("span");
      const filteredName = document.createElement("span");
      filteredImg.classList.add("filteredImg");
      wrapFiltered.classList.add("wrapFiltered");
      filteredId.classList.add("filteredId");
      filteredName.classList.add("filteredName");
      wrapText.classList.add("wrapText");

      wrapFiltered.appendChild(filteredImg);
      filteredImg.src = v.userImg;

      filteredId.innerText = v.userId;
      wrapText.appendChild(filteredId);

      filteredName.innerText = v.userName;
      wrapText.appendChild(filteredName);
      wrapFiltered.appendChild(wrapText);

      $filteredBox.appendChild(wrapFiltered);
    });
    if ($searchBar.value.length === 0) {
      eraseSearchId();
      const boxRecentSearch = document.createElement("div");
      const recentSearchTitle = document.createElement("p");
      const recentSearchContent = document.createElement("p");
      recentSearchTitle.innerText = "최근 검색 항목";
      recentSearchTitle.classList.add("title-recentSearch");
      recentSearchContent.innerText = "최근 검색 내역 없음.";
      recentSearchContent.classList.add("content-recentSearch");
      boxRecentSearch.appendChild(recentSearchTitle);
      boxRecentSearch.appendChild(recentSearchContent);
      $filteredBox.appendChild(boxRecentSearch);
    }
  };

  const eraseSearchId = function () {
    while ($filteredBox.hasChildNodes()) {
      $filteredBox.removeChild($filteredBox.firstChild);
    }
  };

  $searchBar.addEventListener("keyup", searchId);
  $searchBar.addEventListener("keydown", eraseSearchId);
  $searchBar.addEventListener("click", () => {
    $filteredBox.style.display = "inline-block";
  });
  $searchBar.addEventListener("focusout", () => {
    $filteredBox.style.display = "none";
    $searchBar.value = "";
  });

  // 메뉴박스
  const $wrapMenu = document.getElementsByClassName("wrap-menu")[0];
  const $profileImg = document.getElementsByClassName("img-navProfile")[0];
  const $body = document.getElementsByTagName("body")[0];
  const controlMenu = function (e) {
    if (e.target.className === "img-navProfile") {
      if ($wrapMenu.style.display === "none") {
        $wrapMenu.style.display = "inline-block";
      } else {
        $wrapMenu.style.display = "none";
      }
    } else {
      $wrapMenu.style.display = "none";
    }
  };
  $body.addEventListener("click", controlMenu);



  // 하트 기능 추가
  document.addEventListener("DOMContentLoaded", () => {
    const heartIcon = document.querySelector(".icon-feed .img-icon[src='src/icon/heart.png']");
    const likeText = document.querySelector(".text-like");
    

    let isLiked = false;
    let likeCount = 3000; // 초기 좋아요 수
  

    heartIcon.addEventListener("click", () => {
      if (isLiked) {
        heartIcon.src = "src/icon/heart.png";
        likeCount--;
      } else {
        heartIcon.src = "src/icon/fullHeart.png";
        likeCount++;
      }
      isLiked = !isLiked;
      likeText.textContent = `좋아요 ${likeCount.toLocaleString()}`;
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const idData = [
      {
        userId: "LGTwins",
        userName: "무적LG",
        userImg: "./src/img/profile/lgtwins.png",
        location: "Seoul, Korea",
      },
      {
        userId: "KIATigers",
        userName: "최강기아",
        userImg: "./src/img/profile/kiatigers.png",
        location: "Gwangju, Korea",
      },
      {
        userId: "doosanbears",
        userName: "최강두산",
        userImg: "./src/img/profile/doosanbears.png",
        location: "Seoul, Korea",
      },
      {
        userId: "Hanwheagles",
        userName: "최강한화",
        userImg: "./src/img/profile/Hanwheagles.png",
        location: "Daejeon, Korea",
      },
    ];
  
    let follow_LGTwins = true;
    let follow_KIATigers = false;
    let follow_doosanbears = false;
    let follow_Hanwheagles = false;
  
    const feedContainer = document.querySelector(".box-feed");
  
    const followButtons = document.querySelectorAll(".box-recommend-profile button");
  
    followButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const teamName = button.getAttribute("data-team");
        if (button.textContent === "팔로우") {
          button.textContent = "팔로잉";
          button.style.backgroundColor = "#fafafa";
          button.style.color = "black";
          switch (teamName) {
            case "LGTwins":
              follow_LGTwins = true;
              createFeed(teamName);
              break;
            case "KIATigers":
              follow_KIATigers = true;
              createFeed(teamName);
              break;
            case "doosanbears":
              follow_doosanbears = true;
              createFeed(teamName);
              break;
            case "Hanwheagles":
              follow_Hanwheagles = true;
              createFeed(teamName);
              break;
            default:
              break;
          }
        } else {
          button.textContent = "팔로우";
          button.style.backgroundColor = "";
          button.style.color = "";
          switch (teamName) {
            case "LGTwins":
              follow_LGTwins = false;
              break;
            case "KIATigers":
              follow_KIATigers = false;
              break;
            case "doosanbears":
              follow_doosanbears = false;
              break;
            case "Hanwheagles":
              follow_Hanwheagles = false;
              break;
            default:
              break;
          }
          const feedToRemove = document.querySelector(`.feed[data-team="${teamName}"]`);
          if (feedToRemove) {
            feedToRemove.remove();
          }
        }
      });
    });
  
    function createFeed(teamName) {
      const feedExist = document.querySelector(`.feed[data-team="${teamName}"]`);
  
      if (!feedExist && shouldShowFeed(teamName)) {
        const teamData = idData.find((data) => data.userId === teamName);
  
        // 피드 요소 생성
        const feedElement = document.createElement("div");
        feedElement.classList.add("feed");
        feedElement.setAttribute("data-team", teamName);
  
        // 프로필 섹션
        const profileSection = document.createElement("div");
        profileSection.classList.add("profile-feed");
        profileSection.innerHTML = `
          <img class="img-profile-32px" src="${teamData.userImg}" alt="프로필 이미지" />
          <div>
            <p class="userName-feed">${teamData.userName}</p>
            <p class="location-feed">${teamData.location}</p>
          </div>
        `;
        feedElement.appendChild(profileSection);
  
        // 이미지 섹션
        const imgSection = document.createElement("img");
        imgSection.classList.add("img-feed");
        imgSection.src = `src/img/feed/${teamName.toLowerCase()}.png`;
        imgSection.alt = "피드 이미지";
        feedElement.appendChild(imgSection);
  
        // 아이콘 섹션
        const iconSection = document.createElement("div");
        iconSection.classList.add("icon-feed");
        iconSection.innerHTML = `
          <div>
            <img class="img-icon" src="src/icon/heart.png" alt="하트 아이콘" />
            <img class="img-icon" src="src/icon/chat.png" alt="댓글 아이콘" />
            <img class="img-icon" src="src/icon/send.png" alt="다이렉트 메시지 아이콘" />
          </div>
          <img class="img-icon" src="src/icon/bookmark.png" alt="북마크 아이콘" />
        `;
        feedElement.appendChild(iconSection);
  
        // 좋아요 텍스트
        const likeText = document.createElement("p");
        likeText.classList.add("text-like");
        likeText.textContent = `좋아요 0`;
        feedElement.appendChild(likeText);
  
        // 댓글 박스
        const commentBox = document.createElement("div");
        commentBox.classList.add("box-comment");
        feedElement.appendChild(commentBox);
  
        // 댓글 입력 박스
        const chatSection = document.createElement("div");
        chatSection.classList.add("box-chat");
        chatSection.innerHTML = `
          <img class="img-icon" src="src/icon/smile.png" alt="이모지 아이콘" />
          <form>
            <input class="input-chat" type="text" placeholder="댓글 달기..." />
            <button class="btn-chat" type="submit">게시</button>
          </form>
        `;
        feedElement.appendChild(chatSection);
  
        // 좋아요 아이콘 및 텍스트 가져오기
        const heartIcon = feedElement.querySelector(".icon-feed .img-icon[src='src/icon/heart.png']");
        const likeTextElement = feedElement.querySelector(".text-like");
  
        // 좋아요 수 관리
        let isLiked = false;
        let likeCount = 0;
  
        // 좋아요 아이콘 클릭 이벤트 리스너 추가
        heartIcon.addEventListener("click", function () {
          if (isLiked) {
            heartIcon.src = "src/icon/heart.png";
            likeCount--;
          } else {
            heartIcon.src = "src/icon/fullHeart.png";
            likeCount++;
          }
          isLiked = !isLiked;
          likeTextElement.textContent = `좋아요 ${likeCount.toLocaleString()}`;
        });
  
        // 게시 버튼 클릭 이벤트 리스너 추가
        const inputChat = feedElement.querySelector(".box-chat .input-chat");
        const btnChat = feedElement.querySelector(".box-chat .btn-chat");
  
        btnChat.addEventListener("click", function (e) {
          leaveComment(e, inputChat, commentBox);
        });
  
        // 피드 컨테이너에 추가
        feedContainer.appendChild(feedElement);
      }
    }
  
    function shouldShowFeed(teamName) {
      switch (teamName) {
        case "LGTwins":
          return follow_LGTwins;
        case "KIATigers":
          return follow_KIATigers;
        case "doosanbears":
          return follow_doosanbears;
        case "Hanwheagles":
          return follow_Hanwheagles;
        default:
          return false;
      }
    }
  
    function leaveComment(e, input, commentBox) {
      e.preventDefault();
      const commentText = input.value.trim();
      if (commentText !== "") {
        const wrapComment = document.createElement("div");
        wrapComment.classList.add("comment-item");
  
        const comment = document.createElement("p");
        comment.textContent = commentText;
        comment.classList.add("text-comment");
        wrapComment.appendChild(comment);
  
        const likeIcon = document.createElement("img");
        likeIcon.src = "src/icon/heart.png";
        likeIcon.alt = "하트 아이콘";
        likeIcon.width = 14;
        likeIcon.height = 14;
        likeIcon.classList.add("img-heart-comment");
        wrapComment.appendChild(likeIcon);
  
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "src/icon/delete.png";
        deleteIcon.alt = "삭제 아이콘";
        deleteIcon.width = 10;
        deleteIcon.height = 10;
        deleteIcon.classList.add("img-delete-comment");
        wrapComment.appendChild(deleteIcon);
  
        commentBox.appendChild(wrapComment);
        input.value = "";
      }
    }
  
    feedContainer.addEventListener("click", function (e) {
      const target = e.target;
    
      // 하트 토글
      if (target.classList.contains("img-heart-comment")) {
        toggleHeart(target);
      }
    
      // 댓글 삭제
      if (target.classList.contains("img-delete-comment")) {
        const commentItem = target.parentElement;
        commentItem.remove();
      }
    });
    
    // 댓글 열기/닫기 함수
    const openComment = function (icon) {
      const commentBox = icon.parentElement.nextElementSibling;
      commentBox.classList.toggle("open");
    };
    
    // 초기 로딩 시 좋아요 수 표시
    document.addEventListener("DOMContentLoaded", function () {
      const likeTextElements = document.querySelectorAll(".text-like");
      likeTextElements.forEach((element) => {
        const likeCount = parseInt(element.textContent.replace(/[^0-9]/g, ""));
        element.textContent = `좋아요 ${likeCount.toLocaleString()}`;
      });
    });
    
    function toggleHeart(icon) {
      if (icon.getAttribute("src") === "src/icon/heart.png") {
        icon.setAttribute("src", "src/icon/heart.png");
      } else {
        icon.setAttribute("src", "src/icon/fullHeart.png");
      }
    }
    });

    document.addEventListener('DOMContentLoaded', function () {
      // 게시물 작성 버튼 클릭 이벤트
      document.getElementById('add-post-btn').addEventListener('click', function () {
        const postFormHtml = `
          <div id="post-form" style="margin: 20px 0;">
            <label for="post-text">글:</label>
            <textarea id="post-text" rows="4" cols="50"></textarea><br><br>
    
            <label for="post-image">사진:</label>
            <input type="file" id="post-image" accept="image/*"><br><br>
    
            <label for="post-video">영상:</label>
            <input type="file" id="post-video" accept="video/*"><br><br>
    
            <button id="submit-post-btn">게시물 업로드</button>
          </div>
        `;
    
        if (!document.getElementById('post-form')) {
          document.body.insertAdjacentHTML('beforeend', postFormHtml);
    
          document.getElementById('submit-post-btn').addEventListener('click', function () {
            const postText = document.getElementById('post-text').value;
            const postImageFile = document.getElementById('post-image').files[0];
            const postVideoFile = document.getElementById('post-video').files[0];
    
            let postImageUrl = '';
            let postVideoUrl = '';
    
            if (postImageFile) {
              postImageUrl = URL.createObjectURL(postImageFile);
            }
            if (postVideoFile) {
              postVideoUrl = URL.createObjectURL(postVideoFile);
            }
    
            if (postText || postImageUrl || postVideoUrl) {
              const newPostHtml = `
                <article class="box-feed">
                  <div class="head-feed">
                    <div class="profile-feed">
                      <img class="img-profile-32px" src="src/img/profile/common.jpeg" alt="프로필 이미지" />
                      <div>
                        <p class="userName-feed">yedam_1104</p>
                        <p class="location-feed">Seoul, Koreax  </p>
                      </div>
                    </div>
                    <img class="icon-more" src="src/icon/more.png" alt="더보기 아이콘" />
                    <div class="more-options" style="display:none;">
                      <button class="edit-post">수정</button>
                      <button class="delete-post">삭제</button>
                    </div>
                  </div>
                  ${postImageUrl ? `<img class="img-feed" src="${postImageUrl}" alt="피드 이미지" />` : ''}
                  ${postVideoUrl ? `<video class="img-feed" controls><source src="${postVideoUrl}" type="video/mp4"></video>` : ''}
                  ${postText ? `<p class="post-text">${postText}</p>` : ''}
                  <div class="icon-feed">
                    <div>
                      <img class="img-icon heart-icon" src="src/icon/heart.png" alt="하트 아이콘" />
                      <img class="img-icon" src="src/icon/chat.png" alt="댓글 아이콘" />
                      <img class="img-icon" src="src/icon/send.png" alt="다이렉트 메시지 아이콘" />
                    </div>
                    <img class="img-icon" src="src/icon/bookmark.png" alt="북마크 아이콘" />
                  </div>
                  <p class="text-like">좋아요 0</p>
                  <div class="box-comment"></div>
                  <div class="box-chat">
                    <img class="img-icon" src="src/icon/smile.png" alt="이모지 아이콘" />
                    <form>
                      <input class="input-chat" type="text" placeholder="댓글 달기..." />
                      <button class="btn-chat" type="submit">게시</button>
                    </form>
                  </div>
                </article>
              `;
    
              const mainContent = document.querySelector('main');
              const referencePost = document.querySelector('main .box-feed');
    
              if (referencePost) {
                referencePost.insertAdjacentHTML('afterend', newPostHtml);
              } else {
                mainContent.insertAdjacentHTML('beforeend', newPostHtml);
              }
    
              document.getElementById('post-form').remove();
              alert('게시물이 업로드되었습니다!');
            } else {
              alert('내용을 입력하세요.');
            }
          });
        }
      });
    
      // 이벤트 위임을 사용하여 동적 요소에 이벤트 추가
      document.addEventListener('click', function (e) {
        const target = e.target;
    
        // 더보기 버튼 클릭 이벤트
        if (target.classList.contains('icon-more')) {
          const moreOptions = target.nextElementSibling;
          moreOptions.style.display = moreOptions.style.display === 'none' ? 'block' : 'none';
        }
    
        // 게시물 삭제 버튼 클릭 이벤트
        if (target.classList.contains('delete-post')) {
          const post = target.closest('.box-feed');
          post.remove();
        }
    
        // 게시물 수정 버튼 클릭 이벤트
        if (target.classList.contains('edit-post')) {
          const post = target.closest('.box-feed');
          const postTextElement = post.querySelector('.post-text');
          const newText = prompt('수정할 내용을 입력하세요:', postTextElement.textContent);
          if (newText !== null) {
            postTextElement.textContent = newText;
          }
        }
    
        // 좋아요 아이콘 클릭 이벤트
        if (target.classList.contains('img-icon') && target.classList.contains('heart-icon')) {
          const heartIcon = target;
          const likeText = heartIcon.closest('.box-feed').querySelector('.text-like');
          let likeCount = parseInt(likeText.textContent.replace(/[^0-9]/g, ''));
    
          if (heartIcon.getAttribute('src') === 'src/icon/heart.png') {
            heartIcon.setAttribute('src', 'src/icon/fullHeart.png');
            likeCount++;
          } else if (heartIcon.getAttribute('src') === 'src/icon/fullHeart.png') {
            heartIcon.setAttribute('src', 'src/icon/heart.png');
            likeCount--;
          }
          likeText.textContent = `좋아요 ${likeCount.toLocaleString()}`;
        }
    
        // 댓글 게시 버튼 클릭 이벤트
        if (target.classList.contains('btn-chat')) {
          e.preventDefault();
          const inputChat = target.previousElementSibling;
          const commentBox = target.closest('.box-feed').querySelector('.box-comment');
          const commentText = inputChat.value.trim();
          if (commentText !== "") {
            const wrapComment = document.createElement("div");
            wrapComment.classList.add("comment-item");
    
            const comment = document.createElement("p");
            comment.textContent = commentText;
            comment.classList.add("text-comment");
            wrapComment.appendChild(comment);
    
            const likeIcon = document.createElement("img");
            likeIcon.src = "src/icon/heart.png";
            likeIcon.alt = "하트 아이콘";
            likeIcon.width = 14;
            likeIcon.height = 14;
            likeIcon.classList.add("img-heart-comment");
            wrapComment.appendChild(likeIcon);
    
            const deleteIcon = document.createElement("img");
            deleteIcon.src = "src/icon/delete.png";
            deleteIcon.alt = "삭제 아이콘";
            deleteIcon.width = 10;
            deleteIcon.height = 10;
            deleteIcon.classList.add("img-delete-comment");
            wrapComment.appendChild(deleteIcon);
    
            commentBox.appendChild(wrapComment);
            inputChat.value = "";
          }
        }
    
        // 댓글 좋아요 아이콘 클릭 이벤트
        if (target.classList.contains('img-heart-comment')) {
          if (target.getAttribute('src') === 'src/icon/heart.png') {
            target.setAttribute('src', 'src/icon/fullHeart.png');
          } else {
            target.setAttribute('src', 'src/icon/heart.png');
          }
        }
    
        // 댓글 삭제 아이콘 클릭 이벤트
        if (target.classList.contains('img-delete-comment')) {
          const commentItem = target.parentElement;
          commentItem.remove();
        }
      });
    });
    
    
    




  