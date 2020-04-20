PAGES = "";
ORIENTATION = "";
CURRENT_INDEX = 0;

window.addEventListener('resize', function(){ layout(); });

window.addEventListener('DOMContentLoaded', (event) => {
    PAGES = document.getElementsByClassName("page");
    layout();
});

function layout() {
    if (window.innerWidth > window.innerHeight) {
        ORIENTATION = "landscape";
    } else { ORIENTATION = "portrait"; }

    if (ORIENTATION == "portrait" && PAGES[14].style.display == "none") {
        transitionPages("error");
        document.getElementById("story-footer").style.display = "none";
    } else if (ORIENTATION == "landscape" && PAGES[14].style.display == "block") {
        transitionPages();
        document.getElementById("story-footer").style.display = "flex";
    }
}

function navigate(direction) {
    switch (direction) {
        case "forward":
            CURRENT_INDEX += 2;
            if (CURRENT_INDEX > 12) { CURRENT_INDEX = 12 }
            break;
        case "back":
            CURRENT_INDEX -= 2;
            if (CURRENT_INDEX < 0) { CURRENT_INDEX = 0 }
            break;
    }

    transitionPages();
}

function transitionPages(error) {
    var indicies;

    if (error == null) {
        indicies = [ CURRENT_INDEX, CURRENT_INDEX + 1 ];
    } else {
        indicies = [14];
    }

    for (var i = 0; i < PAGES.length; i++) {
        if (indicies.includes(i)) {
            if (PAGES[i].style.display == "none") {
                PAGES[i].style.display = "block";
            }
        } else {
            PAGES[i].style.display = "none";
        }
    }
}

