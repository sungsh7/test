//팝업

const $pop = document.querySelector('#popup');
      $btn = document.querySelector('#btn');  
      $noticeP = document.querySelectorAll('#notice>p');
        console.log($noticeP);



    $btn.addEventListener('click',()=>{
        $pop.style.display = 'none';
    });
    for(let k = 0; k<$noticeP.length; k++ ){
        $noticeP[0].addEventListener('click',()=>{
        $pop.style.display = 'block';
        });
    }


// 슬라이드 메뉴
const $menu = document.querySelectorAll('#menubox > li');
console.log($menu);
const $subMenu = document.querySelectorAll('#menubox ul');
console.log($subMenu);
const $menuBg = document.querySelector('#menubg');

for(let i = 0; i < $menu.length; i++){
    for(let j = 0; j <$subMenu.length; j++){
    $menu[i].addEventListener('mouseenter',()=>{
        $subMenu[j].classList.toggle('hidden')
    });
    $menu[i].addEventListener('mouseleave',()=>{
        $subMenu[j].classList.toggle('hidden')
    });
 }
}
