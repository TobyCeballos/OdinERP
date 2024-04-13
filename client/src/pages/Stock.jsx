import React, { useState } from "react";

const products = [
  {
    product_id: 1,
    product_name: "Producto 1",
    product_provider: "Proveedor 1 S.A.",
    provider_product_id: "N/A",
    description: "Este es la descripción del producto uno.",
    category: "Categoria 1",
    brand: "Marca 1",
    purchase_price: "$56,789",
    current_price: "$65,432",
    sale_price: "$86,778",
    unit_measurement: "Metro",
    stock: "10 unidades",
    min_stock: 10,
    max_stock: 50,
    upload_date: "10/01/2022",
    modification_date: "15/02/2022",
    product_state: "Activo",
    notes: "",
    product_image: "N/A",
  },
  {
    product_id: 2,
    product_name: "Producto 2",
    product_provider: "Proveedor 2 S.A.",
    provider_product_id: "N/A",
    description: "Este es la descripción del producto dos.",
    category: "Categoria 2",
    brand: "Marca 2",
    purchase_price: "$78,910",
    current_price: "$98,765",
    sale_price: "$123,456",
    unit_measurement: "Kilogramo",
    stock: "20 unidades",
    min_stock: 5,
    max_stock: 30,
    upload_date: "12/03/2022",
    modification_date: "20/04/2022",
    product_state: "Activo",
    notes: "",
    product_image: "N/A",
  },
  {
    product_id: 3,
    product_name: "Producto 3",
    product_provider: "Proveedor 3 S.A.",
    provider_product_id: "N/A",
    description: "Este es la descripción del producto tres.",
    category: "Categoria 1",
    brand: "Marca 3",
    purchase_price: "$34,567",
    current_price: "$45,678",
    sale_price: "$56,789",
    unit_measurement: "Litro",
    stock: "15 unidades",
    min_stock: 8,
    max_stock: 25,
    upload_date: "25/05/2022",
    modification_date: "30/06/2022",
    product_state: "Activo",
    notes: "",
    product_image: "N/A",
  },
];

const tableHead = [
  "ID",
  "Nombre",
  "Proveedor",
  "id. prov",
  "Descripción",
  "Categoría",
  "Marca",
  "Costo de compra",
  "Costo actual",
  "Precio",
  "Unidad",
  "Cantidad",
  "Min. qty",
  "Max. qty",
  "F. de carga",
  "F. Modif",
  "Estado",
];

function TableFilter({ toggleColumnVisibility }) {
  return (
    <>
      {tableHead.map((header, index) => (
        <label key={index}>
          <input
            type="checkbox"
            onChange={() => toggleColumnVisibility(index)}
          />
          {header}
        </label>
      ))}
    </>
  );
}

function TableBody({ products, hiddenColumns }) {
  return (
    <tbody>
      {products.map((product, rowIndex) => (
        <tr key={rowIndex}>
          {Object.keys(product).map(
            (key, colIndex) =>
              !hiddenColumns.includes(colIndex) && (
                <td key={colIndex}>{product[key]}</td>
              )
          )}
        </tr>
      ))}
    </tbody>
  );
}

function Stock() {
  const [hiddenColumns, setHiddenColumns] = useState([]);

  const toggleColumnVisibility = (index) => {
    if (hiddenColumns.includes(index)) {
      setHiddenColumns(hiddenColumns.filter((col) => col !== index));
    } else {
      setHiddenColumns([...hiddenColumns, index]);
    }
  };

  return (
    <div className="pt-20 px-5">
      <table>
        <thead>
            <tr>
          {tableHead.map((head, rowIndex) => (
            <th className="whitespace-nowrap" key={rowIndex}>{head}</th>
              ))}
            </tr>
        </thead>
        <TableBody products={products} hiddenColumns={hiddenColumns} />
      </table>
    </div>
  );
}

export default Stock;
