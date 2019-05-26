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
				 	 current_scrollY = $( window ).scrollTop();
           $('body').append("<div id= 'modal-overlay'><span class='modal-close'><img src='img/times.svg'></div></div>");
           $('#modal-overlay').fadeIn('slow');
					 $('body').css({
						 position: 'fixed',
						 top: -1 * current_scrollY
					 });
					 // data-targetの内容をIDにしてmodalに代入
           var modal = '#' + $(this).attr('data-target');

           $(modal).fadeIn('slow');

           $('#modal-overlay,.modal-close,.sp-close-button').off().click(function(){
						   $('body').attr( { style: '' } );
    		 			 $('html, body').prop( { scrollTop: current_scrollY } );
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
