import { TablaProductos } from "./components/TablaProductos"

const PRODUCTOS = [
  {categoria: "Cafetería", precio: "$90", stock: 10, nombre: "Espresso"},
  {categoria: "Cafetería", precio: "$120", stock: 15, nombre: "Cortado"},
  {categoria: "Cafetería", precio: "$160", stock: 0, nombre: "Capucchino"},
];


function App() {

  return (
    <>
    <h1>Anima Café</h1>
    <TablaProductos productos={PRODUCTOS}/>
    </>
  )
}

export default App
