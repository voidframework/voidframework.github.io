$('#sidebar-menu').on('change', function() {
    $(location).prop('href', this.value);
});
