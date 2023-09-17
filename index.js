const links = document.querySelectorAll(".e-share-one a");
var tooltip = document.getElementById("e_share_one_myTooltip");
var copyText = document.getElementById("e_share_one_copiable_text");
const currentUrl = window.location.href;
copyText.innerHTML = currentUrl;
links[0].href = "https://twitter.com/" + currentUrl;
links[1].href = "https://www.facebook.com/" + currentUrl;
links[2].href = "https://www.linkedin.com/?url=" + currentUrl;

function e_share_one_myFunction() {
  navigator.clipboard.writeText(copyText.innerHTML);

  tooltip.innerHTML = "کپی شد ";
}

function e_share_one_outFunc() {
  tooltip.innerHTML = "کپیش کنید";
}
