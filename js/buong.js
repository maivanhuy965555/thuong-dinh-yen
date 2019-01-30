/*js fixed menu mobile*/
/*if ($(window).width() < 991) {
    $(document).ready(function(){
    var stickyTop = $("#sticky-wrapper").offset().top;
      jQuery(window).scroll(function(){
        if (jQuery(window).scrollTop() > stickyTop)
        {
          jQuery('.sticky-wrapper').addClass('header-sticky');
        }
        else
        {
          jQuery('.sticky-wrapper').removeClass('header-sticky');
        }
      });
    });
}*/
/*resize img cùng cấp*/
$( window ).load(function() {
    render_size();
    var url = window.location.href;
    $('.menu-item  a[href="' + url + '"]').parent().addClass('active');
});
$( window ).resize(function() {
    render_size();
});
function render_size(){

    var h_1000 = $('.h_1000 img').width();
    $('.h_1000 img').height( 1.000 * parseInt(h_1000));

    var h_1 = $('.h_1 img').width();
    $('.h_1 img').height( 1.0 * parseInt(h_1));

    var h_2 = $('.h_2 img').width();
    $('.h_2 img').height( 0.7111111111 * parseInt(h_2));

    var h_3 = $('.h_3 img').width();
    $('.h_3 img').height( 0.6 * parseInt(h_3));

    var h_4 = $('.h_4 img').width();
    $('.h_4 img').height( 0.67857143 * parseInt(h_4));

    var h_5 = $('.h_5 img').width();
    $('.h_5 img').height( 0.6648649 * parseInt(h_5));


}
/*js home slider banner*/
$('#slider-home').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:true,
    autoplay:true,
    autoplayTimeout:8000,
    autoplaySpeed:1800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/*js home san pham noi bat*/
$('#slider-spnb').owlCarousel({
    loop:false,
    dots:false,
    rewind:true, 
    nav:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplaySpeed:1800,
    responsive:{
        0:{
            items:2,
            margin:10
        },
        600:{
            items:3,
            margin:15
        },
        1000:{
            items:4,
            margin:20
        },
        1200:{
            items:4,
            margin:30
        }
    }
})
/*js home sp khac*/
$('#slider-spkhac').owlCarousel({
    loop:false,
    dots:false,
    rewind:true, 
    nav:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplaySpeed:1800,
    responsive:{
        0:{
            items:2,
            margin:10
        },
        600:{
            items:3,
            margin:15
        },
        1000:{
            items:4,
            margin:20
        },
        1200:{
            items:4,
            margin:30
        }
    }
})
/*js bai viet khac*/
$('#slider-bvkhac').owlCarousel({
    loop:false,
    dots:false,
    rewind:true, 
    nav:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplaySpeed:1800,
    responsive:{
        0:{
            items:1,
            margin:10
        },
        600:{
            items:2,
            margin:15
        },
        1000:{
            items:3,
            margin:20
        },
        1200:{
            items:3,
            margin:30
        }
    }
})
/*js menu mobile*/
$(document).ready(function ($) {
    $('#trigger-mobile').click(function() {
        $(".mobile-main-menu").addClass('active');
        $(".backdrop__body-backdrop___1rvky").addClass('active');
    });
    $('#close-nav').click(function() {
        $(".mobile-main-menu").removeClass('active');
        $(".backdrop__body-backdrop___1rvky").removeClass('active');
    });
    $('.backdrop__body-backdrop___1rvky').click(function() {
        $(".mobile-main-menu").removeClass('active');
        $(".backdrop__body-backdrop___1rvky").removeClass('active');
    });
    $(window).resize( function(){
        if ($(window).width() > 1023) {
            $(".mobile-main-menu").removeClass('active');
            $(".backdrop__body-backdrop___1rvky").removeClass('active');
        }
    });
    $('.ng-has-child1 a .fa1').on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        $this.parents('.ng-has-child1').find('.ul-has-child1').stop().slideToggle();
        $(this).toggleClass('active')
        return false;
    });
    $('.ng-has-child1 .ul-has-child1 .ng-has-child2 a .fa2').on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        $this.parents('.ng-has-child1 .ul-has-child1 .ng-has-child2').find('.ul-has-child2').stop().slideToggle();
        $(this).toggleClass('active')
        return false;
    });
});
/*js tab tin tuc*/
$(document).ready(function() {
    function awe_tab() {
        $(".e-tabs:not(.not-dqtab)").each( function(){
            $(this).find('.tabs-title li:first-child').addClass('current');
            $(this).find('.tab-content').first().addClass('current');

            $(this).find('.tabs-title li').click(function(){
                var tab_id = $(this).attr('data-tab');
                var url = $(this).attr('data-url');
                $(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
                $(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
                $(this).closest('.e-tabs').find('.tab-content').removeClass('current');
                $(this).addClass('current');
                $(this).closest('.e-tabs').find("#"+tab_id).addClass('current');
            });    
        });
    } window.awe_tab=awe_tab;
    $(".not-dqtab").each( function(e){
        var $this1 = $(this);
        var datasection = $this1.closest('.not-dqtab').attr('data-section');
        $this1.find('.tabs-title li:first-child').addClass('current');
        var view = $this1.closest('.not-dqtab').attr('data-view');
        $this1.find('.tab-content').first().addClass('current');
        $this1.find('.tabs-title.ajax li').click(function(){
            var $this2 = $(this),
                tab_id = $this2.attr('data-tab'),
                url = $this2.attr('data-url');
            var etabs = $this2.closest('.e-tabs');
            etabs.find('.tab-viewall').attr('href',url);
            etabs.find('.tabs-title li').removeClass('current');
            etabs.find('.tab-content').removeClass('current');
            $this2.addClass('current');
            etabs.find("."+tab_id).addClass('current');
            //Nếu đã load rồi thì không load nữa
            /*if(!$this2.hasClass('has-content')){
                $this2.addClass('has-content');     
                getContentTab(url,"."+ datasection+" ."+tab_id,view);
            }*/
        });
    });
    //Xử lý mobile
    $('.not-dqtab .next').click(function(e){
        var count = 0
        $(this).parents('.content').find('.tab-content').each(function(e){
            count +=1;
        })
        var str = $(this).parent().find('.tab-titlexs').attr('data-tab'),
            res = str.replace("tab-", ""),
            datasection = $(this).closest('.not-dqtab').attr('data-section');
        res = Number(res);
        if(res < count){
            var current = res + 1;
        }else{
            var current = 1;
        }
        action(current,datasection);
    })
    $('.not-dqtab .prev').click(function(e){
        var count = 0
        $(this).parents('.content').find('.tab-content').each(function(e){
            count +=1;
        })
        var str = $(this).parent().find('.tab-titlexs').attr('data-tab'),
            res = str.replace("tab-", ""),
            datasection = $(this).closest('.not-dqtab').attr('data-section'),
            res = Number(res);  
        if(res > 1){
            var current = res - 1;
        }else{
            var current = count;
        }
        action(current,datasection);
    })
    // Action mobile
    function action(current,datasection,view){
        $('.'+datasection+' .tab-titlexs').attr('data-tab','tab-'+current);
        var text = '',
            url = '',
            tab_id='';
        $('.'+datasection+' ul.tabs.tabs-title.hidden-xs li').each(function(e){

            if($(this).attr('data-tab') == 'tab-'+current){
                var $this3 = $(this);
                title = $this3.find('span').text();
                url = $this3.attr('data-url');
                tab_id = $this3.attr('data-tab');   
                //Nếu đã load rồi thì không load nữa
                /*if(!$this3.hasClass('has-content')){
                    $this3.addClass('has-content'); 

                    getContentTab(url,"."+ datasection+" ."+tab_id,view);               
                }*/
            }
        })
        $("."+ datasection+" .tab-titlexs span").text(title);
        $("."+ datasection+" .tab-content").removeClass('current');
        $("."+ datasection+" .tab-"+current).addClass('current');
    }
});

