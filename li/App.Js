// script.js
let productList = [];

function addProduct() {
    const name = document.getElementById('productName').value;
    const code = document.getElementById('productCode').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    const price = parseFloat(document.getElementById('price').value);

    if (name && code && quantity >= 0 && price >= 0) {
        const product = {
            name,
            code,
            quantity,
            price
        };

        // Verificar si el producto ya existe (mismo código)
        const existingProductIndex = productList.findIndex(p => p.code === code);
        if (existingProductIndex !== -1) {
            // Actualizar cantidad si el producto ya existe
            productList[existingProductIndex].quantity += quantity;
            alert('Producto actualizado');
        } else {
            // Agregar nuevo producto
            productList.push(product);
            alert('Producto agregado');
        }

        // Limpiar campos del formulario
        document.getElementById('productName').value = '';
        document.getElementById('productCode').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('price').value = '';

        renderTable();
    } else {
        alert('Por favor, ingrese todos los campos correctamente.');
    }
}

function renderTable() {
    const tableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Limpiar tabla

    productList.forEach(product => {
        const row = tableBody.insertRow();

        row.insertCell(0).textContent = product.name;
        row.insertCell(1).textContent = product.code;
        row.insertCell(2).textContent = product.quantity;
        row.insertCell(3).textContent = `$${product.price.toFixed(2)}`;
        
        const actionsCell = row.insertCell(4);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function() { deleteProduct(product.code); };
        actionsCell.appendChild(deleteButton);
    });
}

function deleteProduct(code) {
    productList = productList.filter(product => product.code !== code);
    renderTable();
}
