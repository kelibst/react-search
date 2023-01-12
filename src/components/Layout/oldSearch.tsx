import { FormEvent, useState } from "react";
import OrderTable from "./OrderTable";

interface Order {
  orderId: number;
  customer: {
    name: string;
    email: string;
    shippingAddress: string;
  };
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  orderDate: Date;
  totalAmount: number;
  paymentMethod: string;
  shippingMethod: string;
  trackingNumber: string;
  status: string;
  shippingAddress: string;
  discounts: number;
}

const Search = () => {
  const [itemNumbers, setItemNumbers] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [allOrders, setAllOrders] = useState(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [errMsg, setErrMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    console.log("fetching...");
    try {
      const res = await fetch("src/api/orders.json");
      const data = await res.json();

        setAllOrders(data);
        setOrders(data)
    } catch (error) {
      setErrMsg(error?.message);
      console.log(errMsg, "<---");
    }
  };

  const findOrdersById = (orders: Order[], ids: number[]) => {
    const result = orders.filter((order) => ids.includes(order.orderId));
    console.log("*88", result);

    return result;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const searchByIdResult = await findOrdersById(orders, [1, 2, 3]);
    setOrders(searchByIdResult);
    console.log(orders);
  };
  return (
    <>
      <div className="flex justify-between shadow items-center">
        <div>
          <h3>Item Search</h3>
          <p>0 items</p>
        </div>
        <div className="flex">
          <form className="" onSubmit={handleSubmit}>
            <input
              type="text"
              className="border-2 border-gray-400 rounded-sm outline-none"
            />
            <button>search</button>
          </form>
        </div>
      </div>
      <main className="flex flex-col w-full h-full items-center justify-center gap-2">
        {!allOrders ? (
          <>
            <strong className="text-2xl">What are you looking for?</strong>

            <p className="text-xs text-[#778FAB]">
              Get started by searching & filtering a few
            </p>
            <button
              className="bg-[#0C67A0] text-white text-sm py-2 px-10 rounded-sm"
              onClick={fetchData}
            >
              Fetch data
            </button>
            <p className="text-xs text-[#778FAB]">or search for an item</p>
          </>
        ) : (
          <>{errMsg ? <p>{errMsg}</p> : <OrderTable orders={orders} />}</>
        )}
      </main>
    </>
  );
};

export default Search;