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

const btn_filtrar = document.getElementById("btn_filtrar");
let lista_filtrada = []
const filtros = document.getElementsByClassName("filtros");
let filtro_agregado = "";
let filtos_elegidos = [];
for(element of filtros){
    element.addEventListener("change", agregar_filtro)
}
function agregar_filtro (e){
    if(this.checked){
        filtro_agregado = e.target.value;
        //filtos_elegidos.push(filtro_agregado);
        //console.log(filtos_elegidos);
    }else{
        filtro_agregado = ""
    }
}
btn_filtrar.addEventListener("click", filtrar);
function filtrar(){
    lista_filtrada = lista_productos.filter((el) => el.tipo.includes(filtro_agregado));
    productos.innerHTML = ``
    for(const object of lista_filtrada){
        const div_producto = document.createElement('div');
        div_producto.className = "producto";
        productos.append(div_producto);
        div_producto.innerHTML =`<div class="card">
                                    <img src="${object.ubicacion_imagen}" class="card-img-top imgproducto" alt="producto">
                                    <div class="card-body">
                                        <h6 class="card-title">${object.nombre}</h6>
                                        <p class="card-text">Precio: $ ${object.precio}</p>
                                        <a href="#carrito_total" type="button" class="btn btn-primary" id="${object.codigo}">Agregar</a>
                                    </div>
                                </div>`
    }
}
