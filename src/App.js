import React, { useState, Component } from "react";
import "./App.scss";
import Panel from "./Components/Organisms/Panel";
import PowerButton from "./Components/Atoms/Buttons/PowerButtons/PowerHover";

class App extends Component {
  state = {
    style: false,
    component: false,
  };
  change = () => {
    this.setState({
      style: false,
    });
    setTimeout(() => {
      this.setState({
        component: false,
      });
    }, 200);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.style ? (
            <div className="fade-in">
              <PowerButton text="Iniciar" action={this.change} />
            </div>
          ) : this.state.component ? (
            <div className="fade-out">
              <PowerButton text="Iniciar" action={this.change} />
              {/* <Panel /> */}
            </div>
          ) : (
            <Panel />
          )}

          {/* <PowerButton
            text={state ? "verdadero" : "falso"}
            action={() => {
              setstate(!state);
            }}
          /> */}
        </header>
      </div>
    );
  }
}

// function App() {
//   const [state, setstate] = useState(true);
//   const [statePanel, setPanelSate] = useState(false);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className={state ? "fade-in" : "fade-out"}>
//           {statePanel ? (
//             <Panel />
//           ) : (
//             <React.Fragment>
//               {state ? "Pulsa para continuar" : null}
//               <PowerButton
//                 text={state ? "verdadero" : "falso"}
//                 action={() => {
//                   setstate(!state);
//                 }}
//               />
//             </React.Fragment>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// }

export default App;
