var filterButtons = document.querySelectorAll("[data-publication-filter]");
var publicationCards = document.querySelectorAll("[data-publication-year]");

filterButtons.forEach(function (button) {
	button.addEventListener("click", function () {
		var filter = button.getAttribute("data-publication-filter");

		filterButtons.forEach(function (item) {
			var active = item === button;
			item.classList.toggle("active", active);
			item.setAttribute("aria-pressed", active);
		});

		publicationCards.forEach(function (card) {
			card.hidden = filter !== "all" && card.getAttribute("data-publication-year") !== filter;
		});
	});
});
