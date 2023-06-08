import React, { useState, useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

export default function BUyNowBill() {
  const [billingData, setBillingData] = useState([]);
  const email_id = sessionStorage.getItem('email');
  const navigate=useNavigate();
  const { code } = useParams();
  const p_Id = code;
  console.log("quantity")
  const quantity =sessionStorage.getItem("Quantity")
  
  
  
  
  useEffect(() => {
    // Fetch billing data from the server
  if(p_Id){
    fetchBillingData();
    console.log(p_Id)
  }
  }, []);

  const fetchBillingData = () => {
    fetch(`https://server3-route-omkar-07-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/api/productdetails/${p_Id}`)
      .then((response) => response.json())
      .then((data) => {
        setBillingData(data);
        console.log('bill', data); // Moved console.log here to log the received data
      console.log(data[0].product.p_Image)
      })
      .catch((error) => console.log(error));
  };
const handlePay = () =>{
  window.print();
//   navigate("/productdetails")

}
  const calculateTotalCost = () => {
    const total = billingData.reduce((acc, billingItem) => {
      const discountedPrice = (billingItem[6] * billingItem[3]) - (billingItem[6] * billingItem[3]) * 0.1;
      return acc + discountedPrice;
    }, 0);
    return total.toFixed(2);
  };
  const handleRemove =()=>{
    console.log("handle")
  }

  return (
    <div className="flex justify-center mb-5">
    <div>
      <h2>Billing Page</h2>
      <table className="border-collapse border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Product Image</th>
            <th className="border px-4 py-2">Product Name</th>
            <th className="border px-4 py-2">Price/unit</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Total Cost</th>
            <th className="border px-4 py-2">Discounted Price</th>
          </tr>
        </thead>
        <tbody>
          {billingData.map((billingItem, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">
                <img className="h-64" src={billingItem.product.p_Image} alt="Product" />
              </td>
              <td className="border px-4 py-2">{billingItem.product.p_Name}</td>
              <td className="border px-4 py-2">&#8377;{billingItem.product.p_Price}</td>
              <td className="border px-4 py-2">{sessionStorage.getItem("Quantity")}</td>
              <td className="border px-4 py-2">&#8377;{(billingItem.product.p_Price * quantity)}</td>
              <td className="border px-4 py-2">
                &#8377;
                {((billingItem.product.p_Price * quantity) - (billingItem.product.p_Price * quantity) * 0.1).toFixed(2)}</td>
              {handleRemove()}
            </tr>
            
          ))}
        </tbody>
       
      </table>
      <div className='flex justify-center mt-4'>
      <button className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2 mb-3 " onClick={handlePay}>
       Print Bill
        </button>
    </div>
    </div>
  </div>
  )
}
