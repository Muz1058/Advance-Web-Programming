import { useServices } from "../context/ServicesContext";

const ServiceCard = ({ service }) => {
  const { deleteService } = useServices();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-slate-900">{service.name}</h2>
          <p className="text-sm text-slate-500">{service.category}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-right">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Rating
          </p>
          <p className="text-sm font-semibold text-slate-700">{service.rating}/5</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => deleteService(service.id)}
        className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200"
      >
        Delete
      </button>
    </div>
  )
}

export default ServiceCard
