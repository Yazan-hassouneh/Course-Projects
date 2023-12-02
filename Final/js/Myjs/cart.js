const cart=document.getElementById("cart"),btnShowCart=document.getElementById("cartbtn"),closeCart=document.getElementById("closeCart"),container=document.querySelector(".cartContent"),NumberOfItems=document.getElementById("NumberOfItems"),items=document.getElementById("items"),Price=document.getElementById("price");let value=JSON.parse(localStorage.getItem("items")),srcHelpers=items.getAttribute("data-src");const NoItems=`
<div class="border-1 border rounded-circle mb-4 Noitems mt-4">
<i class="fa-solid fa-cart-plus text-white"></i>
</div>
<p class="text-white fs-5 fw-semibold ">No products in the cart.</p>
`;function setValues(){value=JSON.parse(localStorage.getItem("items"));let e="";null!=value&&value.forEach(t=>{e+=`
                <div class="SingleItem row px-1 py-4 p-md-4  item w-100 border-1 border-bottom">
                    <div class="h-100 col-4">
                        <img src="${srcHelpers}${t.img}" alt="order" class="img-fluid h-100">
                    </div>
                    <div class="col-8 d-flex flex-grow-1 justify-content-between align-items-center">
                        <div>
                            <p class="text-white fs-4 fw-bold mb-1 text-capitalize">${t.title}</p>
                            <p class="text-white fs-6 fw-bold">${t.price}</p>
                        </div>
                        <button class="removeItems border-0 bg-transparent text-white align-self-start fw-bold">X</button>
                    </div>
                </div>
            `}),null==value||0==value.length?items.innerHTML=NoItems:items.innerHTML=e}let opean=!1;function NumberOfElement(e){NumberOfItems.innerHTML=`Cart ( ${null==e?"0":e.length} ) items`}function setPrice(e){let t=0;for(i=0;i<e.length;i++)t+=parseInt(e[i].price.slice(1));Price.innerHTML=0==t?"":`Total : $ ${t}`}function removeItems(){if(null!=value&&value.length>=0){setValues();let e=document.querySelectorAll(".removeItems");e.forEach((e,t)=>{e.addEventListener("click",()=>{let e=[];for(i=0;i<value.length;i++)i!=t&&e.push(value[i]);localStorage.setItem("items",JSON.stringify(e)),value=e,setValues(),btnCustome(),NumberOfElement(value),setPrice(value)})})}}function btnCustome(){0==value.length?btnShowCart.classList.contains("numbersOfItems")&&btnShowCart.classList.remove("numbersOfItems"):(btnShowCart.setAttribute("data-items",`${value.length}`),btnShowCart.classList.add("numbersOfItems"))}btnShowCart.addEventListener("click",()=>{cart.classList.add("show-cart"),document.body.style.cssText="width: 100%; overflow:hidden",opean=!0,NumberOfElement(value),removeItems(),setPrice(value)}),closeCart.addEventListener("click",()=>{cart.classList.remove("show-cart"),opean=!1,document.body.style.cssText="width: 100%; overflow:visible"}),cart.addEventListener("click",e=>{!0!=opean||container.contains(e.target)||(cart.classList.remove("show-cart"),document.body.style.cssText="width: 100%; overflow:visible")}),btnCustome();