var utk = utk || {};

var utk_dummy_callback = function (value) {
  console.log(value);
};

utk.Legend = function (opt_options) {
  var options = opt_options || {
    elements: []
  };
  var elements = [];
  for (var i = 0; i < options.elements.length; i++) {
    var div = document.createElement('div');
    div.innerHTML = '<span class="' + options.elements[i].class +
      ' utk-legend-element">&nbsp;&nbsp;</span><strong>' + options.elements[i]
      .name + '</strong>';
    elements.push(div);
  }
  var this_ = this;
  /* creating legend box */
  var element = document.createElement('div');
  element.className = 'utk-legend ol-unselectable';
  for (i = 0; i < elements.length; i++) {
    element.appendChild(elements[i]);
  }
  ol.control.Control.call(this, {
    element: element,
    target: options.target
  });
};
ol.inherits(utk.Legend, ol.control.Control);

// Input stump
utk.Input = function (opt_options) {
  var options = opt_options || {
    callback: utk_dummy_callback
  };
  var this_ = this;
  var container = document.createElement('div');
  container.className = 'utk-input ol-unselectable';

  var div = document.createElement('div');
  div.innerHTML = '<input type="text"></input>';
  container.appendChild(div);
  ol.control.Control.call(this, {
    element: container,
    target: options.target
  });
};
