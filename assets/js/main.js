$(function(){

// 메인 광고
mainSlide = new Swiper('.group-slide .swiper',{
    loop:true,
    autoplay:{
        delay:3000,
    },
    pagination: {
        el:".fraction",
        type:"fraction"
    },

})

// 여름 클리어런스 스와이퍼
summerSlide = new Swiper('.product-slider',{
    simulateTouch:true,
    slidesPerView: 2.8,
})

// 추천 상품 카테고리 클릭이벤트
$('.recommend-nav .category-item').click(function(){

    $(this).addClass('on').siblings().removeClass('on');
})
// 추천 상품 카테고리 스와이퍼
bottomSlide = new Swiper('.recommend-nav',{
    observer: true,
    observeParents: true,
    slidesPerView: 'auto',
    navigation: { 
        nextEl: ".next",
        prevEl: ".prev",
      },
})



// 하단 광고 스와이퍼

    bannerSlide = new Swiper('.sc-slider-banner',{
        simulateTouch:true,
        slidesPerView: 1.04,
        spaceBetween: 10,
    })  

// 푸터
    $('.kakao-info').click(function(e){
        $(this).toggleClass('on');
        e.preventDefault();
        $('.kakao-sub').slideToggle();
    })


$('.sc-recommend-product .category-item').click(function(){
    cateNum=$(this).data('cate');
    list(cateNum);
})



list(1001);
function list(num){
    fetch('./assets/data/product.json')
.then(res=>res.json())
.then(json=>{

    data=json.items;
    sortData = data.filter(function(parm){
        return parm.snippets.cate.indexOf(num) >= 0;
    })

    let html=``;
    sortData.forEach(element => {
       

        salePrice =  Math.floor(element.snippets.price.ori * 86 / 100);

        if(element.snippets.price.coupon){
            price = numberFormat(salePrice);
            couponEl=`<p class="coupon">쿠폰할인가</p>
            <span class="dc-rate">${element.snippets.price.coupon}</span>`;
        }else{
            price = element.snippets.price.ori;
            couponEl=``;
        }



     



        html+=`
        <li class="product-item">
        <a href="">
            <div class="thumb">
                <img src="${element.snippets.thumb}" alt="${element.snippets.title}">
            </div>
            <div class="textbox">
                <p class="shopname">${element.snippets.brand}</p>
                <p class="shop-title">${element.snippets.title}</p>

                ${couponEl}

                <span class="price">${numberFormat(price)}원</span>

                <div class="review">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.99545 4.78691L13.3889 5.44291L10.2608 8.60532L11.045 13L6.94444 10.9749L2.84393 13L3.62811 8.60532L0.5 5.44291L4.89344 4.78691L6.94444 1L8.99545 4.78691Z" fill="#F5C244"></path><path d="M8.99545 4.78691L13.3889 5.44291L10.2608 8.60532L11.045 13L6.94444 10.9749L2.84393 13L3.62811 8.60532L0.5 5.44291L4.89344 4.78691L6.94444 1L8.99545 4.78691Z" fill="#F5C244"></path></svg>
                    <span class="review-rating">${element.snippets.review.grade}</span>
                    <span class="review-count">(${element.snippets.review.count})</span>
                </div>
            </div>

        </a>

        
        <button class="like-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.9855 20.5466L10.9846 20.5458C8.26595 18.0507 6.06979 16.0333 4.54429 14.1455C3.02764 12.2686 2.25 10.6097 2.25 8.84469C2.25 5.97737 4.46367 3.75 7.275 3.75C8.87153 3.75 10.4181 4.50588 11.4261 5.70385L12 6.3859L12.5739 5.70385C13.5819 4.50588 15.1285 3.75 16.725 3.75C19.5363 3.75 21.75 5.97737 21.75 8.84469C21.75 10.6097 20.9724 12.2686 19.4556 14.1468C17.9301 16.0358 15.7342 18.0554 13.0158 20.555C13.0155 20.5552 13.0152 20.5555 13.0149 20.5558L12.0017 21.4822L10.9855 20.5466Z" stroke="#ADB5BD" stroke-width="1.5"></path></svg>
    </button>

    </li>`;
    });

    $('#cateList').html(html)

})

}



function numberFormat(num){
    return num.toLocaleString('ko-KR');
}



// 하트버튼 클릭시 색상변경 
$('.like-btn').click(function(){

    $(this).toggleClass('on');
})


})




