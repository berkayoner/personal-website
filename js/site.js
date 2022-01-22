$(function(){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        $('body').attr('mode', 'dark');
        if(Cookies.get('mode') == 'light'){
            $('body').attr('mode', 'light');
        }
    }else{
        $('body').attr('mode', 'light');
        if(Cookies.get('mode') == 'dark'){
            $('body').attr('mode', 'dark');
        }
    }

    $('.navigation-button').click(function(e){
        if(!$('html').hasClass('navigation-active')){
            $('html').addClass('navigation-active');
        }	
	});

    $('.navigation-content>ul>li.themes>div').click(function(e){
        if(!$('.navigation-content>ul>li .palette').hasClass('palette-active')){
            $('.navigation-content>ul>li .palette').addClass('palette-active');
        }	
	});

    $('.navigation-content>ul>li.themes>.palette>li.back').click(function(e){
        if($('.navigation-content>ul>li>.palette').hasClass('palette-active')){
            $('.navigation-content>ul>li>.palette').removeClass('palette-active');
        }	
	});

    $('.navigation-content>ul>li .palette>li.item').click(function(){
        $('body').attr('mode', $(this).attr('data-palette'));
        Cookies.set('mode', $(this).attr('data-palette'));
	});

    $(document).mouseup(function(e){
        if (!$('.navigation-content ul').is(e.target) && $('.navigation-content ul').has(e.target).length === 0 && $('html').hasClass('navigation-active')){
            $('html').removeClass('navigation-active');
            $('.navigation-content>ul>li .palette').removeClass('palette-active');
        }
    });
});