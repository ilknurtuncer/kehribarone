import { useParams } from 'react-router-dom';
import productData from '../data/productData';

function ProductDetail() {
  const { id } = useParams(); // URL'den ürün ID'sini al
  const product = productData.find((p) => p.id === parseInt(id)); // Ürünü bul

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full max-w-md mx-auto mb-4" />
      <p>{product.description}</p>
      <p className="font-bold text-lg">{product.price}</p>
    </div>
  );
}

export default ProductDetail;
