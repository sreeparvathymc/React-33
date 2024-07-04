

import React from "react";
import { useState } from "react";
    // ===========================================
    // ===========================================
  const BmiCalculator = () => {
    // ===========================================
    // ===========================================
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
                // ***********************
  const calcBmi = (e) => {
    e.preventDefault();
              // ----------------------------
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      const bmi = (weight / (height * height));
                           // ---------
      setBmi(bmi.toFixed(1));
                           // ---------
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } 
      else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are healthy");
      } 
      else {
        setMessage("You are overweight");
      }
    }
  };
                  // ***********************
  const reload = () => {
    window.location.reload();
  };
  //==================================================
  //==================================================
  return (
    <div>
      <div className="">
        <div>
          <h2 className="text-3xl font-semibold bg-blue-400 py-7 mb-14 text-center">
            BMI CALCULATOR
          </h2>

          <form
            className="bg-purple-300 w-3/4 mx-auto py-10 rounded-md shadow-lg flex flex-col justify-center items-center"
            onSubmit={calcBmi}
          >
            <div className="py-4">
              <label className="mr-4 text-xl font-normal">Weight (Kg)</label>
              <input
                type="number"
                placeholder="Enter weight value"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="py-2 px-2 rounded-md"
              />
            </div>

            <div className="py-4">
              <label className="mr-4 text-xl font-normal">Height (m)</label>
              <input
                type="number"
                placeholder="Enter height value"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="py-2 px-2 rounded-md"
              />
            </div>

            <div className="mt-10">
              <button
                className="bg-purple-900 px-5 py-2 text-white mr-9 rounded-md"
                type="submit"
              >
                Submit
              </button>


              <button
                className="bg-purple-900 px-5 py-2 text-white rounded-md"
                type="button"
                onClick={reload}
              >
                Reload
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-xl">Your BMI is: {bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;









// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [weight, setWeight] = useState(0);
//   const [height, setHeight] = useState(0);

//   const [bmi, setBmi] = useState("");
//   const [message, setMessage] = useState("");

//   // logic

//   const calcBmi = (e) => {
//     e.preventDefault();
//     if (weight === 0 || height === 0) {
//       alert("Please enter a valid weight and height");
//     } else {
//       const bmi = (weight / (weight * height)) * 703;

//       setBmi(bmi.toFixed(1));

//       //

//       if (bmi < 25) {
//         setMessage("You are underweight");
//       } else if (bmi >= 25 && bmi < 30) {
//         setMessage("You are healthy");
//       } else {
//         setMessage("You are Overweight");
//       }
//     }
//   };

//   const reload =()=>{
//     window.location.reload()

//   }

//   return (
//     <div className="App">
//       <div>
//         <h2>BMI CALCULATOR</h2>

//         <form onSubmit={calcBmi}>
//           <div>
//             <label>Weight (lbs)</label>
//             <input
//               type="text"
//               placeholder="Enter weight value"
//               value={weight}
//               onChange={(e) => setWeight(e.target.value)}
//             />
//           </div>

//           <div>
//             <label>Height (in)</label>
//             <input
//               type="text"
//               placeholder="Enter height value"
//               value={height}
//               onChange={(e) => setWeight(e.target.value)}
//             />
//           </div>

//           <div>
//             <button type="submit">Submit</button>
//             <button onClick={reload}>Reload</button>
//           </div>

//           <div>
//             <h3>
//               You BMI is:
//               {bmi}
//             </h3>
//             <p>{message}</p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;