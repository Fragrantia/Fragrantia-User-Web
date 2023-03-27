let link = document.getElementsByClassName('a.footerlink');
for (let i=0;i<link.length;i++){
    link[i].addEventListener('mousemove',(e)=>{
        x=e.offsetX;
        y=e.offsetY;
        link[i].style.setProperty('--mouse-x', x + "px");
        link[i].style.setProperty('--mouse-y', y + "px");
    })
}