import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useProductStore } from "../../store/product";
import { toast } from "react-hot-toast";

const ProductCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();

  const handleDelete = async () => {
    const { success, message } = await deleteProduct(product._id);
    toast[success ? "success" : "error"](message);
  };

  const handleSave = async () => {
    // ensure price is number
    const payload = { ...updatedProduct, price: Number(updatedProduct.price) };
    const { success, message } = await updateProduct(product._id, payload);
    toast[success ? "success" : "error"](success ? "Product updated" : message);
    if (success) setIsOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 font-bold">₹{product.price}</p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          <FaEdit /> Edit
        </button>
        <button
          onClick={handleDelete}
          className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          <FaTrash /> Delete
        </button>
      </div>

      {/* Dialog */}
      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-50">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md">
            <Dialog.Title className="text-xl font-bold mb-4">
              Edit Product
            </Dialog.Title>

            <div className="space-y-4">
              <input
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
                placeholder="Product Name"
              />
              <input
                type="number"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                }
                placeholder="Price"
              />
              <input
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, image: e.target.value })
                }
                placeholder="Image URL"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Save
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Cancel
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default ProductCard;
