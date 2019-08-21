$(document).ready(function(){
    var active = false;
	$(".show-more a").on("click", function() {
	  $('li.hidden').slideToggle();
	  $(this).text(active ? 'Show more' : 'Show less')
	  active = !active;
	});
	
})
