interface SalonImageProps {
    logo: string;
    name: string;
  }
  
  const SalonImage: React.FC<SalonImageProps> = ({ logo, name }) => {
    return (
      <img
        src={logo}
        alt={name}
        className="w-40 h-40 object-cover rounded-lg"
      />
    );
  };
  
  export default SalonImage;
  