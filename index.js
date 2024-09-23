(function ($) {
    $.fn.countTo = function (options) {
      options = options || {};
  
      return $(this).each(function () {
        // Set options for current element
        var settings = $.extend({}, $.fn.countTo.defaults, {
          from: $(this).data('from'),
          to: $(this).data('to'),
          speed: $(this).data('speed'),
          refreshInterval: $(this).data('refresh-interval'),
          decimals: $(this).data('decimals')
        }, options);
  
        // How many times to update the value, and increment per update
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
            increment = (settings.to - settings.from) / loops;
  
        // References & variables that change with each update
        var self = this,
            $self = $(this),
            loopCount = 0,
            value = settings.from,
            data = $self.data('countTo') || {};
  
        $self.data('countTo', data);
  
        // Clear existing interval if found
        if (data.interval) {
          clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);
  
        // Initialize element with starting value
        render(value);
  
        function updateTimer() {
          value += increment;
          loopCount++;
  
          render(value);
  
          if (typeof settings.onUpdate === 'function') {
            settings.onUpdate.call(self, value);
          }
  
          if (loopCount >= loops) {
            // Remove interval, set final value, and call onComplete
            $self.removeData('countTo');
            clearInterval(data.interval);
            value = settings.to;
  
            if (typeof settings.onComplete === 'function') {
              settings.onComplete.call(self, value);
            }
          }
        }
  
        function render(value) {
          var formattedValue = settings.formatter.call(self, value, settings);
          $self.html(formattedValue + '' + $self.data('text'));
        }
      });
    };
  
    $.fn.countTo.defaults = {
      from: 0,    // Starting number
      to: 0,      // Ending number
      speed: 1000, // Animation duration in milliseconds
      refreshInterval: 100, // Update frequency in milliseconds
      decimals: 0,  // Number of decimal places
      formatter: formatter, // Function to format the value
      onUpdate: null,   // Callback for each update
      onComplete: null   // Callback for completion
    };
  
    function formatter(value, settings) {
      return value.toFixed(settings.decimals);
    }
  })(jQuery);
  
  jQuery(function ($) {
    // Custom formatting example (add a comma every 3 digits)
    $('.count-number').data('countToOptions', {
      formatter: function (value, options) {
        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
      }
    });
  
    // Start all timers
    $('.timer').each(count);
  
    function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data('countToOptions') || {});
      $this.countTo(options);
    }
  });