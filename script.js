let topHeader = document.getElementById("topHeader");
const menuclass = document.getElementById("menu").classList;
const menubtnclass = document.getElementById("mobile-btn").classList;

document.getElementById('mobile-btn').addEventListener("click", function() {
    menuclass.toggle("menu-clicked");
    menubtnclass.toggle("btn-clicked");
})

function getHeight () {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    return scrolled;
}

document.addEventListener('scroll', function() {
    let scroll_Y = document.scrollingElement.scrollTop;

    let gage = getHeight();

    if (scroll_Y == 0) {
        topHeader.style.backgroundColor = "rgba(0,0,0,0)";
        topHeader.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))";
        document.getElementById('top-btn').style.dispaly = "none";
    }
    else {
        topHeader.style.backgroundColor = "#000";
        topHeader.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 1) "+ gage + "%, rgba(51, 51, 51, 1) "+ (100-gage) + "%)";
        document.getElementById('top-btn').style.dispaly = "block";
    }
})