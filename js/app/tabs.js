define(function () {
  "use strict";

  function Tabs(options) {
    var defaults = {
        tabLinks: $('.js-tabs-link'),
        eventName: 'click',
        className: 'is-selected',
        preventDefault: true
    };

    $.extend(defaults, options);
    this.options = defaults;

    // set the width of the modal
    this.bindUIEvents();
    //$('.' + this.options.classContent).css('width', '60%');
  }

  Tabs.prototype.activate = function(navigationItem) {
        var targetPane = $(navigationItem.attr('href'));

        navigationItem.parent().siblings().each(function() {
            if ($(this).hasClass('is-selected')) {
                $(this).removeClass('is-selected');
            }
        });

        // Set the correct nav item active
        navigationItem.parent().addClass(this.options.className);

        // Reset all panes
        targetPane.siblings().each(function() {
            $(this).hide();
        });

        // Go to target pane
        targetPane.show();
  };

  Tabs.prototype.bindUIEvents = function() {
    var _ = this;

    _.options.tabLinks.on(_.options.eventName, function(e) {

        // Toggle the default classname on the default target
        if (_.options.preventDefault) {
            e.preventDefault();
        }

        _.activate($(this));
    });
  };

  return Tabs;
});
