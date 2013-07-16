var titles = document.querySelectorAll('.discussion-topic-title');
var messages = document.querySelectorAll('.message');
var comments = document.querySelectorAll('div.comment-content div div p');
var pullrequests = document.querySelectorAll('h4 a[href*="/pull/"]');

titles = Array.prototype.slice.call(titles);
messages = Array.prototype.slice.call(messages);
comments = Array.prototype.slice.call(comments);
pullrequests = Array.prototype.slice.call(pullrequests);

var nodes = pullrequests.concat(comments.concat(titles.concat(messages)));

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
