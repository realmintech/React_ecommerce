import React from "react";

function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-2">
          <div id="Pbtn">
            <button class="mx-2">Welcome To Your Delivery Page</button>
          </div>
          <div className="col">
            <h1 NameclassName="text-center">PAYMENT SECTION</h1>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <b>SUPPLIER</b>
            <h3>RealMinTech Stores</h3>
            <address>12,Osunbukola street,Dada Estate.Osogbo</address>
            <p>08133433956</p>
          </div>
          <div className="col">
            <b>CLIENT</b>
            <h3>Client's Name</h3>
            <address>Client's Address</address>
            <p>Client's Number</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h3>Payment Method: </h3>
            <label for="">
              <b>Debit Card</b>
            </label>
            <input type="radio" name="radio" id="" />
            <br />
            <label for="">
              <b>PayPal</b>
            </label>
            <input type="radio" name="radio" id="" />
            <br />
            <label for="">
              <b> FlutterWave</b>
            </label>
            <input type="radio" name="radio" id="" />
          </div>
          <div className="col mt-3">
            <b>Issue Date:</b>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row table-responsive">
          <div className="col ">
            <table className="table table-striped">
              <thead className="thead-danger">
                <tr style={{ backgroundColor: "red", color: "white" }}>
                  <th>
                    <h3>VIEW DESCRIPTION</h3>
                  </th>
                  <th>
                    <h3>IMAGE</h3>
                  </th>
                  <th>
                    <h3>PRICE</h3>
                  </th>
                  <th>
                    <h3>QUANTITY</h3>
                  </th>
                  <th>
                    <h3 id="reduceTotal">TOTAL</h3>
                  </th>
                  <th>
                    <h3>REMOVE</h3>
                  </th>
                </tr>
              </thead>
              <tbody id="cartProduct"></tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <button
              className="btn btn-danger d-flex"
              onclick="clear_all(this)"
              id="cleared"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ zIndex: "1" }}>
        <div className="row">
          <div className="col">
            <b>Note:</b>
            <p>
              This is to inform our prestige clients that all goods ordered will
              be delivered <span>7-days</span> after day of order placement.
            </p>
          </div>
          <div className="col">
            <h3 id="cartTotal">Subtotal</h3>
            <h3>Taxes</h3>
            <h3>Delivery fee</h3>
            <div style={{ border: "1px solid black" }}>
              <h3>Total</h3>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;

// const pay =(price)=>{
//   return `The item is ${price} today`
// }
// console.log(pay("25"))

// const showArr = (...args)=>{
//    console.log(...args)
//   for(i=0 ;i<args.length;i++){
//     console.log(args[i])
//   }
// }
// showArr('Excel')
