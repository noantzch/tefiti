//creacion de objetos para cada producto con un codigo, su nombre, tipo, precio, y url de su imagen
class Producto{
    constructor(codigo, nombre, tipo, precio, ubicacion_imagen, acumulador){
        this.codigo = codigo;
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.ubicacion_imagen = ubicacion_imagen;
    }
}
const sah_duo = new Producto(1, "Sahumerio Dúo", "Sahumerios", 500, "./images/sahumerios/saumerioduo_limpieza&armonia.png");
const sah_energia = new Producto(2, "Sahumerio Energía Limpia", "Sahumerios", 500, "./images/sahumerios/saumerioenergia_armonizar.png");
const sah_chico = new Producto(3, "Sahumerio chico", "Sahumerios", 300, "./images/sahumerios/sahumo_chico.jpg");
const sah_sahumo = new Producto(4, "Sahumos", "Sahumerios", 500, "./images/sahumerios/sahumo_mirra&palosanto.jpg");
const sah_sahumoespecial = new Producto (5, "Sahumos Especiales", "Sahumerios", 600, "./images/sahumerios/sahumo_10hierbas.JPG");
const sah_natural = new Producto (6, "Sahumerios Naturales", "Sahumerios", 400, "./images/sahumerios/sahumerio_inciensonatural.png");
const sah_palo = new Producto (7, "Sahumerios de Palo Santo", "Sahumerios", 400, "./images/sahumerios/palosanto.jpg");
const sah_chackras = new Producto (8, "Sahumerios 7 chakras", "Sahumerios", 500, "./images/sahumerios/sahumo_7chakras.png");
const uti_botellas = new Producto(9, "Botellas", "Utilidades", 6000, "./images/botellas/botella_roja.jpg");
const cfac_aceitealmendras = new Producto(10, "Aceite de Almendras 100cc", "Cuidado_Facial", 800, "./images/New folder/aceite_almendras.jpeg");
const uti_sorbetes= new Producto(11, "Kit de Sorbetes de Acero", "Utilidades", 500, "./images/otros/sorbetes.jpeg");
const cfac_cremakarite = new Producto(12, "Crema nocturna de Karité y Jojoba", "Cuidado_Facial", 2300, "./images/cuidado_facial/crema_karite.jpeg");
const cfac_cremaalmendras = new Producto(13, "Crema diurna de Almendras", "Cuidado_Facial", 2200, "./images/cuidado_facial/crema_almendras.jpeg");
const ccor_cremamango = new Producto(14, "Crema de Mango y Jojoba", "Cuidado_Corporal", 1900, "./images/cuidado_corporal/crema_mango.jpeg");
const cfac_cremacacao = new Producto(15, "Crema de Cacao y Argán", "Cuidado_Facial", 1700, "./images/cuidado_facial/crema_cacao.jpeg");
const cden_base = new Producto(16, "Base para Cepillo de Dientes", "Cuidado_Dental", 500, "./images/cuidado_dental/base_cepillos.jpeg");
const cden_pastapolvo = new Producto(17, "Pasta de Dientes en Polvo", "Cuidado_Dental", 700, "./images/cuidado_dental/pastadientes_polvo.jpeg");