$(document).ready(function () {
	var finishData = false;
	$('#floatdiv').addFloating({
		targetRight: 10,
		targetTop: 10,
		snap: true
	});

	$(window).scroll(function () {
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
			finishData = true;
		}

	}); // window scroll
});
