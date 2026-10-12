import Personaje from "./Personaje.js";
// Accionnes es una clase heredadas de Personaje
//un objeto de Accionnes tendrá acceso a los métodos públicos que herede de personajes  
class  Acciones extends Personaje{

    #contadorAtk_especial = 2;

    constructor(nombre, personaje){
        //super() llama al constructor de la clase padre
        super(nombre, personaje);
    }

    getContadorAtk_especial() {
        return this.#contadorAtk_especial;
    }

    setContadorAtk_especial(valor) {
        this.#contadorAtk_especial = valor;
    }

    aumentarContadorAtk_especial() {
        this.#contadorAtk_especial++;
    }
    
    atkBasico(){
        this.setEnergia(this.getEnergia() - 5 < 0 ? 0 : this.getEnergia() - 5);
        this.setKi(this.getKi() - 10 < 0 ? 0 : this.getKi() - 10);
        this.mostrarEstadisticas();
    }

    atkEspecial(){
        this.setEnergia(this.getEnergia() - 15 < 0 ? 0 : this.getEnergia() - 15);
        this.setKi(this.getKi() - 20 < 0 ? 0 : this.getKi() - 20);
        this.mostrarEstadisticas();
    }

    curacion(){
        this.setEnergia(100);
        this.setKi(100);
        this.setVida(100);
        this.setSemilla(this.getSemilla() - 1);
        this.mostrarEstadisticas();
    }

    cargaEnergia(){
        this.setEnergia((this.getEnergia() + 15) > 100 ? 100 : (this.getEnergia() + 15));
        this.setKi((this.getKi() + 10) > 100 ? 100 : (this.getKi() + 10));
        this.mostrarEstadisticas();
    }
    
    defensa(){

    }
}

export default Acciones;