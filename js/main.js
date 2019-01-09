$(function () {
  var nav = {
    element: $('nav'),
    init: function() {
      this.element.find('button').on('click', this.handleClick);
    },
    handleClick: function(e) {
      var options = allOptions.activation_options[this.id];
      answerIdx = Math.floor(Math.random() * options.length);
      infoBox.setInfo(options[answerIdx]);
    }
  };

  var infoBox = {
    element: $('<div id="info-box">'),
    init: function() {
      nav.element.append(this.element);
    },
    setInfo: function(answer) {
      this.element.empty();
      this.element.append(answer);
    }
  };

  // init page objectis
  nav.init();
  infoBox.init();
});
