var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var props = {
  'border-radius': `
    Sets the radius of an element to the specified amount.<br><br>
    Example:<br>
    <code>
      div {<br>
      &nbsp;&nbsp;background-color: red;<br>
      &nbsp;&nbsp;width: 100px;<br>
      &nbsp;&nbsp;height: 100px;<br>
      &nbsp;&nbsp;border-radius: 20px;<br>
      }
    </code><br><br>
    Result:<br><br>
    <style>
      div#boxRadius {
        background-color: red;
        width: 100px;
        height: 100px;
        border-radius: 20px;
      }
    </style>
    <div id="boxRadius"></div><br><br>
    Full Reference: <a href="https://css-tricks.com/almanac/properties/b/border-radius/">https://css-tricks.com/almanac/properties/b/border-radius/</a>
  `,
  'width': `
    Sets the width of an element to the specified amount.<br><br>
    Example:<br>
    <code>
      div {<br>
      &nbsp;&nbsp;background-color: red;<br>
      &nbsp;&nbsp;width: 100px;<br>
      &nbsp;&nbsp;height: 100px;<br>
      }
    </code><br><br>
    Result:<br><br>
    <style>
      div#boxWidth {
        background-color: red;
        width: 100px;
        height: 100px;
      }
    </style>
    <div id="boxWidth"></div><br><br>
    Full Reference: <a href="https://css-tricks.com/almanac/properties/w/width/">https://css-tricks.com/almanac/properties/w/width/</a>
  `,
  'height': `
    Sets the height of an element to the specified amount.<br><br>
    Example:<br>
    <code>
      div {<br>
      &nbsp;&nbsp;background-color: red;<br>
      &nbsp;&nbsp;width: 100px;<br>
      &nbsp;&nbsp;height: 100px;<br>
      }
    </code><br><br>
    Result:<br><br>
    <style>
      div#boxHeight {
        background-color: red;
        width: 100px;
        height: 100px;
      }
    </style>
    <div id="boxHeight"></div><br><br>
    Full Reference: <a href="https://css-tricks.com/almanac/properties/h/height/">https://css-tricks.com/almanac/properties/h/height/</a>
  `
};
/*$(document).ready(function() {
  $.each(props, (key, val) => {
    $('#app').append('<div class="item" data-key="' + key + '">' + key + ' &nbsp; <button class="btn" onclick="takeALook(this)">Take a Look</button></div>');
  });
});

function takeALook(button) {
  var key = $(button).parent().data('key');
  $('body').animate({
    top: '-600px'
  }, 1000, function() {
    $('#app').hide();
    $('#description').show();
    $('#description').html("<h2>" + key.toUpperCase() + "</h2>" + props[key] + '<br><br><button onclick="goBack()" class="btn">Back To The List</button>');
    $('body').animate({
      top: '0px'
    }, 1000);
  });
}
function goBack() {
  $('body').animate({
    top: '-600px'
  }, 1000, function() {
    $('#description').hide();
    $('#app').show();
    $('body').animate({
      top: '0px'
    }, 1000);
  });
}
