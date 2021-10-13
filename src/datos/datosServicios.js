import ImgServiciosQuiromasaje from '../utils/images/servicios/servicioQuiromasaje.png';
import ImgServiciosOsteopatia from '../utils/images/servicios/servicioOsteopatia.png';
import ImgServiciosPresoterapia from '../utils/images/servicios/servicioPresoterapia.png';
import ImgServiciosDeportivo from '../utils/images/servicios/servicioDeportivo.png';
import ImgServiciosDietetico from '../utils/images/servicios/servicioDietetico.png';
import ImgServiciosBonos from '../utils/images/servicios/servicioBonos.png';
import ImgServiciosFacial from '../utils/images/servicios/servicioFacial.png';
import ImgServiciosTatoo from '../utils/images/servicios/servicioTatoo.png';

const quiromasaje = {
    imagen: ImgServiciosQuiromasaje,
    textoImagen: "Quiromasaje es una forma de masaje manual procedente del masaje sueco cuya técnica se basa en amasar, frotar y golpear las partes superficiales del cuerpo con las manos.",
    suxtextImagen:"La aplicación de vendaje neuromuscular no varía el precio.",
    quiromasajeDeportivo: 30,
    quiromasajeRelajante: 30,
    quiromasajeCirculatorio: 30,
    quiromasajeDescontracturante: 30,
    quiromasajeRecuperador: 30,
    quiromasajeDeportistas: 25,
    quiromasajeJubilados: 30,
}

const Osteopatia = {
    imagen:ImgServiciosOsteopatia,
    textoImagen:"Método de tratamiento de las dolencias que se basa en los masajes y la manipulación de las articulaciones; se fundamenta en la teoría de que el cuerpo es capaz de elaborar sus propios remedios contra las enfermedades.",
    subtextoImagen:"Se aplica gratuitamente a criterio profesional. No varía el precio del masaje."
}

const presoterapia = {
    imagen: ImgServiciosPresoterapia,
    textoImagen:"La presoterapia estimula el sistema linfático, generando un drenaje linfático, con el objetivo de eliminar líquidos, grasas y toxinas acumuladas en el organismo beneficiando la circulacion.",
    subtextoImagen:"",
    presoterapiaSesion: 30
}

const Deportivo = {
    imagen: ImgServiciosDeportivo,
    textoImagen:"¿Quieres una tabla de ejercicios? ¿Alguien que te asesore sobre tus entrenamientos? Ven y cuentanos tus propositos.",
    subtextoImagen:"Rutinas para entrenamiento personalizadas.",
    asesoramientoDeportivoVolumen: 20,
    asesoramientoDeportivoTonificacion: 20
}

const Dietetico = {
    imagen: ImgServiciosDietetico,
    textoImagen:"¿Quieres ganar o perder peso? Ven a vernos no te arrepentiras.",
    subtextoImagen:"",
    asesoramientoDieteticoPrimera: 25,
    asesoramientoDieteticoSeguimiento: 20
}

const bonos = {
    imagen: ImgServiciosBonos,
    textoImagen:"Siempre biene bien ahorrarse un dinero o tambien como regalo...regala salud.",
    subtextoImagen:"Bonos de seguimientos completos.",
    bonoMasajes3: 76,
    bonoMasajes6: 147,
    bonoMasajes10: 220,
    bonoAnticelulitico: 160,
    bonoDieta: 35
}

const facial = {
    imagen: ImgServiciosFacial,
    textoImagen: "Haz un regalo original para ocasiones especiales.",
    subtextoImagen:""
}

const tatoo = {
    imagen: ImgServiciosTatoo,
    textoImagen:"Si te has cansado de tu tatuaje, recuerda que se puede eliminar.",
    subtextoImagen:""
}

export {
    quiromasaje,
    Osteopatia,
    presoterapia,
    Deportivo,
    Dietetico,
    bonos,
    facial,
    tatoo
}
