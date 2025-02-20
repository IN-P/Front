// tabItems : .tab-menu li 초기화
// tabContents: .section 초기화
// idx 변수(인덱스 번호) : 0
const tabItems=document.querySelectorAll(".tab-menu li");
const tabContents=document.querySelectorAll(".section");
let idx=0;
console.log(tabItems);
console.log(tabContents);
// tabItems의 첫 번째 li에게 active 클래스 부여 : classList.add("active")
// tabContents의 첫번째 section에게 style.display
// tabContents의 첫번째 section에게 active 클래스 부여
tabItems[0].classList.add("active");
tabContents[0].style.display="block";
tabContents[0].classList.add("active");
// (function(){
//   tabItems[0].classList.add("active");
// tabContents[0].style.display="block";
// tabContents[0].classList.add("active");
// }()); 즉시실행함수로 구현

tabItems.forEach((item,index)=>{
  tabItems[index].addEventListener("click",()=>{
    let isActiveItem=document.querySelector("li.active")
    let isActiveContents=document.querySelector("section.active")
    if(isActiveItem && isActiveContents){
      isActiveItem.classList.remove("active");
      isActiveContents.classList.remove("active");
      isActiveContents.style.display="none";
    }
    // if(isActiveItem){
    //   isActiveItem.classList.remove("active");
    // }
    // if(isActiveContents){
    //   isActiveContents.style.display="none";
    //   isActiveContents.classList.remove("active")
    // } &&으로 동시에 가능
    item.classList.add("active");
    tabContents[index].classList.add("active");
    tabContents[index].style.display="block";
    // document.getElementById(`tab${index}`).classList.add("active");//이런방법도 존재

  });
});