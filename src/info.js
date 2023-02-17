import React from "react";

class Info extends React.Component {
  render() {
    const title = "This is my title";
    const showTitle = true;
    return (
      <div>
        <h1>{showTitle ? title : "No Title"}</h1>
        <p>Manange your stuff</p>
      </div>
    );
  }
}

// export default function Info(){
//     const title = "This is my title"
//     const showTitle = true
//     return (
//       <div>

//         <h1>{showTitle ? title : "No Title"}</h1>
//         <p>Manange your stuff</p>
//       </div>
//     );

// if(showTitle) {
//   return (
//     <div>

//       <h1>{showTitle ? title : "No Title"}</h1>
//       <p>Manange your stuff</p>
//     </div>
//   );
// } else{
//   return <p>empty</p>
// }
//   }

export default Info;
