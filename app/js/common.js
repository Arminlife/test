$(document).ready(function () {
	Barba.Pjax.start();
var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */

    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 400, function() {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });
  }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */

  return FadeTransition;
};
Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
	$(function() {
	  var formAnimatedInput = $('.form-animate-fields .form-input');
	  
	  formAnimatedInput.each(function() {
	    var $this = $(this);

	    $this.on('focus', function() {
	      $this.addClass('is-filled');
	    });
	    
	    $this.on('blur', function() {
	      if($this.val().length == 0) {
	        $this.removeClass('is-filled');
	      }
	    });
	  });
	});
  $('#contactForm').validate();
  $('.selectpicker').selectpicker();
  
  // Phone Input
  jQuery(function($){
   $(".phone-number").mask("ps (000) 000-00-00", {
     translation: {
        'p': {
          pattern: /[+]/,
          fallback: '+'
        },
        's': {
          pattern: /[7]/,
          fallback: '7'
        }    
      }
   });
  });

});	
	$(function () {
	    $('[data-toggle="tooltip"]').tooltip()
	  })


      jQuery.extend(jQuery.validator.messages, {
              required: "Заполните поле",
              remote: "Пожалуйста, введите правильное значение.",
              email: "Введите корректный E-mail",
              emailAdvanced: "Введите корректный E-mail",
              alpha: "Введите корректный E-mail eng",
              url: "Пожалуйста, введите корректный URL видео Youtube.",
              date: "Пожалуйста, введите корректную дату.",
              dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
              number: "Пожалуйста, введите число.",
              digits: "Пожалуйста, вводите только цифры.",
              creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
              equalTo: "Пожалуйста, введите такое же значение ещё раз.",
              accept: "Пожалуйста, выберите файл с правильным расширением.",
              maxlength: jQuery.validator.format("Пожалуйста, введите не больше {0} символов."),
              minlength: jQuery.validator.format("Введите корректный номер"),
              rangelength: jQuery.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
              range: jQuery.validator.format("Пожалуйста, введите число от {0} до {1}."),
              max: jQuery.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
              min: jQuery.validator.format("Пожалуйста, введите число, большее или равное {0}.")
      });
      $('#contactForm').validate()


})

$(document).on('click', '.tags-widget ul li.more', function () {
  var text = $(this).text();
    $(this).text(
        text == "Что ещё мы можем" ? "ещё" : "Что ещё мы можем");
  $(this).parent().parent().toggleClass('opened');
  $('#tags-wrapper').toggleClass('opened-widget');
})