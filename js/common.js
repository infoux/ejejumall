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

});
