// Initialize Mobile Collapse Button

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// Or with jQuery

// $(document).ready(function() {
//   $('.sidenav').sidenav();
// });

// Initialize Floating Action Button

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems);
  direction: 'left'
});

// Or with jQuery

// $(document).ready(function() {
//   $('.fixed-action-btn').floatingActionButton();
// });

// Initialize Character Count Text Box

$(document).ready(function() {
  $('input#input_text, textarea#textarea2').characterCounter();
});

// POST form data to zapier on submit

$('#form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: 'https://hooks.zapier.com/hooks/catch/4578038/pjqwli/',
    type: 'post',
    data: $('#form').serialize(),
    success: function() {
      // Redirect to another success page (NOT WORKING)
      window.location = "https://chironhealth.com";
    }
  });
  setTimeout(function successMessage() {
    M.toast({
      html: 'Your message was sent to Andy.'
    });
  }, 0)
});
