$(document).ready(function() {
    $('.title').click(function() {
        $(this).closest('tr').next('.notice-content').toggle();
    });
});
