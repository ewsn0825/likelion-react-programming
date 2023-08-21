import useFetchData from './useFetchData';

const getEndpoint = (productId) =>
  `${import.meta.env.VITE_PB_API}/collections/products/records/${productId}`;

function useProductItem(productId) {
  return useFetchData(getEndpoint(productId));
}

<<<<<<< HEAD
export default useProductItem;
=======
export default useProductItem;
>>>>>>> 2e739a58ff822b46fb223455211698b14659f23a
