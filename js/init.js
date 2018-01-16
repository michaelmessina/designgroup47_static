$( document ).ready(function(){ 
    $('.button-collapse').sideNav({
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });
    $('.parallax').parallax();
    $('.slider').slider({
        full_width: true, 
        Indicators: false
    });
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      
    $('.modal-trigger').leanModal();
     $('.tooltipped').tooltip({delay: 50, html:true});
})