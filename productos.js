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
                                    <a href="#carrito_total" type="button" class="btn btn-primary boton_agregar" id="${producto.codigo}">Agregar</a>
                                </div>
                            </div>`
}
//agrego funcion al "a" generados en el for anterior
let botones = document.getElementsByClassName("boton_agregar");
for(let element of botones){
    element.addEventListener("click", agregar);
}
//FILTRO

const btn_filtrar = document.getElementById("btn_filtrar");
let lista_filtrada = []
const filtros = document.getElementsByClassName("filtros");
let filtro_agregado = "";
let filtros_elegidos = [];
for(element of filtros){
    element.addEventListener("change", agregar_filtro)
}
function agregar_filtro (e){
    if(this.checked){
        filtro_agregado = e.target.value;
        filtros_elegidos.push(filtro_agregado);
        productos.innerHTML = ``

        if(filtros_elegidos.length > 0){
            for(element of filtros_elegidos){
                lista_filtrada = lista_productos.filter((el) => el.tipo.includes(element));
                for(const object of lista_filtrada){
                    const div_producto = document.createElement('div');
                    div_producto.className = "producto";
                    productos.append(div_producto);
                    div_producto.innerHTML =`<div class="card">
                                                <img src="${object.ubicacion_imagen}" class="card-img-top imgproducto" alt="producto">
                                                <div class="card-body">
                                                    <h6 class="card-title">${object.nombre}</h6>
                                                    <p class="card-text">Precio: $ ${object.precio}</p>
                                                    <a href="#carrito_total" type="button" class="btn btn-primary boton_agregar" id="${object.codigo}">Agregar</a>
                                                </div>
                                            </div>`
                    }
            }
        }else{
            for(const producto of lista_productos){
                const div_producto = document.createElement('div');
                div_producto.className = "producto";
                productos.append(div_producto);
                div_producto.innerHTML =`<div class="card">
                                            <img src="${producto.ubicacion_imagen}" class="card-img-top imgproducto" alt="producto">
                                            <div class="card-body">
                                                <h6 class="card-title">${producto.nombre}</h6>
                                                <p class="card-text">Precio: $ ${producto.precio}</p>
                                                <a href="#carrito_total" type="button" class="btn btn-primary boton_agregar" id="${producto.codigo}">Agregar</a>
                                            </div>
                                        </div>`
            }
        }
        //agrego funcion al "a" generados en el for anterior
        botones = document.getElementsByClassName("boton_agregar");
        for(let element of botones){
            element.addEventListener("click", agregar);
        }
    }else{
        filtro_agregado = e.target.value;
        let index = filtros_elegidos.indexOf(filtro_agregado);
        filtros_elegidos.splice(index, 1);
        productos.innerHTML = ``
        if(filtros_elegidos.length > 0){
            for(element of filtros_elegidos){
                lista_filtrada = lista_productos.filter((el) => el.tipo.includes(element));
                for(const object of lista_filtrada){
                    const div_producto = document.createElement('div');
                    div_producto.className = "producto";
                    productos.append(div_producto);
                    div_producto.innerHTML =`<div class="card">
                                                <img src="${object.ubicacion_imagen}" class="card-img-top imgproducto" alt="producto">
                                                <div class="card-body">
                                                    <h6 class="card-title">${object.nombre}</h6>
                                                    <p class="card-text">Precio: $ ${object.precio}</p>
                                                    <a href="#carrito_total" type="button" class="btn btn-primary boton_agregar" id="${object.codigo}">Agregar</a>
                                                </div>
                                            </div>`
                    }
            }
        }else{
            for(const producto of lista_productos){
                const div_producto = document.createElement('div');
                div_producto.className = "producto";
                productos.append(div_producto);
                div_producto.innerHTML =`<div class="card">
                                            <img src="${producto.ubicacion_imagen}" class="card-img-top imgproducto" alt="producto">
                                            <div class="card-body">
                                                <h6 class="card-title">${producto.nombre}</h6>
                                                <p class="card-text">Precio: $ ${producto.precio}</p>
                                                <a href="#carrito_total" type="button" class="btn btn-primary boton_agregar" id="${producto.codigo}">Agregar</a>
                                            </div>
                                        </div>`
            }
        }
        filtro_agregado = ""
        //agrego funcion al "a" generados en el for anterior
        botones = document.getElementsByClassName("boton_agregar");
        for(let element of botones){
            element.addEventListener("click", agregar);
        }
    }
}
//CARRITO
//boton de carrito
let btn_carrito = document.getElementById("btn_carrito");
let carritoInner = document.getElementById("carritoInner");
let contador_clicks = 0;
btn_carrito.addEventListener("click", function(e){
    if(contador_clicks == 0){
        carritoInner.classList.remove("nomostrar")
        carritoInner.classList.add("mostrar")
        btn_carrito.classList.remove("bi-cart")
        btn_carrito.classList.add("bi-cart-x")
        contador_clicks++;
    }else{
        carritoInner.classList.remove("mostrar")
        carritoInner.classList.add("nomostrar")
        btn_carrito.classList.remove("bi-cart-x")
        btn_carrito.classList.add("bi-cart")
        contador_clicks = 0;
    }
})

//capturo tabla del html donde iran los productos elegidos
const carrito = document.getElementById("carrito")
//creo un arreglo donde irán los precios de cada producto para sumarse al final 
let subtotal = [];
//funcion agregar al carrito
function agregar(e){
    for(const producto of lista_productos){
        //comparo el id que se puso antes en funcion del codigo de cada producto para acceder al producto elegido
        if(e.target.id == producto.codigo){
        const tr_producto_elegido = document.createElement('tr');    
        carrito.append(tr_producto_elegido);
        tr_producto_elegido.innerHTML = 
            `<td><img class="imagen_producto_elegido" src="${producto.ubicacion_imagen}"></img></td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td> <button class="btn btn-danger btn_eliminar" value="${producto.precio}">Eliminar</button> </td>`
        //agrego el precio al arreglo subtotal
        subtotal.push(producto.precio);
        //cambio el texto donde va el calculo total, poninendo el return de la funcion que lo calcula
        let precio_total = document.getElementById("precio_total");
        precio_total.innerText = "$" + calculo_total();
        //notificacion
        Toastify({
            text: "Agregaste un producto al carrito",
            duration: 1500,
            style: {
                background: "#04547c",
            }
        }) .showToast();
        }
        //funcion al boton agregar
        let botones_eliminar = document.getElementsByClassName("btn_eliminar");
        for(let element of botones_eliminar){
            element.addEventListener("click", eliminar);
        }
    }
}
//funcion que suma los precios en el arreglo subtotal
function calculo_total(){
    let resultado_total = 0;
    for(let i = 0; i < subtotal.length; i++){
        resultado_total += subtotal[i]
    }
    return resultado_total
}
//funcion para eliminar del carrito
function eliminar(e){
    
    //capturo el nodo donde esta toda la info del producto y elimino
    let abuelo = e.target.parentNode.parentNode
    abuelo.remove()

    //actualizo arreglo subtotal
    para_restar_al_arreglo = (e.target.value) * -1;
    subtotal.push(para_restar_al_arreglo)
    
    
    //cambio el texto donde va el calculo total, poninendo el return de la funcion que lo calcula
    let precio_total = document.getElementById("precio_total");
    precio_total.innerText = "$" + calculo_total();

    //notificacion
    Toastify({
        text: "Eliminaste un producto del carrito",
        duration: 1500,
        style: {
            background: "red",
        }
    }) .showToast();
}

