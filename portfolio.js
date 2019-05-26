		$(function() {
        //ここからpage-icon
        $(function() {
            var navBox = $('#page-icon');
            navBox.hide();
            var TargetPos = 85;
            $(window).scroll( function() {
            var ScrollPos = $(window).scrollTop();
            if( ScrollPos > TargetPos ) {
            navBox.fadeIn();
            }
            else {
            navBox.fadeOut('fast');
            }
            });
        });

        $('.page-icon-img').on('click',function(){
            $('#tweet').fadeToggle();

             $('.page-icon-img').off().click(function(){
                $('#tweet').fadeToggle();

            });
        });

        $('#kairu-change').on('click',function(){
            $('#wataru').hide();
            $('#kairu').fadeIn();
        });
        //ここまでpage-icon


        //ここからlove
        $('.col').hover(
            function(){
                $(this).find('.love-footing').fadeIn();

            },
            function(){
                $(this).find('.love-footing').fadeOut();
            });
        //ここまでlove

       //ここからmodal

       $('.modal-open').on('click', function(){
           $('body').append("<div id= 'modal-overlay'></div>");
           $('#modal-overlay').fadeIn('slow');
           var modal = '#' + $(this).attr('data-target');

           $(modal).fadeIn('slow');

           $('#modal-overlay,.modal-close,.sp-close-button').off().click(function(){
               $('.work-modal').fadeOut('normal');
               $('#modal-overlay').fadeOut('normal',function(){
                   $('#modal-overlay').remove();
               });
           });

       });

        //ここまでmodal

        //ここからcontact
        $('.contact-box').hover(
            function(){
                $(this).find('.contact-footing').fadeIn();

            },
            function(){
                $(this).find('.contact-footing').fadeOut();

            });
        //ここまでcontact
    	});
