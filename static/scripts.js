function showSublist(sublistId) {
    var sublists = document.querySelectorAll('.sublist');
    sublists.forEach(function(sublist) {
        sublist.style.display = 'none';
    });

    var selectedSublist = document.getElementById(sublistId);
    if (selectedSublist) {
        selectedSublist.style.display = 'block';
    }
};

document.addEventListener('DOMContentLoaded', function() {

});