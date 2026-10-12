import Swal from "sweetalert2";

const atributosPersonaje={
    "Goku":{
        atk_basico:"kame Hame Ha!",
        atk_especial:"Luego nos vemos en el cielo",
        fondo: "rgba(237,22,7,0.5)",
    },
    "Cell":{
        atk_basico:"Toma eso",
        atk_especial:"Kame Hame Ha!",
        fondo: "rgba(237,22,7,0.5)",
    },
    "Gogueta":{
        atk_basico:"Haaah!",
        atk_especial:"Mueree!",
        fondo: "rgba(237,22,7,0.5)",
    },
    "Gohan":{
        atk_basico:"kame Hame Ha!",
        atk_especial:"Muereeee!",
        fondo: "rgba(237,22,7,0.5)",
    },
    "Pikoro":{
        atk_basico:"Adiós insecto",
        atk_especial:"Niñoooo!",
        fondo: "rgba(237,22,7,0.5)",
    },
    "Trunks":{
        atk_basico:"Espadazo",
        atk_especial:"Espadazo fuerte",
        fondo: "rgba(237,22,7,0.5)",
    },
    "Veguetta":{
        atk_basico:"Muere insecto",
        atk_especial:"Muereeee!",
        fondo: "rgba(237,22,7,0.5)",
    },
    "Veguito":{
        atk_basico:"kame Hame Ha!",
        atk_especial:"Muereeee!",
        fondo: "rgba(237,22,7,0.5)",
    }   
}

const finalizarTurno = (jugadorEnTurno, adversario) => {
    jugadorEnTurno.setEsSuTurno(false);
    adversario.setEsSuTurno(true);
};

const atk_basico = (j1, j2) => {
    j1.atkBasico();
    j2.setVida(j2.getVida() - 10 < 1 ? 0 : j2.getVida() - 10);
    Swal.fire({
        text: atributosPersonaje[j1.getPersonaje()].atk_basico,
        title: "Ataque basico",
        imageUrl: `./public/img/${j1.getPersonaje()}/basico.png`,
        imageWidth: 300,
        imageHeight: 300,
        position: "center-center",
        width: 600,
        color: "#fff",
        background: "none",
        imageAlt: "Ataque Basico",
        showConfirmButton: false,
        timer: 1500
    });

    j1.aumentarContadorAtk_especial();

    finalizarTurno(j1, j2);
};

const atk_especial = (j1, j2) => {
        if (j1.getContadorAtk_especial() >= 2){
            j1.atkEspecial();
            j2.setVida(j2.getVida() - 20 < 1 ? 0 : j2.getVida() - 20);

            Swal.fire({
                text: atributosPersonaje[j1.getPersonaje()].atk_especial,
                title: "Ataque Especial",
                imageUrl: `./public/img/${j1.getPersonaje()}/especial.png`,
                imageWidth: 300,
                imageHeight: 300,
                position: "center-center",
                width: 600,
                color: "#fff",
                background: "none",
                imageAlt: "Ataque Especial",
                showConfirmButton: false,
                timer: 1500
            });

            j1.setContadorAtk_especial(0);
            finalizarTurno(j1, j2);
        } else {
            const turnosFaltantes = 2 - j1.getContadorAtk_especial();
            Swal.fire({
                icon: "warning",
                title: "Habilidad en recarga",
                text: `Debes esperar ${turnosFaltantes} turno para usar el ataque especial`
            })
        }
    };

const carga_energia = (j1, j2) => {
    j1.cargaEnergia();

    Swal.fire({
        text: "¡Recuperando energía!",
        title: "Cargar Ki",
        imageUrl: `./public/img/${j1.getPersonaje()}/base.png`,
        imageWidth: 300,
        imageHeight: 300,
        position: "center-center",
        width: 600,
        color: "#fff",
        background: "none",
        showConfirmButton: false,
        timer: 1500
    });
    j1.aumentarContadorAtk_especial();
    finalizarTurno(j1, j2);
};

const estadisticasJ1 = (j1) => {
    return j1.getVida() == 100 &&
           j1.getKi() == 100 &&
           j1.getEnergia() == 100;
};

const usar_semilla = (j1, j2) => {

    if (j1.getSemilla() > 0) {

        if (estadisticasJ1(j1)) {
            Swal.fire({
                icon: "warning",
                title: "¡No puedes usar la semilla!",
                text: "Tus estadísticas ya están al máximo"
            });
            return;
        }

        j1.curacion();

        Swal.fire({
            text: "¡Salud, Ki y Energía restaurados!",
            title: "Semilla del Ermitaño",
            imageUrl: `./public/img/${j1.getPersonaje()}/curar.png`,
            imageWidth: 300,
            imageHeight: 300,
            position: "center",
            width: 600,
            color: "#fff",
            background: "none",
            showConfirmButton: false,
            timer: 1500
        });

        j1.aumentarContadorAtk_especial();
        finalizarTurno(j1, j2);

    } else {
        Swal.fire({
            icon: "warning",
            title: "¡Error!",
            text: "No tienes semillas para curarte"
        });
    }
};


export { atk_basico, atk_especial, carga_energia, usar_semilla };