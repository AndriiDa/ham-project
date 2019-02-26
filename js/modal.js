$(document).ready(function () {
    /*// Specify Default opened block
    serviceButtons[0].click();*/

    function showModal() {        document.getElementById("overlay").style.display = "block";
    }

    function hideModal() {        document.getElementById("overlay").style.display = "none";
    }
    
    document
        .querySelector(".purchase-button ")
        .addEventListener("click", showModal);
    
     document
        .querySelector(".purchase-button2 ")
        .addEventListener("click", showModal);
   
    document
        .querySelector(".modal-submit-input")
        .addEventListener("click", hideModal);

    document.querySelectorAll(".modal-social-btn").forEach(modal => {
        modal.addEventListener("click", hideModal);
    });

    window.onclick = function (event) {
        if (event.target == document.getElementById("overlay")) {
            hideModal();
        }
    };
});
