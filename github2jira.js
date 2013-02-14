var titles = document.querySelectorAll('.discussion-topic-title');
var messages = document.querySelectorAll('.message');

titles = Array.prototype.slice.call(titles);
messages = Array.prototype.slice.call(messages);

var nodes = titles.concat(messages);

for (var i = 0; i < nodes.length; i++) {
	var node = nodes[i];

	var orig_content = content = node.textContent;
	var found = content.match(/\b#?(\w*?-\d+)\b/);
	console.log(found);

	var match_text;
	if (found && found[1]) {
		match_text = found[1];

		match_text = '<a href="https://learninghouse.atlassian.net/browse/' + match_text + '" target="_blank" style="color: orange;">' + match_text + '</a>';
		var re = new RegExp(escapeRegExp(found[1]));
		content = content.replace(re, match_text);
	}

	if (orig_content !== content) {
		node.innerHTML = content;
	}
}

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}