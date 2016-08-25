define(function () {
  "use strict";

  function Modal(options) {
    var defaults = {
      classTrigger: 'js-modal-open',
      classContent: 'js-modal-content',
      classOverlay: 'js-modal-overlay',
      classCloseButton: 'js-modal-close',
      eventName: 'click',
      preventDefault: true
    };

    $.extend(defaults, options);
    this.options = defaults;

    // set the width of the modal
    this.setWidth('60%');
    this.bindUIEvents();
    //$('.' + this.options.classContent).css('width', '60%');
  }

  Modal.prototype.setWidth = function(width) {
    $('.' + this.options.classContent).css('width', width);
  };

  Modal.prototype.open = function() {
    $('.' + this.options.classOverlay).css('display', 'block');
    $('body').addClass('stop-scrolling');
  };

  Modal.prototype.close = function() {
    $('.' + this.options.classOverlay).css('display', 'none');
    $('body').removeClass('stop-scrolling');
  };

  Modal.prototype.bindUIEvents = function() {
    var _ = this;

    $('.' + _.options.classCloseButton).on(_.options.eventName, _.close.bind(this));
    $('.' + _.options.classTrigger).on(_.options.eventName, _.open.bind(this));

    window.onclick = function(event) {
      if($(event.target).attr('class')) {
        if($(event.target).attr('class').indexOf(_.options.classOverlay) !== -1) {
          _.close();
        }
      }
    };
  };

  return Modal;
});
