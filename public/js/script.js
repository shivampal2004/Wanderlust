// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
})();

// MAP
var map = L.map('map').setView([28.6139, 77.2088], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; Wanderlust Private Limited'
    }).addTo(map);

// TAX-SWITCH
let taxSwitch= document.getElementById("switchCheckReverse");
taxSwitch.addEventListener("click", ()=>{
    let taxInfo= document.getElementsByClassName("tax-info");
    for(info of taxInfo){
        if(info.style.display != "inline"){
            info.style.display = "inline";
        } else {
            info.style.display = "none";
        }
    }
});