import useFetchData from '../useFetchData';

export function useRead() {}
export function useCreate() {}
export function useUpdate() {}
export function useDelete() {
  return async function deleteProduct(deleteId) {
    //return Promise

    return await fetch(
      `${import.meta.env.VITE_PB_API}/collections/products/record/${deleteId}`
    );
  };
}
