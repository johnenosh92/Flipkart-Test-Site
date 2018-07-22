
$(document).ready(function () {

// functionality for header text down icon to become up icon 
$('.btn').hover(
	function(){
	$(this).find("i").removeClass('fa-chevron-down');
	$(this).find("i").addClass('fa-chevron-up');
	},
	function(){
	$(this).find("i").removeClass('fa-chevron-up');
	$(this).find("i").addClass('fa-chevron-down');
	}
);
// functionality for menu bar to display more options(header2)
$('.menu-button').click(function(){
	$('.header2').slideToggle();
})
// functionality for sor options
$('.sort span').click(function(){
	$('.sort span').removeClass('tab-border');
	$(this).addClass('tab-border');
});
// functionality for checkboxes in FILTERS
$('.unchecked').click(function()
{
	$(this).hide();
	$(this).siblings('.checked').show();
});
$('.checked').click(function()
{
	$(this).hide();
	$(this).siblings('.unchecked').show();
});
// functionality to display FILTERS Sidebar on mobiles
$('.filters').click(function(){
	$('.sidebar').slideToggle('slow');
})
});