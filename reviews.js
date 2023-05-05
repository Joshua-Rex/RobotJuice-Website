// The function 'load_reviews' which is run as soon as the page loads, starts of by delcaring a variable called reviews
// which is the element with the id '#reviews'. Then it creates another varaible called promise, which has the link to the Applied
// Once it has recieved the data from the API, the function runs a for loop for how many contents were within the array of information.
// However it then has a if statement, making it so it only loads 5 for the function 'add_reviews' and then loads the rest to the function
// 'pre_load_reviews'.
function load_reviews() {
  var reviews = document.getElementById("reviews")
  var promise = $.ajax('https://student.computing.edgehill.ac.uk/~walshd/cis1110api/product-reviews/bikeoil');
  promise.done(function(data) {
    for(var idx = 0; idx < data.length; idx++) {
      if (idx < 5) {
        add_reviews(reviews, data[idx]);
      } else {
        pre_load_reviews(reviews, data[idx]);
      }
    }
  });
}

// The function 'add_reviews' which is run in 'load_reviews', creates the reviews directly to the HTMl as well as adds
// the necessary classes to them allowing the CSS to customise them. For the profilePicture, Math.floor and Math.random
// is used to choose between the two images. These commands work together to choose a random number between 1 and 2
// Math.floor then rounds that number resulting in either image 1 or image 2 being used. The ratings were done by
// creating a loop up to 5, this loop creates a single rating (*) and then goes into an if statement which checks if the
// current loop is less than the rating the user gave, if it was, then the single rating is made red and appends it
// it moves back to the main loop, if not, then it just appends it and moves on. After the main loop is done it finished
// the review and finishes the function.
function add_reviews(reviews, data) {
  var singleReview = document.createElement("div");
  $(singleReview).addClass("singleReview");
  var profile = document.createElement("div");
  $(profile).addClass("profile");
  var nicknameAndRating = document.createElement("div");
  $(nicknameAndRating).addClass("nicknameAndRating");
  var img = document.createElement("img");
  if (Math.floor(Math.random() * 2) + 1 >=2) {
    img.src = "../robot-juice-images/reviewicon1.jpg";
  } else {
    img.src = "../robot-juice-images/reviewicon2.jpg";
  }
  $(img).addClass("profilePic");
  var ratings = document.createElement("div");
  $(ratings).addClass("ratings")
  for (idx=0; idx<5; idx++) {
    var singleRating = document.createElement("h1");
    if (idx<data.rating) {
      $(singleRating).addClass("red");
    }
    $(singleRating).addClass("singleRating");
    singleRating.innerHTML = "*";
    ratings.appendChild(singleRating);
  }
  var nickname = document.createElement("h2");
  $(nickname).addClass("nickname");
  nickname.innerHTML = data.nickname;
  var actualReview = document.createElement("p");
  $(actualReview).addClass("actualReview");
  actualReview.innerHTML = data.review;
  nicknameAndRating.appendChild(ratings);
  nicknameAndRating.appendChild(nickname);
  profile.appendChild(img);
  profile.appendChild(nicknameAndRating);
  singleReview.appendChild(profile);
  singleReview.appendChild(actualReview);
  document.getElementById("reviews").appendChild(singleReview);
}

// The function 'pre_load_reviews' is the alternate function that runs after the loop in 'load_reviews' has passed its
// parameter, this function does the exact same as the 'add_reviews' function, but this one adds the class 'hide' onto
// the singleReview class, this makes it so the rest of the reviews are loaded, but they are hidden from sight.
function pre_load_reviews(reviews, data) {
  var singleReview = document.createElement("div");
  $(singleReview).addClass("singleReview hide");
  var profile = document.createElement("div");
  $(profile).addClass("profile");
  var nicknameAndRating = document.createElement("div");
  $(nicknameAndRating).addClass("nicknameAndRating");
  var img = document.createElement("img");
  if (Math.floor(Math.random() * 2) + 1 >=2) {
    img.src = "../robot-juice-images/reviewicon1.jpg";
  } else {
    img.src = "../robot-juice-images/reviewicon2.jpg";
  }
  $(img).addClass("profilePic");
  var ratings = document.createElement("div");
  $(ratings).addClass("ratings")
  for (idx=0; idx<5; idx++) {
    var singleRating = document.createElement("h1");
    if (idx<data.rating) {
      $(singleRating).addClass("red");
    }
    $(singleRating).addClass("singleRating");
    singleRating.innerHTML = "*";
    ratings.appendChild(singleRating);
  }
  var nickname = document.createElement("h2");
  $(nickname).addClass("nickname");
  nickname.innerHTML = data.nickname;
  var actualReview = document.createElement("p");
  $(actualReview).addClass("actualReview");
  actualReview.innerHTML = data.review;
  nicknameAndRating.appendChild(ratings);
  nicknameAndRating.appendChild(nickname);
  profile.appendChild(img);
  profile.appendChild(nicknameAndRating);
  singleReview.appendChild(profile);
  singleReview.appendChild(actualReview);
  document.getElementById("reviews").appendChild(singleReview);
}

// The function 'load_pre_load_reviews' is the final function to be done on the page and is ran when the '#reviewsButton'
// is clicked. Once the function runs it takes all the elements with the 'hide' class and slides them down. Since this
// command forces the style to be block, the next line removes the inline styling of all elements with the 'hide' class
// Finally it removes the hide class from the elements making it so all the reviews are shown on the page.
function load_pre_load_reviews() {
  $(document.getElementsByClassName("hide")).slideDown();
  $(document.getElementsByClassName("hide")).attr('style', '');
  $("div").removeClass("hide");
}

// When the page loads, it starts the function 'load_reviews' and then makes it so when '#reviewsButton is clicked'
// the 'function load_pre_load_reviews' is ran.
$(document).on('ready', function() {
  load_reviews();
  $('#reviewsButton').on('click', load_pre_load_reviews);
});
