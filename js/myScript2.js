const CTABUTTON = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

//works well for only one event happening, adding another event stops this from working well.  The second event handler takes precedence
CTABUTTON.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTABUTTON.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

CTABUTTON.onclick = reveal;

//Instead us an event listener

CTABUTTON.addEventListener("click", reveal, false);

