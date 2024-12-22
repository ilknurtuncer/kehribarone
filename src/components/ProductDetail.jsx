import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import productData from "../data/productData";

function ProductDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation(); // Burada 't' ve 'i18n' ikisini de aldık

  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-4 text-center text-red-500">
        {t("productDetail.notFound")}
      </div>
    );
  }

  // Seçilen dile göre ürün verilerini alıyoruz
  const productName = product.name[i18n.language];
  const productDescription = product.description[i18n.language];
  const productPrice = product.price[i18n.language];

  return (
    <div className="p-4 flex flex-col md:flex-row gap-8 bg-amber-50">
      <img
        src={`/images/products/${product.image}`}
        alt={productName}
        className="w-full max-w-md rounded-lg shadow-md"
      />
      <div>
        <h1 className="text-2xl font-bold mb-4">{productName}</h1>
        <p className="text-gray-700 mb-2">{productDescription}</p>
        <p className="font-bold text-lg text-yellow-600">{productPrice}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
