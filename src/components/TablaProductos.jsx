import { FilaCategoria } from "./FilaCategoria";
import { FilaProducto } from "./FilaProducto";

function TablaProductos({ productos }) {
    return (
        <table>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
            </tr>
            <FilaCategoria categoria={productos[0].categoria}/>
            {productos.map((p) => <FilaProducto producto={p} />)}
        </table>
    )
}

export { TablaProductos };