import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCart from "../components/mycomponents/ProductCart";
import { motion } from "framer-motion";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-12">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-center"
          >
            Current Products 🚀
          </motion.h1>

          {/* Products grid */}
          {products.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
            >
              {products.map((product) => (
                <motion.div
                  key={product._id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductCart product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty state */
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-semibold text-gray-600 dark:text-gray-400 text-center"
            >
              No products found 😢
              <Link
                to="/create"
                className="text-blue-500 hover:underline ml-1"
              >
                Create a product
              </Link>
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
