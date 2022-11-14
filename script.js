const slugValue = document.querySelector('.slug span');
const me = ["Jun", "Developer", "Youtuber", "Writer"];
let meCount = 0;

const intervalSlugValue = () => {    
    if (me.length <= meCount) {
        meCount = 0;
    }
    slugValue.textContent = me[meCount++];
}

const init = () => {
    setInterval(intervalSlugValue, 3000);
}

init();
