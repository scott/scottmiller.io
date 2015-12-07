// Sets up autoscroll for any link with class autoscroll
// requires data-target param containing class or ID of target
$(document).ready(function(){
  $(".autoscroll").each(function(){
      $(this).click(function(){
        var scrollTarget=$(this).data("target");
        $('html,body').animate({
          scrollTop: $(scrollTarget).offset().top-40},'slow');
        });
  });

  $('.popup').magnificPopup({type:'image'});

  $('.helpy-popup').magnificPopup({
      items: [
        {
          src: '/images/admin-main.png'
        },

        {
          src: '/images/admin-discussion.png'
        },

        {
          src: 'images/mobile/admin-ticket.png',
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image' // this is default type
  });


  $('.vivint-popup').magnificPopup({
      items: [
        {
          src: '/images/portfolio/vivint-support-home-desktop.png'
        },

        {
          src: '/images/portfolio/vivint-support-kb-desktop.png'
        },

        {
          src: 'images/portfolio/vivint-support-detail-desktop.png',
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image' // this is default type
  });

  $('.vertster-popup').magnificPopup({
      items: [
        {
          src: '/images/portfolio/vertster-dashboard.png'
        },

        {
          src: '/images/portfolio/vertster-home.png'
        }

      ],
      gallery: {
        enabled: true
      },
      type: 'image' // this is default type
  });

  $('.diggboard-popup').magnificPopup({
      items: [
        {
          src: '/images/portfolio/diggboard.png'
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image' // this is default type
  });


});
