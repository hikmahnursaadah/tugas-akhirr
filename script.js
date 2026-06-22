

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username != "" && password != "") {
        alert("Login Berhasil");
        window.location.href = "beranda.html";
    } else {
        alert("Isi username dan password terlebih dahulu");
    }
}


function tampilInfo(id){

    document.getElementById("lumba").style.display = "none";
    document.getElementById("hiu").style.display = "none";
    document.getElementById("gurita").style.display = "none";
    document.getElementById("penyu").style.display = "none";
    document.getElementById("kepiting").style.display = "none";
    document.getElementById("bintang").style.display = "none";
    document.getElementById("kuda").style.display = "none";
    document.getElementById("ubur").style.display = "none";

    document.getElementById(id).style.display = "block";

}
