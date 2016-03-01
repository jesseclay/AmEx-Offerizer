chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		$(".ah-offers-add-to-card").each(function(idx, elem){elem.click();});
	}
	}, 10);
});
