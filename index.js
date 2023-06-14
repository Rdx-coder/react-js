// javascript
// const heading = document.createElement("h2");
// heading.textContent="rahul";
// heading.className="newone";
// heading.id="secondone";
// document.getElementById("root").append(heading);
// console.log("javascript element: ",heading);

// react
// const reactHeading = React.createElement("h3",{className: "head",id: "head1", children : "hello react "});
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
// console.log("react element : ", reactHeading);


//   render image
// const reactHeading = React.createElement("img", {
//     src: "https://files.codingninjas.in/coding-ninjas-24647.png"
//   });
//   ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

// React jsx
// const jsxHeading = <h1>welcome to the JSX world!</h1>   
// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

// React Fragment  : if we want to use one element inside another element we can use react.Fragment

    // const jsxHeading = 
    //                 // <React.Fragment>
    //                 <>
    //                   <h1>welcome to the JSX world!</h1>   
    //                 <p>this is react fragment example</p>   
    //                 </>
    //             //  </React.Fragment>
    // ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

    // assigment of jsx
    
    // const navHeading = <>
    //                     <h1>About JSX</h1>
    //                     <p>jsx is as javascript xml which is used in react</p>
    //                     <nav>
    //                         <ul>
    //                             <li>babel is a javascript compiler</li>
    //                             <li>react fragment is a feature in reaact that allow you to return multiple element in one variable</li>
    //                             <li>react is a javascript library</li>
    //                         </ul>
    //                     </nav>
    // </>
    //     ReactDOM.createRoot(document.getElementById("root")).render(navHeading);

    // react components

    
    function App(){
            return(
             <>
                        <h1>About JSX</h1>
                        <p>jsx is as javascript xml which is used in react</p>
                        <nav>
                            <ul>
                                <li>babel is a javascript compiler</li>
                                <li>react fragment is a feature in reaact that allow you to return multiple element in one variable</li>
                                <li>react is a javascript library</li>
                            </ul>
                        </nav>
            </>
            )
    }
    const Spp = () =>(
        <>
        <h1>React Project</h1>
        <p>Skill used to make this projects</p>
        <nav>
           <ul>
           <li>HTML</li>
           <li>javascript</li>
           <li>CSS</li>
           </ul>
           </nav>
        </>
        
     );
    ReactDOM.createRoot(document.getElementById("root")).render(<><App/><Spp/></>);

