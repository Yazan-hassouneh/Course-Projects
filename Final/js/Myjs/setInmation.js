let sectionReserv=document.getElementById("reserve"),sup_head_Reserv=document.querySelector(".reserve .sub-head"),FormReserv=document.querySelector(".reserve form"),sectionAbout=document.getElementById("about"),aboutContant=document.querySelector(".about-contant"),aboutImg=document.querySelector(".about-img"),sectionVideo=document.getElementById("video"),sectionMenu=document.getElementById("menu"),sub_head_Menu=document.querySelector(".menu .sub-head"),tab_List_Menu=document.querySelector(".menu .tabList"),sectionSeaFood=document.getElementById("seaFood"),seaFoodHeader=document.querySelector(".seaFood h2"),seaFoodTopics=document.getElementById("seaFoodTopics"),sectionOur=document.getElementById("our"),ourImg=document.querySelector(".Our .ourServices"),ourHead=document.querySelector(".Our h2"),sectionGallery=document.getElementById("gallery"),galleryImg=document.querySelector(".gallery .imgs"),galleryHead=document.querySelector(".gallery .sub-head"),CustomerOpinion=document.getElementById("carouselExampleAutoplaying-2"),sectionClass=document.getElementById("class"),classIcon=document.querySelector(".class .classIcon"),classContant=document.querySelector(".class .classContant");function AddThreeClass(e,o,s,t,a,n){e.classList.add(o),s.classList.add(t),a.classList.add(n)}function AddTwoClass(e,o,s,t){e.classList.add(o),s.classList.add(t)}function AddClass(e,o){e.classList.add(o)}document.body.onscroll=()=>{let e=window.scrollY+window.innerHeight;sectionReserv.offsetTop+400>=e&&AddThreeClass(sectionReserv,"opacity-100",sup_head_Reserv,"animateSubHead",FormReserv,"animateForm"),sectionAbout.offsetTop+400<=e&&AddThreeClass(sectionAbout,"opacity-100",aboutContant,"animateAboutContant",aboutImg,"animateAboutImg"),sectionVideo.offsetTop+400<=e&&AddTwoClass(sectionVideo,"opacity-100",sectionVideo,"animateVideoSection"),sectionMenu.offsetTop+400<=e&&AddThreeClass(sectionMenu,"opacity-100",sub_head_Menu,"animateSubHead",tab_List_Menu,"animateListMenu"),sectionSeaFood.offsetTop+400<=e&&AddThreeClass(sectionSeaFood,"opacity-100",seaFoodHeader,"translateSeaFoodHead",seaFoodTopics,"seaFoodMenu"),sectionOur.offsetTop+400<=e&&AddThreeClass(sectionOur,"opacity-100",ourImg,"animateOurServaices",ourHead,"animateOurHead"),sectionGallery.offsetTop+400<=e&&AddThreeClass(sectionGallery,"opacity-100",galleryImg,"animateImgs",galleryHead,"animateSubHead"),CustomerOpinion.offsetTop+400<=e&&AddTwoClass(CustomerOpinion,"animateOpinion",CustomerOpinion,"opacity-100"),sectionClass.offsetTop+400<=e&&AddThreeClass(sectionClass,"opacity-100",classIcon,"animateIconClass",classContant,"animateContantClass")};