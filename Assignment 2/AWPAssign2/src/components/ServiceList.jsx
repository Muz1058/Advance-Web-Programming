import ServiceCard from "./ServiceCard";

const ServiceList = ({ services }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
