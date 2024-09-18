import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";

const SignUpImage = () => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-[#86664B] w-1/2">
    <motion.img
      initial="hidden"
      animate="show"
      variants={fadeIn("left", 0.1)}
      className="h-[600px] w-[400px] object-cover rounded-t-full"
      src="https://serapool.fra1.cdn.digitaloceanspaces.com/media/4749/what-is-spa-serapool.jpg"
    />
  </div>
  
  );
};

export default SignUpImage;
