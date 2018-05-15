const modalData = {
	devolo: {
		image: './img/devolo.png',
		info: 'Innovative home control systems based on Go and Angular5, developed for <a href="https://www.devolo.com/">Devolo</a>',
		technologies: '<li>Web Front-end: Angular 6</li><li>Mobile Front-end: Swift and Java</li><li>Back-end: Go</li><li>Testing: Karma and Selenium</li>',
		role: 'We were leading the web front-end development and developed the application from a simple PDF file with information what they need'
	},
	fourhundred: {
		image: './img/4hundred.png',
		info: 'Great system that helps you to switch to green energy in Germany ( and soon in France ), developed for <a href="http://4hundred.com/">4hundred</a>',
		technologies: '<li>Web Front-end: Angular 6</li><li>Mobile Front-end: NativeScript</li><li>Back-end: .Net Core</li><li>Testing: Karma and MUTF</li>',
		role: 'We were leading the web front-end development and helped for the Back-end. We worked closely with the client and had daily meetings'
	},
};

function checkCounter(finishData) {
	var oTop = $('.gray-background.count').offset().top - window.innerHeight;
	if (!finishData && $(window).scrollTop() > oTop) {
		$('.gray-background.count .number').each(function () {
			var $this = $(this),
				countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
			}, {
				duration: 2000,
				easing: 'swing',
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(this.countNum);
					//alert('finished');
				}

			});
		});
		return true;
	}
}
  
function redrawDotNav(){
	var topNavHeight = 50,
		nextPointMargin = 200;
	
	$('#dotNav li a').removeClass('active').parent('li').removeClass('active');     
	$('section').each(function(i,item){
	  var ele = $(item),
		  docTop = $(document).scrollTop() + topNavHeight;
	  if(ele.offset().top + ele.height() - nextPointMargin > docTop && ele.offset().top <= docTop + nextPointMargin) {
		$('#dotNav li').eq(i).addClass('active');
	  }

	});   
}

function initModal() {
	// Get the modal
	let modal = $('#custom-modal');

	// Get the button that opens the modal
	let shots = $("#dribble_shots li");

	// Get the <span> element that closes the modal
	let close = $("#custom-modal .close");

	$(shots).click((event) => {
		let elementId = event.currentTarget.dataset.id;
		let data = modalData[elementId];
		$('#custom-modal img').attr("src",data.image);
		$('#custom-modal .right-side .info').html(data.info);
		$('#custom-modal .right-side .technologies').html(data.technologies);
		$('#custom-modal .right-side .role').html(data.role);
		modal.css('display', 'block');
	});
	
	$(close).click(() => {
		modal.css('display', 'none');
	});
	
	$(window).click((event) => {
		if (event.target.id == 'custom-modal') {
			modal.css('display', 'none');
		}
	});
}

$(document).ready(function () {
	var finishData = false;
	$('#floatdiv').addFloating({
		targetRight: 10,
		targetTop: 10,
		snap: true
	});

	$(window).scroll(function () {
		if(checkCounter(finishData)) {
			finishData = true;
		}
		redrawDotNav();
	}); // window scroll
	
	$(function () {
		var e;
		return e = function () {}, $("[role=navigation] a, .teaser .button,#dotNav ul li").click(function () {
			var e;
			return e = $("body").find($(this).attr("href").split("/").pop()), $("html, body").animate({
				scrollTop: e.offset().top
			}, 750), !1
		}), $(document).ready(function () {
			return e()
		})
	});

	initModal();
});