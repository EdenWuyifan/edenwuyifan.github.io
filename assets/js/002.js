// Add line numbers to fenced code blocks.
function numbers() {
	document.querySelectorAll("pre code").forEach(function (field) {
		var lines = field.textContent.replace(/\n$/, "").split("\n");
		var table = document.createElement("table");

		lines.forEach(function (line, index) {
			var row = document.createElement("tr");
			var number = document.createElement("th");
			var content = document.createElement("th");

			number.textContent = index + 1;
			content.textContent = line;
			number.style.cssText = "text-align:right;border:0;border-right:2px solid #777;padding:3px";
			content.style.cssText = "text-align:left;border:0;padding:3px";
			row.appendChild(number);
			row.appendChild(content);
			table.appendChild(row);
		});

		table.style.border = "0";
		field.textContent = "";
		field.appendChild(table);
	});
}

window.addEventListener("load", numbers);
