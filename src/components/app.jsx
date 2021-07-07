import React, { Component } from "react";
import Accordion from "./accordion";

import "./app.scss";

function App() {
  return <Accordion />;
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="outer-wrap">
//         <div className="inner-wrap">
//           <div id="accordion">
//             <div className="card">
//               <div className="card-header" id="headingOne">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link button "
//                     data-toggle="collapse"
//                     data-target="#collapseOne"
//                     aria-expanded="true"
//                     aria-controls="collapseOne"
//                   >
//                     Step 1: Your details
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseOne"
//                 className="collapse show"
//                 aria-labelledby="headingOne"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   <div className="details">
//                     <form>
//                       <div>
//                         <label>First Name</label>
//                         <input type="text" name="first-name" />
//                       </div>
//                       <div>
//                         <label>Surname</label>
//                         <input type="text" name="surname" />
//                       </div>
//                       <div>
//                         <label>Email Address:</label>
//                         <input type="text" name="email" />
//                       </div>
//                     </form>
//                     <button className="next-btn">Next ></button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingTwo">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link button collapsed "
//                     data-toggle="collapse"
//                     data-target="#collapseTwo"
//                     aria-expanded="false"
//                     aria-controls="collapseTwo"
//                   >
//                     Step 1: Your details
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseTwo"
//                 class="collapse"
//                 aria-labelledby="headingTwo"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   <div>
//                     <form>
//                       <div>
//                         <label>Telephone number</label>
//                         <input type="text" name="number" />
//                       </div>
//                       <div>
//                         <select>
//                           <option value="" disabled selected>
//                             Select your gender
//                           </option>
//                           <option value="male">Male</option>
//                           <option value="female">Female</option>
//                           <option value="other">Other</option>
//                         </select>
//                       </div>
//                       <div>
//                         <label>Date of birth:</label>
//                         <input type="text" name="dob-day" />
//                         <input type="text" name="dob-month" />
//                         <input type="text" name="dob-year" />
//                       </div>
//                     </form>
//                     <button className="next-btn">Next ></button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="card">
//               <div className="card-header" id="headingThree">
//                 <h5 className="mb-0">
//                   <button
//                     className="btn btn-link button collapsed"
//                     data-toggle="collapse"
//                     data-target="#collapseThree"
//                     aria-expanded="false"
//                     aria-controls="collapseThree"
//                   >
//                     Step 1: Your details
//                   </button>
//                 </h5>
//               </div>
//               <div
//                 id="collapseThree"
//                 class="collapse"
//                 aria-labelledby="headingThree"
//                 data-parent="#accordion"
//               >
//                 <div className="card-body">
//                   <div>
//                     <div>
//                       <label htmlFor="text">Comments</label>
//                       <textarea></textarea>
//                     </div>
//                     <button className="next-btn">Next ></button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
