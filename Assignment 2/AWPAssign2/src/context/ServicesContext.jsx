import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ServicesContext = createContext(null);

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const formattedServices = response.data.map((user, index) => ({
          id: user.id,
          name: user.company?.name || user.name,
          category: user.company?.bs
            ? user.company.bs
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            : "General Service",
          rating: Number((3.5 + (index % 3) * 0.5).toFixed(1)),
        }));

        setServices(formattedServices);
      } catch {
        setError("Failed to load services. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const addService = (serviceData) => {
    setServices((currentServices) => [
      ...currentServices,
      {
        id: Date.now(),
        ...serviceData,
        rating: Number(serviceData.rating),
      },
    ]);
  };

  const deleteService = (serviceId) => {
    setServices((currentServices) =>
      currentServices.filter((service) => service.id !== serviceId)
    );
  };

  return (
    <ServicesContext.Provider
      value={{ services, addService, deleteService, loading, error }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServicesContext);

  if (!context) {
    throw new Error("useServices must be used within a ServicesProvider");
  }

  return context;
};

export default ServicesContext;
