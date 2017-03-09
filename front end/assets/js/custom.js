$(document).ready(function(){
	$('.collapsible').collapsible();
	$('select').material_select();
	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
	$('.button-collapse').sideNav({
		  menuWidth: 300, // Default is 240
		  closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		}
	);
});