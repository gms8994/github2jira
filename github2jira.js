var nodes = merge('.discussion-topic-title', '.message', 'div.comment-content div div p', 'h4 a[href*="/pull/"]', '.release-body li');

for (var i = 0; i < nodes.length; i++) {
	var node = nodes[i];

	var orig_content = content = node.textContent;
	var found = content.match(/\b#?([A-Za-z][A-Za-z0-9]+?-\d+(?!-))\b/g);

	var match_text;
	if (found) {
		for (var counter = 0; counter < found.length; counter++) {
			var element = found[counter];
			match_text = element;

			match_text = '<a href="https://learninghouse.atlassian.net/browse/' + match_text + '" target="_blank" style="color: orange;">' + match_text + '</a>';
			var re = new RegExp(escapeRegExp(element));
			content = content.replace(re, match_text);
		}
	}

	if (orig_content !== content) {
		node.innerHTML = content;
	}
}

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function merge() {
	var allNodes = [];
	Array.prototype.slice.call(arguments).forEach(function(selector) {
		var nodes = Array.prototype.slice.call(document.querySelectorAll(selector));

		allNodes = allNodes.concat(nodes);
	});

	return allNodes;
}
