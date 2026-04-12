import { useState } from "react"
import ServiceList from "../components/ServiceList";
import { useServices } from "../context/ServicesContext";

const Service = () => {
  const { services, loading, error } = useServices()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredServices = services.filter((service) => {
    const searchValue = searchTerm.toLowerCase()

    return (
      service.name.toLowerCase().includes(searchValue) ||
      service.category.toLowerCase().includes(searchValue)
    )
  })

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Services</h1>
          <p className="mt-2 text-sm text-slate-500">
            Search, review, and manage services in one place.
          </p>
        </div>

        <div className="w-full md:max-w-xs">
          <label
            htmlFor="service-search"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Search services
          </label>
          <input
            id="service-search"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by name or category"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
          />
        </div>
      </div>

      {loading ? (
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center text-slate-600 shadow-sm">
          Loading...
        </div>
      ) : error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center text-red-700 shadow-sm">
          {error}
        </div>
      ) : filteredServices.length > 0 ? (
        <ServiceList services={filteredServices} />
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center text-slate-600">
          No services match your search.
        </div>
      )}
    </section>
  )
}

export default Service
