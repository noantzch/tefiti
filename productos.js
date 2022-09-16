//arreglo con los productos
let lista_productos = [sah_duo, sah_energia, sah_chico, sah_sahumo, sah_sahumoespecial, sah_natural, sah_palo, sah_chackras, uti_botellas, cfac_aceitealmendras, uti_sorbetes, cfac_cremakarite, cfac_cremaalmendras, ccor_cremamango, cfac_cremacacao, cden_base, cden_pastapolvo];
//capturar div del html donde serán imprimidos
const productos = document.getElementById('productos');
//impresion de cada producto con un for
for(const producto of lista_productos){
    const div_producto = document.createElement('div');
    div_producto.className = "producto";
    productos.append(div_producto);
    div_producto.innerHTML =`<div class="card">
                                <img src="${producto.ubicacion_imagen}" class="card-img-top imgproducto" alt="producto">
                                <div class="card-body">
                                    <h6 class="card-title">${producto.nombre}</h6>
                                    <p class="card-text">Precio: $ ${producto.precio}</p>
                                    <a href="#carrito_total" type="button" class="btn btn-primary" id="${producto.codigo}">Agregar</a>
                                </div>
                            </div>`
}
//FILTRO
//capturar el boton y agregarle funcion
const btn_filtrar = document.getElementById("filtrar")
btn_filtrar.addEventListener("click", filtrar);
//capturo los input del filtro
const filtros = document.getElementsByClassName("filtros")
//funcion de filtrado
function filtrar(e){
    for(element of filtros){
        console.log(element.)
    }
}
