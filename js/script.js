$(function() {
        $("#main.tab_content:not('#navi.active + #main.tab_content')").hide();

        // It can be replaced with css. Not need to use JS.
        // $("#navi li").hover(function() {
        //   $ (this).addClass("hover")
        // },
        // function() {
        //   $(this).removeClass("hover");
        // });

        $("#main .tab_content").hide();
        var toggle_tab = function() {
          // get active tab
          active_tab = $("#navi li.active");
          $("#main .tab_content").fadeOut('fast');
          $("#" + active_tab.attr('data-tab')).fadeIn('fast');
        }
        $("#navi li").click(function(){
          $("#navi li").removeClass('active');
          $(this).addClass('active');
          toggle_tab();
        });
        toggle_tab();

        // Toggle hide/show sns account block
        // -----
        // show first item
        $(".ButtonContent p").first().show();
        $("#sns-list1 div").click(function(){
          // get id of the element to show
          id = $(this).attr('data-id');
          // hide all items
          $(".ButtonContent").hide();
          // show item
          $(".ButtonContent #" + id).show();
        });

        $(".block div").click(function(){
          // get id of the element to show
          id = $(this).attr('data-id');
          // hide all items
          $(".ButtonContent p").hide();
          // show item
          $(".ButtonContent p#" + id).show();
        });
      });