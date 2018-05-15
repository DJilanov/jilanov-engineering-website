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
    var currentDot = null;
	
    $('#dotNav li a').removeClass('active').parent('li').removeClass('active');
	$('section').each((i,item) => {
	  var ele = $(item),
		  docTop = $(document).scrollTop() + topNavHeight;
	  if(ele.offset().top + ele.height() - nextPointMargin > docTop && ele.offset().top <= docTop + nextPointMargin) {
        $('#dotNav li').eq(i).addClass('active');
        currentDot = i;
	  }
    });   
    if(currentDot === null) {
        $('#dotNav li').eq($('#dotNav li').length - 1).addClass('active');
    }
}

function initModal() {
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
        valeo: {
            image: './img/valeo.png',
            info: 'Due to the size of their design team ( near 300 designers ) there is a need for a small compact mobile app that contains all of the design rules that the company is following at the moment. It also have to be able to change all rules via single edit in the admin panel but still be able to see offline version with the last time login rules, if you are not able to connect.',
            technologies: '<li>Mobile Front-end: NativeScript</li><li>Back-end: Google V8 ( NodeJS )</li><li>Testing: Karma</li>',
            role: 'We handle all of the development and deliver it for a month'
        },
        sqore: {
            image: './img/sqore.png',
            info: 'In every big company there is high demand for a simple solution for their thousands of candidates and open positions, but due to the high demand of different options for the task the project can get to the state of spaghetti really quick. Using React my team rewrites the whole web from Angular1 + CofeeScript app to the ES6 Angular2 using the latest and best technologies currently on the market and the mobile version from old Android and iOS app to new NativeScript + Angular2 app',
            technologies: '<li>Web Front-end: Angular 6</li><li>Mobile Front-end: NativeScript</li><li>Back-end: Ruby</li><li>Testing: Karma</li>'
        },
        jira: {
            image: './img/jira.png',
            info: 'In the end of every sprint the PM must create nice big report of what was done, how much time it took and info about the teams. This is few days lost at crawling data.. That\'s the reason why i created a simple tool that just needs to fill dew fields to auto generate you the excel report that your boss wants',
            technologies: '<li>Web Front-end: Angular 6</li><li>Back-end: NodeJS</li><li>Testing: Karma</li>',
            role: 'We handle all of the development and deliver it for a month'
        },
        montway: {
            image: './img/montway.png',
            info: 'In every big transportation company there is high demand for a simple JavaScript widget that allows the people to select routes and be able to easy calculate how much it would cost in on every website of the group. Using pure Vanilla JavaScript i created small good looking widget that needed just 1 JS file to be added to have everything we need using the facade pattern',
            technologies: '<li>Web Front-end: Angular 6</li><li>Back-end: NodeJS</li><li>Testing: Karma</li>',
            role: 'We handle all of the development and deliver it for a month'
        },
        gambling: {
            image: './img/casino.png',
            info: 'Canvas CreateJS gambling applications used in many online casinos and in few mobile casino apps ( Rocky Reactors, Chain Reactors Trails, Treasure Island, Cash Drop and many more ). Integrate native UX by building version for each mobile OS and simulate device experience. We also transferred and worked in Open Bet\'s office based in London, Great Britain.',
            technologies: '<li>Web Front-end: ÇreateJS</li><li>Back-end: Java</li><li>Testing: Selenium</li>',
            role: 'We handle front-end development of the games'
        },
        dhl: {
            image: './img/dhl.png',
            info: 'Due to the need of newer and faster system DHL choose to migrate most of its projects on Angular. The project was won by EPAM systems and as contractors we created the distance/price calculator.',
            technologies: '<li>Web Front-end: Angular</li><li>Back-end: Java</li><li>Testing: Selenium</li>',
            role: 'We handle all of the development of our feature and deliver it for 6 months'
        },
        globant: {
            image: './img/globant.png',
            info: 'Due to the need of tracking the expenses of their contractors when they are on business trip, there was a need for an Application that saves and send all bills to central server in the moment of recieving.',
            technologies: '<li>Mobile Front-end: Cordova</li><li>Back-end: NodeJS</li><li>Testing: Karma</li>',
            role: 'We handle all of the development of the solution and deliver it for 6 months'
        },
        ovation: {
            image: './img/ovation.png',
            info: 'Single page application used by Ovation Incentives to sell their products to companies like Novel, Swisscom and BBC. We also transferred and worked in Ovation Incentives\'s office based in London, Great Britain',
            technologies: '<li>Mobile Front-end: Cordova</li><li>Back-end: NodeJS</li><li>Testing: Karma</li>',
            role: 'We handle all of the development of the solution and deliver it for 6 months'
        },
        cloudsigma: {
            image: './img/cloudsigma.png',
            info: 'Developing improvements for the main SPA of the company (<a href="http://zrh.cloudsigma.com" target="_blank">zrh.cloudsigma.com</a>). Connecting the API calls and the web sockets with RESTful API. We also transferred and worked in CloudSigma\'s office based in Zurich, Switzerland',
            technologies: '<li>Web Front-end: BackBone</li><li>Back-end: Python</li>',
            role: 'We worked as contractors and assisted the main development team of the startup'
        },
        cms: {
            image: './img/jilanov.png',
            info: 'Due to the high demand for web-based online stores I have been met with, there was a need for an automated CMS system to be created. It has an active empty database attached to its server, which contains all basic collections and a completed NodeJS to fill said database up. Through the administrator panel, the client can model/modify and rearrange the navigation of the system, in terms of categories, carousel, pictures, a page\'s color and a specific product\'s information',
            technologies: '<li>Web Front-end: Angular6</li><li>Mobile Front-end: NativeScript</li><li>Back-end: NodeJS</li>'
        },
        angular5boilerplate: {
            image: './img/proj11.png',
            info: 'The boilerplate is an open source toolkit for developing with Angular 6. Quickly prototype your ideas or build your entire app with our extensive prebuilt components that asist your data transfer and error handling.',
            technologies: '<li>Web Front-end: Angular6</li>',
            role: 'We build it from a scrach to allow developers to build responsive, bulletproof projects on the web with the boilerplate that is great from the smallest to atomic projects.'
        },
        nativescriptboilerplate: {
            image: './img/proj10.png',
            info: 'The boilerplate is an open source toolkit for developing with NativeScript. Quickly prototype your ideas or build your entire app with our extensive prebuilt components that asist your data transfer and error handling.',
            technologies: '<li>Mobile Front-end: NativeScript</li>',
            role: 'We build it from a scrach to allow developers to build responsive, bulletproof projects on the web with the boilerplate that is great from the smallest to atomic projects.'
        },
        pingdom: {
            image: './img/proj2.png',
            info: 'The easy configurable php data fetcher that can get all the info for your monitored servers directly from Pingdom API',
            technologies: '<li>Back-end: PHP</li>',
            role: 'The main reason I created that plugin was because I lost a few days while searching through the web about how to get the info directly from their API, since I really dislike their public status page. I ended up having to read a bunch of poorly written documentation. I do not want the same thing for you... you can just use the plugin. It is quite easy to be used. Set the cron how often you want to pick the data and just use it in your custom made status page.'
        },
        newrelic: {
            image: './img/proj3.png',
            info: 'The easy configurable php data fetcher that can get all the info for your monitored servers directly from NewRelic API',
            technologies: '<li>Back-end: PHP</li>',
            role: 'The main reason I created that plugin was because I lost a few days while searching through the web about how to get the info directly from their API, since I really dislike their public status page. I ended up having to read a bunch of poorly written documentation. I do not want the same thing for you... you can just use the plugin. It is quite easy to be used. Set the cron how often you want to pick the data and just use it in your custom made status page.'
        },
        jquery: {
            image: './img/jquery.png',
            info: 'Contributed to filter and track algorithms of JQuerry in the begining stages of development ( 2008 )',
            technologies: '<li>Web Front-end: JavaScript</li>',
        },
        nativescript: {
            image: './img/nativescript.png',
            info: 'Contributed by reported a lot of bugs with suggestions how to handle them ( few of the suggestions were merged )',
            technologies: '<li>Web Front-end: JavaScript</li>',
        },
        tesseract: {
            image: './img/tesseract.png',
            info: 'Contributed by reported a lot of bugs with suggestions how to handle them ( few of the suggestions were merged )',
            technologies: '<li>Web Front-end: JavaScript</li>',
        },
        softwaregroup: {
            image: './img/softwaregroup.png',
            info: 'Improved their Framework ( Under Tree ) and was the main developers of AccessBank administration panel',
            technologies: '<li>Web Front-end: React</li><li>Back-end: NodeJS</li>',
            role: 'We worked as contractors and assisted the main development team of the company'
        },
    };

	// Get the modal
	let modal = $('#custom-modal');

	// Get the button that opens the modal
	let shots = $(".shots li");

	// Get the <span> element that closes the modal
	let close = $("#custom-modal .close");
	$(shots).click((event) => {
		let elementId = event.currentTarget.dataset.id;
        let data = modalData[elementId];
        if(!data) {
            return;
        }
		$('#custom-modal img').attr("src",data.image);
		$('#custom-modal .right-side .info').html(data.info);
        $('#custom-modal .right-side .technologies').html(data.technologies);
        if(!data.role) {
            $('#custom-modal .right-side .role').hide();
        } else {
		    $('#custom-modal .right-side .role').show();
        }
		$('#custom-modal .right-side p.role').html(data.role);
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