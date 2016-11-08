$(function () {

//头部点击出来搜索框页面
    var contentPage = $('.header .header-content');
    var searchPage = $('.header .search-box');
    var searchbtn = $('#mobile-search .s-combobox');
    var backbtn = $('.header .search-box .sb-search .back');
    searchbtn.on('click',function () {
       contentPage.css('display','none');
        searchPage.css('display','block');
    });
    backbtn.on('click',function () {
        contentPage.css('display','block');
        searchPage.css('display','none');
    });

//头部菜单按钮点击出来菜单页面
    var navPage = $('.header .nav-tab');
    var navbtn = $('.header .header-content .category-menu');
    var navback = $('.header .nav-tab .tab-cover p');
    navbtn.on('click',function () {
        navPage.css('transform','translateX(0)');
    });
    navback.on('click',function () {
        navPage.css('transform','translateX(-100%)');
    });

//菜单页面的选项卡
    var tabNav = $('.header .nav-tab .tab-container .tab-content .tab-nav ul');
    var tabNavli = $('.header .nav-tab .tab-container .tab-content .tab-nav ul li');
    var tabmenuli = $('.header .nav-tab .tab-container .tab-content .tab-menu .tab-ul .tab-li');
    tabNav.on('click','li',function () {
        $.each(tabNavli,function () {
           $(this).removeClass('active');
        });
        $.each(tabmenuli,function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        tabmenuli.eq($(this).index()).addClass('active');
    });

//banner轮播效果
    var swiper = new Swiper('#banner', {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        autoplayDisableOnInteraction : true
    });

//天猫热点轮播图
    var swiper = new Swiper('#tmrd', {
        autoplay: 3000,
        direction : 'vertical',
        autoplayDisableOnInteraction : true
    });

//必抢今日轮播图
    var swiper = new Swiper('#bqjr', {
        slidesPerView: 'auto',
        grabCursor: true,
        autoplayDisableOnInteraction : true
    });

//头部变成红色
    $(window).scroll(function () {
        if($(this).scrollTop()>320){
            $('.header .header-content').addClass('tmall-bg-red');
        }else {
            $('.header .header-content').removeClass('tmall-bg-red');
        }
    });



});