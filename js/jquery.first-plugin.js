//  { }  [ ] = +

(function ($) {
  $.fn.firstPlugin = function (options) {
    let settings = $.extend(
      {
        color: "#000000",
        done: null,
      },
      options
    );
    return this.each(function () {
      $(this).text(firstPlugin($(this).text()));
      $(this).css("color", settings.color);
      if ($.isFunction(settings.done)) {
        settings.done.call(this);
      }

      function firstPlugin(str) {
        var array = str.split("");

        for (let i = array.length - 1; i > 0; i--) {
          let rand = Math.floor(Math.random() * (i + 1));
          let temp = array[i];
          array[i] = array[rand];
          array[rand] = temp;
        }
        return array.join("");
      }
    });
  };
})(jQuery);
