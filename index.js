window.addEventListener("scroll",function(){
    document.getElementsByClassName("header__heading")[0].style.backgroundColor="white";
    document.getElementsByClassName("header__heading")[0].style.boxShadow="0 4px 24px 0 rgba(0, 0, 0, 0.06)";
    if(self.pageYOffset==0)
    {
        document.getElementsByClassName("header__heading")[0].style.backgroundColor="transparent";
        document.getElementsByClassName("header__heading")[0].style.boxShadow="none";
    }
});
var iconL=document.getElementsByClassName("header__navbar__category__icon__main")[0];
iconL.addEventListener("click",function(){
    var navBar=document.getElementsByClassName("header__navbar__category")[0];
    if(navBar.style.display=="block")
        navBar.style.display="none";
    else   
        navBar.style.display="block";
})
const nums=document.querySelectorAll(".statistic__item__quantity");
window.addEventListener("scroll",function(){
    if(self.pageYOffset>4000)
    {
        nums.forEach(num=>{
            var updateCount = ()  =>{
                var target = +num.getAttribute('data-target');
                var count = +num.innerText;
                var inc =5;
                if(count < target){
                    num.innerText= count + inc;
                    setTimeout(updateCount,10);
                }
                else{
                    count.innerHTML=target;
                }
            }
            updateCount();
        });
    }
})
var views=document.querySelectorAll(".lasted-work__detail__item__overlay__link");
var overlay=document.querySelector(".overlay-fullscreen");
var exit=document.querySelector(".overlay-fullscreen__exit");
var srcOverlay=document.querySelector(".overlay-fullscreen__picture");
var pic=document.querySelectorAll(".lasted-work__detail__item__picture");
exit.addEventListener("click",function(){
    overlay.style.display="none";
});
function appearOverlay(i,e){
    console.log(i);
    var index=i;
    var imgSrc=e.target.parentElement.parentElement.getElementsByClassName("lasted-work__detail__item__picture")[0].getAttribute('src');
    overlay.style.display="flex";
    console.log(imgSrc);
    srcOverlay.src=imgSrc;
    document.getElementsByClassName("overlay-fullscreen__info")[0].innerHTML=`${i+1} of 8`;
    var Left=document.getElementsByClassName("overlay-fullscreen__btn--left")[0];
    var Right=document.getElementsByClassName("overlay-fullscreen__btn--right")[0];
    Left.addEventListener("click",function(){
        if(i==0)
            i=7;
        else
            i--;
        srcOverlay.src=pic[i].src;
        document.getElementsByClassName("overlay-fullscreen__info")[0].innerHTML=`${i+1} of 8`;
    })
    Right.addEventListener("click",function(){
        if(i==7)
            i=0;
        else
            i++;
        srcOverlay.src=pic[i].src;
        document.getElementsByClassName("overlay-fullscreen__info")[0].innerHTML=`${i+1} of 8`;
    })
}
for(let i=0;i<views.length;i++)
{
    views[i].addEventListener("click",function(e){
        appearOverlay(i,e);
    })
}


