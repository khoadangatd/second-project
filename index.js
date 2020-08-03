var view=document.getElementsByClassName("lasted-work__detail__item__overlay__link");
var exit=document.getElementsByClassName("btn overlay-fullscreen__exit")[0];
window.addEventListener("scroll",function(){
    document.getElementsByClassName("header__heading")[0].style.backgroundColor="white";
    document.getElementsByClassName("header__heading")[0].style.boxShadow="0 4px 24px 0 rgba(0, 0, 0, 0.06)";
    if(self.pageYOffset==0)
    {
        document.getElementsByClassName("header__heading")[0].style.backgroundColor="transparent";
        document.getElementsByClassName("header__heading")[0].style.boxShadow="none";
    }
});
console.log(window);
function appearOverlay(e){
    document.getElementsByClassName("overlay-fullscreen")[0].style.display="flex";
    document.getElementsByClassName("overlay-fullscreen__info")[0].innerHTML=`${i} of 8`;
    e.preventDefault();
}
var i=0;
for(i=0;i<view.length;i++)
{
    view[i].addEventListener("click",appearOverlay);
}
exit.addEventListener("click",function(){
    document.getElementsByClassName("overlay-fullscreen")[0].style.display="none";
})
