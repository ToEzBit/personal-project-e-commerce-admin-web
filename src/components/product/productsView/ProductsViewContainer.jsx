import React from "react";
import { useProduct } from "../../../context/ProductContext";
import ProductViewItem from "./ProductViewItem";

function ProductsViewContainer() {
  const { products } = useProduct();

  return (
    <div className="flex flex-col mt-12">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    <h1>Product Id</h1>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    <h1>Product Name</h1>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    <h1>Product Category</h1>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                  >
                    <h1>Product Price</h1>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                  >
                    <h1>Product Stock</h1>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                  >
                    <h1>Status</h1>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {products &&
                  products.map((el, idx) => {
                    return (
                      <ProductViewItem
                        key={idx}
                        id={el.id}
                        productName={el.productName}
                        category={el.category}
                        price={el.price}
                        stock={el.stock}
                        status={el.status}
                      />
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsViewContainer;
