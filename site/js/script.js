// floating
var floatingMenu={hasInner:"number"==typeof window.innerWidth,hasElement:"object"==typeof document.documentElement&&"number"==typeof document.documentElement.clientWidth},floatingArray=[];floatingMenu.add=function(e,t){var n,o;"string"==typeof e?n=e:o=e,void 0==t?floatingArray.push({id:n,menu:o,targetLeft:0,targetTop:0,distance:.07,snap:!0,updateParentHeight:!1}):floatingArray.push({id:n,menu:o,targetLeft:t.targetLeft,targetRight:t.targetRight,targetTop:t.targetTop,targetBottom:t.targetBottom,centerX:t.centerX,centerY:t.centerY,prohibitXMovement:t.prohibitXMovement,prohibitYMovement:t.prohibitYMovement,distance:void 0!=t.distance?t.distance:.07,snap:t.snap,ignoreParentDimensions:t.ignoreParentDimensions,updateParentHeight:void 0!=t.updateParentHeight&&t.updateParentHeight,scrollContainer:t.scrollContainer,scrollContainerId:t.scrollContainerId,confinementArea:t.confinementArea,confinementAreaId:void 0!=t.confinementArea&&"#"==t.confinementArea.substring(0,1)?t.confinementArea.substring(1):void 0,confinementAreaClassRegexp:void 0!=t.confinementArea&&"."==t.confinementArea.substring(0,1)?new RegExp("(^|\\s)"+t.confinementArea.substring(1)+"(\\s|$)"):void 0})},floatingMenu.findSingle=function(e){e.id&&(e.menu=document.getElementById(e.id)),e.scrollContainerId&&(e.scrollContainer=document.getElementById(e.scrollContainerId))},floatingMenu.move=function(e){e.prohibitXMovement||(e.menu.style.left=e.nextX+"px",e.menu.style.right=""),e.prohibitYMovement||(e.menu.style.top=e.nextY+"px",e.menu.style.bottom="")},floatingMenu.scrollLeft=function(e){if(e.scrollContainer)return e.scrollContainer.scrollLeft;var t=window.top;return this.hasInner?t.pageXOffset:this.hasElement?t.document.documentElement.scrollLeft:t.document.body.scrollLeft},floatingMenu.scrollTop=function(e){if(e.scrollContainer)return e.scrollContainer.scrollTop;var t=window.top;return this.hasInner?t.pageYOffset:this.hasElement?t.document.documentElement.scrollTop:t.document.body.scrollTop},floatingMenu.windowWidth=function(){return this.hasElement?document.documentElement.clientWidth:document.body.clientWidth},floatingMenu.windowHeight=function(){return floatingMenu.hasElement&&floatingMenu.hasInner?document.documentElement.clientHeight>window.innerHeight?window.innerHeight:document.documentElement.clientHeight:floatingMenu.hasElement?document.documentElement.clientHeight:document.body.clientHeight},floatingMenu.documentHeight=function(){var e=this.hasInner?window.innerHeight:0,t=document.body,n=document.documentElement;return Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight,e)},floatingMenu.documentWidth=function(){var e=this.hasInner?window.innerWidth:0,t=document.body,n=document.documentElement;return Math.max(t.scrollWidth,t.offsetWidth,n.clientWidth,n.scrollWidth,n.offsetWidth,e)},floatingMenu.calculateCornerX=function(e){var t=e.menu.offsetWidth,n=this.scrollLeft(e)-e.parentLeft;return e.centerX?n+=(this.windowWidth()-t)/2:void 0==e.targetLeft?n+=this.windowWidth()-e.targetRight-t:n+=e.targetLeft,document.body!=e.menu.parentNode&&n+t>=e.confinedWidthReserve&&(n=e.confinedWidthReserve-t),n<0&&(n=0),n},floatingMenu.calculateCornerY=function(e){var t=e.menu.offsetHeight,n=this.scrollTop(e)-e.parentTop;return e.centerY?n+=(this.windowHeight()-t)/2:void 0===e.targetTop?n+=this.windowHeight()-e.targetBottom-t:n+=e.targetTop,document.body!=e.menu.parentNode&&n+t>=e.confinedHeightReserve&&(n=e.confinedHeightReserve-t),n<0&&(n=0),n},floatingMenu.isConfinementArea=function(e,t){return void 0!=e.confinementAreaId&&t.id==e.confinementAreaId||void 0!=e.confinementAreaClassRegexp&&t.className&&e.confinementAreaClassRegexp.test(t.className)},floatingMenu.computeParent=function(e){if(e.ignoreParentDimensions)return e.confinedHeightReserve=this.documentHeight(),e.confinedWidthReserver=this.documentWidth(),e.parentLeft=0,void(e.parentTop=0);var t=e.menu.parentNode,n=this.offsets(t,e);e.parentLeft=n.left,e.parentTop=n.top,e.confinedWidthReserve=t.clientWidth;var o=t,i=this.offsets(o,e);if(void 0==e.confinementArea)for(;o.clientHeight+i.top<e.menu.scrollHeight+n.top||e.menu.parentNode==o&&e.updateParentHeight&&o.clientHeight+i.top==e.menu.scrollHeight+n.top;)o=o.parentNode,i=this.offsets(o,e);else for(;void 0!=o.parentNode&&!this.isConfinementArea(e,o);)o=o.parentNode,i=this.offsets(o,e);e.confinedHeightReserve=o.clientHeight-(n.top-i.top)},floatingMenu.offsets=function(e,t){var n={left:0,top:0};if(e!==t.scrollContainer){for(;e.offsetParent&&e.offsetParent!=t.scrollContainer;)n.left+=e.offsetLeft,n.top+=e.offsetTop,e=e.offsetParent;if(window==window.top)return n;for(var o=window.top.document.body.getElementsByTagName("IFRAME"),i=0;i<o.length;i++)if(o[i].contentWindow==window)for(e=o[i];e.offsetParent;)n.left+=e.offsetLeft,n.top+=e.offsetTop,e=e.offsetParent;return n}},floatingMenu.doFloatSingle=function(e){this.findSingle(e),e.updateParentHeight&&(e.menu.parentNode.style.minHeight=e.menu.scrollHeight+"px");this.computeParent(e);var t=this.calculateCornerX(e),n=(t-e.nextX)*e.distance;(Math.abs(n)<.5&&e.snap||Math.abs(t-e.nextX)<=1)&&(n=t-e.nextX);var o=this.calculateCornerY(e),i=(o-e.nextY)*e.distance;(Math.abs(i)<.5&&e.snap||Math.abs(o-e.nextY)<=1)&&(i=o-e.nextY),(Math.abs(n)>0||Math.abs(i)>0)&&(e.nextX+=n,e.nextY+=i,this.move(e))},floatingMenu.fixTargets=function(){},floatingMenu.fixTarget=function(e){},floatingMenu.doFloat=function(){this.fixTargets();for(var e=0;e<floatingArray.length;e++)this.fixTarget(floatingArray[e]),this.doFloatSingle(floatingArray[e]);setTimeout("floatingMenu.doFloat()",20)},floatingMenu.insertEvent=function(e,t,n){if(void 0==e.addEventListener){var o="on"+t;if(void 0==e.attachEvent){var i=e[o];e[o]=function(e){e=e||window.event;var t=n(e);return void 0!=i&&1==i(e)&&1==t}}else e.attachEvent(o,n)}else e.addEventListener(t,n,!1)},floatingMenu.init=function(){floatingMenu.fixTargets();for(var e=0;e<floatingArray.length;e++)floatingMenu.initSingleMenu(floatingArray[e]);setTimeout("floatingMenu.doFloat()",100)},floatingMenu.initSingleMenu=function(e){this.findSingle(e),this.computeParent(e),this.fixTarget(e),e.nextX=this.calculateCornerX(e),e.nextY=this.calculateCornerY(e),this.move(e)},floatingMenu.insertEvent(window,"load",floatingMenu.init),"undefined"!=typeof jQuery&&(jQuery.fn.addFloating=function(e){return this.each(function(){floatingMenu.add(this,e)})});

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

function redrawDotNav() {
    var topNavHeight = 50,
        nextPointMargin = 200;
    var currentDot = null;

    $('#dotNav li a').removeClass('active').parent('li').removeClass('active');
    $('section').each((i, item) => {
        var ele = $(item),
            docTop = $(document).scrollTop() + topNavHeight;
        if (ele.offset().top + ele.height() - nextPointMargin > docTop && ele.offset().top <= docTop + nextPointMargin) {
            $('#dotNav li').eq(i).addClass('active');
            currentDot = i;
        }
    });
    if (currentDot === null) {
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
            info: 'Improved their Framework ( Under Tree ) and we were the main developers of AccessBank administration panel',
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
        if (!data) {
            return;
        }
        $('#custom-modal img').attr("src", data.image);
        $('#custom-modal .right-side .info').html(data.info);
        $('#custom-modal .right-side .technologies').html(data.technologies);
        if (!data.role) {
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

function mailURL() {
    var mailto_link = 'mailto:djilanov@gmail.com?subject=Lets work together';

    if (getBrowser() == 'mozilla') {
        // Mozilla FireFox Mail To Friend
        // Opens a new tab but also opens up Microsoft Office window with URL
        window.open(mailto_link, 'emailWindow');
    }
    else if (getBrowser() == 'ie') {
        // IE Favourite
        window.open(mailto_link, 'emailWindow');
    }
    else if (getBrowser() == 'opera') {
        // Opera
        return true;
    }
    else if (getBrowser() == 'safari') { // safari
        window.location.href = mailto_link;
        //alert('mail to safari');
    }
    else if (getBrowser() == 'chrome') {
        window.location.href = mailto_link;
        //alert('mail to chrome'); 
    }
}

function getBrowser() {
    var userAgent = navigator.userAgent.toLowerCase();
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    if (isChrome || isEdge || isBlink) return "chrome";
    if (isFirefox) return "mozilla";
    if (isOpera) return "opera";
    if (isSafari) return "safari";
    if (isIE) return "ie";

}

$(document).ready(function () {
    var finishData = false;
    $('#floatdiv').addFloating({
        targetRight: 10,
        targetTop: 10,
        snap: true
    });

    $(window).scroll(function () {
        if (checkCounter(finishData)) {
            finishData = true;
        }
        redrawDotNav();
    }); // window scroll

    $('.mail').click(() => mailURL());

    $(function () {
        var e;
        return e = function () { }, $("[role=navigation] a, .teaser .button,#dotNav ul li").click(function () {
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