import { BRAND } from "@/types/brand";
import Image from "next/image";
import { useEffect, useState } from "react";

const brandData: BRAND[] = [
  {
    title: "Coupon1",
    description: "sdfdsfdsfsdfdsfdsfsdfdsfdsf",
    code: "COUPONHUT",
    expiry: "2024-02-12",
  },
  {
    title: "Coupon1",
    description: "sdfdsfdsfsdfdsfdsfsdfdsfdsf",
    code: "COUPONHUT",
    expiry: "2024-02-12",
  },
  {
    title: "Coupon1",
    description: "sdfdsfdsfsdfdsfdsfsdfdsfdsf",
    code: "COUPONHUT",
    expiry: "2024-02-12",
  },
  {
    title: "Coupon1",
    description: "sdfdsfdsfsdfdsfdsfsdfdsfdsf",
    code: "COUPONHUT",
    expiry: "2024-02-12",
  },
  {
    title: "Coupon1",
    description: "sdfdsfdsfsdfdsfdsfsdfdsfdsf",
    code: "COUPONHUT",
    expiry: "2024-02-12",
  },
];

const TableOne = () => {
  const [brandData, setBrandData] = useState<BRAND[]>([]);

  useEffect(() => {
    const id = localStorage.getItem('id');
    console.log(id)

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/company/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.data.coupons);
        setBrandData(data.data.coupons);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Coupons
      </h4>

      <div className="flex flex-col">
        <div 
        className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4" 
        style={{ gridTemplateColumns: '1fr 1.5fr 1fr 1fr' }}
        >
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              title
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Description
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Code
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Expiry
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => {
          // const expiryDate = new Date(brand.expiry);
          // const formattedDate = `${expiryDate.getDate()}-${expiryDate.getMonth()+1}-${expiryDate.getFullYear()}`;
          // console.log(formattedDate); // Outputs: "12-2-2024"
          return(
          <div
            className={`grid grid-cols-4 sm:grid-cols-4 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            style={{ gridTemplateColumns: '1fr 1.5fr 1fr 1fr' }}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {brand.title}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.description}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{brand.code}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.expiry}</p>
            </div>

          </div>
        )})}
      </div>
    </div>
  );
};

export default TableOne;
