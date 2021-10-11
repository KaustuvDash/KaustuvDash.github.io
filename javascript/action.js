function myFunction() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d;
}
function homeHide() {
  var x = document.getElementById("hideHome");
  var y = document.getElementById("hideProject");
  var z = document.getElementById("hideBlog");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
  } else {
    y.style.display = "none";
    z.style.display = "none";
  }
  const d = new Date();
  document.getElementById("demo").innerHTML = d;
}
function projectHide() {
  var x = document.getElementById("hideHome");
  var y = document.getElementById("hideProject");
  var z = document.getElementById("hideBlog");
  y.classList.remove("removehideProjectCss");
  if (y.style.display === "none") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.style.display = "none";
    z.style.display = "none";
  }
  const d = new Date();
  document.getElementById("demo").innerHTML = d;
}
function blogHide() {
  var x = document.getElementById("hideHome");
  var y = document.getElementById("hideProject");
  var z = document.getElementById("hideBlog");
  z.classList.remove("removehideBlogCss");
  if (z.style.display === "none") {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
  const d = new Date();
  document.getElementById("demo").innerHTML = d;
}
