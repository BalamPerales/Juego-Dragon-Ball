import Swal from "sweetalert2";

const msj_error = (msj) => {
    Swal.fire({ icon: "warning", title: "Error!", text: msj });
}

const pantalla_carga = () => {
    Swal.fire({
        title: 'Prepárate para el combate...',
        //
        html: '<img src="./public/img/images.jpeg" style="width: 200px; margin-bottom: 15px;"><br><b></b> milisegundos...',
        timer: 3000,
        timerProgressBar: true,
        allowOutsideClick: false,
        showConfirmButton: false,
        color: "#fff",
        background: "rgba(0,0,0,0.8)",
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            setInterval(() => {
                if(timer) timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        }
    });
}

export { msj_error, pantalla_carga };