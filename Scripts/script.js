// Header Switches
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
})


// menu works
function openMenu() {
    const navcontainer = document.getElementById('navcontainer');
    navcontainer.classList.add('openMenu');
}
function closeMenu() {
    const navcontainer = document.getElementById('navcontainer');
    navcontainer.classList.remove('openMenu');
}
const navcontainer = document.getElementById('navcontainer');
navcontainer.addEventListener('click', closeMenu);


// Share btn
const shareBtn = document.getElementById("shareBtn");
shareBtn.addEventListener("click", async () => {
    event.preventDefault();
    if (navigator.share) {
        await navigator.share({
            title: 'CUET 2026 Aarambh Batch - School to Dream College',
            url: 'https://futuremarg.netlify.app?#cuet_2026_aarambh_batch'
        });
    } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied");
    }
});