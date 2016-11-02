$(document).ready(function() {

      $('.top-banner ul').bxSlider({
          pager:false
      });

      var issue = $('.issue').bxSlider({
          pagerCustom: '.issue-pager',
          mode: 'fade',
          onSliderLoad : function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
              $('.issue > li').eq(0).addClass('active-slide');
              $('.main-top').css('background', 'url('+ $('.active-slide img').attr('data-slide-bg') +')');
          },
          onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
              $('.issue .active-slide').removeClass('active-slide');
              $('.issue > li').eq(currentSlideHtmlObject).addClass('active-slide');
              $('.main-top').css('background', 'url('+ $('.active-slide img').attr('data-slide-bg') +')').css('transition', 'background .50s ease-in-out');
          }
      });

      $('.best-category a').on('click', function() {
          var activeTab = $(this).attr('data');
                  $('.best-category a').removeClass('active');
                  $('section.best div.data').removeClass('active');
                  $('section.best div#' + activeTab).addClass('active');
                  $(this).addClass('active');
      });

      $('.hot-slider').bxSlider({
          pager:false
      });

      $('.sale-slider').bxSlider({
          pager:false
      });

      $('.navigation p a').on('click', function() {
          $('.navigation .category ul').css('display', 'none')
          $(this).parent().parent().find('ul').css('display', 'block');
      });

        $('section.product .sort p a').on('click', function() {
            $('section.product .sort p a').removeClass('active');
            $(this).addClass('active');
            $('section.product .container #list').removeClass();
            $('section.product .container #list').addClass($(this).attr('data'));
        });

        $('div.select input').on('click', function() {
            $('.info-text .select ul').css('display', 'none');
            $(this).parent().find('ul').css('display','block');

        });
        $('div.select li a').on('click', function() {
            $('.info-text .select ul').css('display', 'none');
            $(this).parent().parent().parent().find('input').attr('value', $(this).text());

        });

        $('.stars button').on('click', function() {
            var starValue = $(this).attr("data");
             $(".stars button").find("i").removeClass("on");
             $(".stars button").each(function() {
                 if ($(this).attr("data") <= starValue) {
                     $(this).find("i").addClass("on");
                 }
             });
        });

        $('.btn-area.comment button').on('click', function() {
            $(this).parent().parent().find('.reply-write').css('display','block');

        });



});
