document.addEventListener('DOMContentLoaded', function() {
    var changeLangButton = document.getElementById("changeLangButton");
    function toggleChangeLang() {
    
        var changeLangPanel = document.getElementById("changeLangPanel");
        if(changeLangPanel.style.visibility == 'visible'){
            changeLangPanel.style.visibility = 'hidden';
        }else{
            changeLangPanel.style.visibility = 'visible';
    
        }
    }
    
});
