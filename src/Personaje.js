//Se hace un molde, todo personaje que cree a partir de aquí tendrá estas características y comportamientos.
class Personaje{
    #vida=100;
    #ki=100;
    #energia=100;
    #semilla=2;
    #personaje;
    #nombre;
    #turno = false;

    constructor(nombre,personaje){
        this.#nombre=nombre;  
        this.#personaje= personaje;
        this.mostrarEstadisticas()
    }

    mostrarEstadisticas(){
        //Este método pertenece a cada objeto
        console.log(`
            nombre:${this.#nombre},

            *************************
            vida:${this.#vida},
            ki:${this.#ki},
            energia:${this.#energia},
            semilla:${this.#semilla},
        `);
    }
  // GET Dame la vida que tengo guardada dentro del atributo privado
    getPersonaje(){
        return this.#personaje;
    }
    getVida(){
        return this.#vida;
    }

    getKi(){
        return this.#ki;
    }

    getEnergia(){
        return this.#energia;
    }

    getSemilla(){
        return this.#semilla;
    }

    getNombre(){
        return this.#nombre;
    }
     //SET Recibo un nuevo valor de vida y se lo asigno a mi atributo privado
    setVida(vida){
        this.#vida=vida;
    }

    setKi(ki){
        this.#ki=ki;
    }
    setEnergia(energia){
        this.#energia=energia;
    }

    setSemilla(semilla){
        this.#semilla = semilla;
    }

    getEsSuTurno() {
        return this.#turno;
    }

    setEsSuTurno(turno) {
        this.#turno = turno;
    }

    
}
export default Personaje;