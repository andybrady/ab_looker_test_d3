looker.plugins.visualizations.add({
  create: function (element, config) {
    // Create a container element to let us center the text.
    var container = element.appendChild(document.createElement("div"));
    container.className = "container";

    this._textElement = container.appendChild(document.createElement("div"));
  },
  updateAsync: function (data, element, config, queryResponse, details, done) {
    // Insert the data into the page.
    this._textElement.innerHTML = "testing... testing... 123";

    // Always call done to indicate a visualization has finished rendering.
    done();
  },
});
