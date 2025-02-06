import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import productData from "../../data/productData";

function ProductDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-4 text-center text-red-500 text-lg sm:text-xl">
        {t("productDetail.notFound")}
      </div>
    );
  }

  // Seçilen dile göre ürün verileri
  const productName = product.name[i18n.language];
  const productDescription = product.description[i18n.language];
  const productPrice = product.price[i18n.language];

  return (
    <div className="p-4 min-h-screen flex flex-col md:flex-row items-center gap-8 bg-amber-50">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={`/images/products/${product.image}`}
          alt={productName}
          className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{productName}</h1>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-2">{productDescription}</p>
        <p className="font-bold text-lg sm:text-xl md:text-2xl text-yellow-600">{productPrice}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
