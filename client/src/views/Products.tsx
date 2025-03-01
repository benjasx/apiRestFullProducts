import { Link } from "react-router-dom";

export default function Products() {
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Productos</h2>
                <Link
                    to="Producto/nuevo"
                    className="bg-indigo-600 rounded-md p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
                >
                    Agregar Productos
                </Link>
            </div>
        </>
    )
}
