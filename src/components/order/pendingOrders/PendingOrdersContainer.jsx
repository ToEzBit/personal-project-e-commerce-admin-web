import React from "react";
import { useOrder } from "../../../context/OrderContext";
import PendingOrdersItem from "./PendingOrdersItem";

function PendingOrdersContainer() {
  const { pendingOrder, setRerender } = useOrder();
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
                    <h1>Order Id</h1>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    <h1>Order Date</h1>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    <h1>Address</h1>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                  >
                    <h1>Tracking Number</h1>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                  >
                    <h1>ACTION</h1>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {pendingOrder &&
                  pendingOrder.map((el, idx) => {
                    return (
                      <PendingOrdersItem
                        key={idx}
                        id={el.id}
                        createdAt={el.createdAt}
                        address={el.Address}
                        setRerender={setRerender}
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

export default PendingOrdersContainer;
