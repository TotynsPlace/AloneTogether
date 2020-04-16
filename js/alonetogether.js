ORIENTATION = layout();


function layout() {
    if (window.innerWidth > window.innerHeight) { ORIENTATION = "landscape"; }
    else { ORIENTATION = "portrait"; }

    console.log(ORIENTATION);
}

window.addEventListener('resize', function(event){
        layout();
  });