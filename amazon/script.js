
document.addEventListener('DOMContentLoaded', function() {

    const unsavedChanges = false;

    window.addEventListener('beforeunload', function(event) {
        if (unsavedChanges) {
            event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
        }
    });
});
