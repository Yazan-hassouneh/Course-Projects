let upButton=document.getElementById("upParent"),bodyHeight=document.body.offsetHeight,screenHeight=window.innerHeight;document.onscroll=()=>{let t=window.scrollY;t>=100?(upButton.style.opacity="1",upButton.style.bottom="35px"):(upButton.style.opacity="0",upButton.style.bottom="10px");let o=(t+screenHeight)/bodyHeight;upButton.style.background=`conic-gradient(
    #fff 0%,
    #fff ${100*o}%,
    var(--dark-mood-bg-color) 0deg
)`},upButton.onclick=()=>{window.scrollTo(0,0)};