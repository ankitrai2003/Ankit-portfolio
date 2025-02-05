$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: false,
        submitError: function ($form, event, errors) {
            // Show error messages if needed
            if (errors.length > 0) {
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                $('#success > .alert-danger').append("<strong>Please check the form for errors.</strong>");
                $('#success > .alert-danger').append('</div>');
            }
        },
        submitSuccess: function ($form, event) {
            // Formspree will handle the form submission
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
            $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
            $('#success > .alert-success').append('</div>');
            $('#contactForm').trigger("reset");
        }
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/* When a blank form is submitted, remove error messages */
$('body').on('reset', '#contactForm', function () {
    $('#success').html('');
});

$('#name').focus(function () {
    $('#success').html('');
});
