$(document).ready(function () {
  console.log("ready!");
  
  $(".filter").click(function () {
    $(".filter").each(function () {
      $(this).removeClass("filter-active");
      var filter_name = $(this).attr("data-filter");
      $(`${filter_name}`).hide();
    });
    if($(this).attr('data-filter') == "all"){
      $(".filter").each(function () {
        $(this).removeClass("filter-active");
        var filter_name = $(this).attr("data-filter");
        $(`${filter_name}`).show();
      });
    }else{
      $($(this).attr('data-filter')).show();
    }
    $(this).addClass("filter-active");
  });
});
