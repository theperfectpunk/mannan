var scrollTopFlag = false;
function initScroll(){
	new SmoothScroll(document,120,12)
}

function openURL(URL) {
    window.location.href = URL;
}

function scrollToTop () {
    $("html").animate({
        scrollTop: 0,
    }, 1000);
    scrollTopFlag = true
}

function SmoothScroll(target, speed, smooth) {
	if (target == document)
		target = (document.documentElement || document.body.parentNode || document.body) // cross browser support for document scrolling
	var moving = false
    var pos = target.scrollTop
    if(!scrollTopFlag) {
        target.addEventListener('mousewheel', scrolled, false)
	    target.addEventListener('DOMMouseScroll', scrolled, false)
    } else {
        scrollTopFlag = false;
    }
	//target.addEventListener('mousewheel', scrolled, false)
	//target.addEventListener('DOMMouseScroll', scrolled, false)

	function scrolled(e) {
		e.preventDefault(); // disable default scrolling
		var delta = e.delta || e.wheelDelta;
		if (delta === undefined) {
			//we are on firefox
			delta = -e.detail;
		}
		delta = Math.max(-1, Math.min(1, delta)) // cap the delta to [-1,1] for cross browser consistency

		pos += -delta * speed
		pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight)) // limit scrolling
        if(!scrollTopFlag) {
            if (!moving) update();
        } else {
            scrollTopFlag = false;
        }
	}

	function update() {
		moving = true
		var delta = (pos - target.scrollTop) / smooth
		target.scrollTop += delta
		if (Math.abs(delta) > 0.5)
			requestFrame(update)
		else
			moving = false
	}

	var requestFrame = function() { // requestAnimationFrame cross browser
		return (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(func) {
				window.setTimeout(func, 1000 / 50);
			}
		);
	}()
}
