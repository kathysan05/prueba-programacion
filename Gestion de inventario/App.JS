// Función para registrar en el Inventario
function registrarInventario() {
    let codigo = document.getElementById("codigoInv").value;
    let articulo = document.getElementById("articulo").value;
    let entrada = parseInt(document.getElementById("entrada").value) 
    let salida = parseInt(document.getElementById("salida").value) 
    let stock = parseInt(document.getElementById("stock").value) 

    if (!codigo || !articulo) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    let tabla = document.getElementById("tablaInventario").getElementsByTagName("tbody")[0];
    let newRow = tabla.insertRow();
    
    newRow.innerHTML = `
        <td>${codigo}</td>
        <td>${articulo}</td>
        <td>${entrada}</td>
        <td>${salida}</td>
        <td>${stock + entrada - salida}</td>
    `;

    limpiarCampos(["codigoInv", "articulo", "entrada", "salida", "stock"]);
}

// Función para registrar una Venta
function registrarVenta() {
    let codigo = document.getElementById("codigoVenta").value;
    let producto = document.getElementById("productoVenta").value;
    let cantidad = parseInt(document.getElementById("cantidadVenta").value) || 0;

    if (!codigo || !producto || cantidad <= 0) {
        alert("Por favor, ingrese datos válidos.");
        return;
    }

    let tabla = document.getElementById("tablaVentas").getElementsByTagName("tbody")[0];
    let newRow = tabla.insertRow();
    
    newRow.innerHTML = `
        <td>${codigo}</td>
        <td>${producto}</td>
        <td>${cantidad}</td>
    `;

    limpiarCampos(["codigoVenta", "productoVenta", "cantidadVenta"]);
}

// Función para registrar una Compra
function registrarCompra() {
    let codigo = document.getElementById("codigoCompra").value;
    let producto = document.getElementById("productoCompra").value;
    let cantidad = parseInt(document.getElementById("cantidadCompra").value) || 0;

    if (!codigo || !producto || cantidad <= 0) {
        alert("Por favor, ingrese datos válidos.");
        return;
    }

    let tabla = document.getElementById("tablaCompras").getElementsByTagName("tbody")[0];
    let newRow = tabla.insertRow();
    
    newRow.innerHTML = `
        <td>${codigo}</td>
        <td>${producto}</td>
        <td>${cantidad}</td>
    `;

    limpiarCampos(["codigoCompra", "productoCompra", "cantidadCompra"]);
}

// Función para limpiar campos después de registrar datos
function limpiarCampos(ids) {
    ids.forEach(id => document.getElementById(id).value = "");
}