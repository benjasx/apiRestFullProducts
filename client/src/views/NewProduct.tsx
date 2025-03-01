import { Link } from "react-router-dom";


export default function NewProduct() {
  return (
    <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Registrar productos</h2>
                <Link
                    to="/"
                    className="bg-indigo-600 rounded-md p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
                >
                    Ver productos
                </Link>
            </div>
        </>
  )
}
