function setBindings(){
// this is the listener for the assessments
    $(".asset").click(function(e){
        e.preventDefault();
        $('.assetHome').css({"display": "none"});
        $('.assetQuiz').css({"display": "block"});
    });

    //this is the listener for when you click on the submit button
    $(".assetResultButton").click(function(e){
        e.preventDefault();
        $('.assetQuiz').css({"display": "none"});
        $('.assetResults').css({"display": "block"});
    });

    $(".goHome").click(function(e){
        $('.assetResults').css({"display": "none"});
        $('.assetHome').css({"display": "block"});
    })

    // $(".assetResults").click(function(e){
    //     e.preventDefault();
    //     $('.assetQuiz').css({"display": "none"});
    //     // $('.assetResult').css({"display": "block"});
    // });

	$("nav a").click(function(e){
		e.preventDefault();

		var sectionID = e.currentTarget.id + "Section";
        if(sectionID == "logoSection"){
            sectionID = "homeSection";
        }

		$("html, body").animate({
			scrollTop: $("#" + sectionID).offset().top
		}, 1000)
	});

    $("#button").click(function (){
                $('html, body').animate({
                    scrollTop: $("#aboutSection").offset().top
                }, 400);
            });

    $("#buttonUp").click(function (){
                $('html, body').animate({
                    scrollTop: $("#homeSection").offset().top
                }, 400);
            });

    function displayResults() {
        var items = JSON.parse(window.localStorage.getItem('assessments') || '[]');

        items.forEach(function (item) {
            var className = item.toLowerCase();
            $("." + className).show();
        });
    }

    $('.quiz--js div.switch_box').on('click', 'input', function() {
        var items = JSON.parse(window.localStorage.getItem('assessments') || '[]');
        var filteredItems;

        if ($(this).prop("checked") === true) {
            var text = $(this).closest('div').data('text');
            items.push(text);
            localStorage.setItem('assessments', JSON.stringify(items));
        } else {
           filteredItems = items.filter(function (name) {
               return name !== $(this).closest('div').data('text');
           }, this);
           localStorage.setItem('assessments', JSON.stringify(filteredItems));
        }
    })

    if($(".results").length) displayResults();

}


/* ASSESSMENT DATA */
$(document).ready(function (argument) {
    setBindings();
});

/* HAMBURGER MENU */
// 'use strict';

// (function() {
//   var body = document.body;
//   var burgerMenu = document.getElementsByClassName('b-menu')[0];
//   var burgerContain = document.getElementsByClassName('b-container')[0];
//   var burgerNav = document.getElementsByClassName('b-nav')[0];

//   burgerMenu.addEventListener('click', function toggleClasses() {
//     [body, burgerContain, burgerNav].forEach(function (el) {
//       el.classList.toggle('open');
//     });
//   }, false);
// })();