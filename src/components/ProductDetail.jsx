import { useParams } from "react-router-dom";
import { useLanguageContext } from "../context/LanguageContext";
import productData from "../data/productData";

function ProductDetail() {
  const { id } = useParams(); // URL'den ürün ID'sini al
  const { translations } = useLanguageContext();
  const product = productData.find((p) => p.id === parseInt(id)); // Ürünü bul

  if (!product) {
    return (
      <div className="p-4 text-center text-red-500">
        {translations.productDetail?.notFound || "Product not found."}
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col md:flex-row gap-8">
      <img
        src={`/images/products/${product.image}`} // Resim yolunu dinamik oluştur
        alt={product.name}
        className="w-full max-w-md rounded-lg shadow-md"
      />
      <div>
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-2">
          {translations.productDetail?.description || product.description}
        </p>
        <p className="font-bold text-lg text-yellow-600">
          {translations.productDetail?.price || product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
