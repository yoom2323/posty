$(function() {

    // 상위 스와이퍼
    cateSlide = new Swiper('.brand-swiper',{
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: { 
            nextEl: ".next",
            prevEl: ".prev",
          },
    })

    //별버튼 클릭시 색상변경
    $('.like-btn').click(function(){

        $(this).toggleClass('on');
    })

    // 랭킹 스와이퍼 
    rankSlide = new Swiper('.ranking-swiper',{
        observer: true,
        observeParents: true,
        // slidesPerGroup:3,
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: { 
            nextEl: ".next",
            prevEl: ".prev",
          },
    })
    // 랭킹 스와이퍼 클릭이벤트
    $('.sc-ranking .ranking-item').click(function(){
        idx=$(this).data('idx');
        rankSlide.slideTo(idx)

        $(this).addClass('on').siblings().removeClass('on');
    })





    // 신규 브랜드 스와이퍼
    newSlide = new Swiper('.new-swiper',{
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: { 
            nextEl: ".next",
            prevEl: ".prev",
          },
    })

})