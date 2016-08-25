define(function () {
  "use strict";

  function Toggle(options) {
    var defaults = {
        trigger: '.js-toggle-trigger',
        triggerClassName: 'is-active', // class toggled on trigger
        targetClassName: 'is-hidden', // class toggled on target
        eventName: 'click',
        preventDefault: true //the default action of the event will not be triggered.
    };

    $.extend(defaults, options);
    this.options = defaults;

    // set the width of the modal
    this.bindUIEvents();
    //$('.' + this.options.classContent).css('width', '60%');
  }

  Toggle.prototype.applyState = function() {
      // Apply the targetClassName on the target
      // Apply the triggerClassName on the trigger
      var _ = this;
      $(_.options.thisTarget).addClass(_.options.targetClassName);
      $(_.options.thisTrigger).addClass(_.options.triggerClassName);
  };

  Toggle.prototype.removeState = function() {
      // Remove the targetClassName on the target
      // Remove the triggerClassName on the trigger
      $(_.options.thisTarget).removeClass(_.options.targetClassName);
      $(_.options.thisTrigger).removeClass(_.options.triggerClassName);
  };

  Toggle.prototype.toggleState = function() {
      // Toggle the targetClassName on the target
      // Toggle the triggerClassName on the trigger
      var _ = this;
      $(_.options.thisTarget).toggleClass(_.options.targetClassName);
      $(_.options.thisTrigger).toggleClass(_.options.triggerClassName);
  };

  Toggle.prototype.bindUIEvents = function() {
    var _ = this;

    // rethinking the toggler... case styleguide.html
    // we still use the data-target-selector to make it
    // easier to implement.
    $(_.options.trigger).on(_.options.eventName, function(e) {
        // Toggle the default classname on the default target

        if (_.options.preventDefault) {
            e.preventDefault();
        }

        _.options.thisTrigger = $(this);
        _.options.thisTarget = $(this).data('target-selector');
        _.toggleState();
    });
  };

  return Toggle;
});
