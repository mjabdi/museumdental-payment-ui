import "./App.css";
import Checkout from "./checkout";
import WelcomeForm from "./WelcomeForm";
import AgreementForm from "./AgreementForm";
import GlobalState from "./GlobalState";
import React, { useEffect } from "react";
import PaymentService from "./services/PaymentService";
import theme from "./theme";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import GlobalStyles from "./GlobalStyles";
import PayForm from "./PayForm";

const getPathId = () => {
  let urlElements = window.location.pathname.split("/");
  if (urlElements.length === 4 && urlElements[2] === "pay") {
    return urlElements[3]
  }
  return null;
};

function App() {
  const [state, setState] = React.useState({
    activeStep: 0,
    bookingDate: null,
    persons: [],
  });

  useEffect( () => {
    loadPaymentData()
  }, []);

  const loadPaymentData = async () =>
  {
    try{
      const paymentId = getPathId();    
      const res = await PaymentService.getPaymentById(paymentId)
      if (res && res.data && res.data.status === "OK" && res.data.result)
      {
        const payment = res.data.result
        if (!payment.deleted)
        {
          setState(state=>({...state, payment : payment}))
        }
      }
    }catch(err)
    {
      console.error(err)
    }
  }

  return (
    <GlobalState.Provider value={[state, setState]}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <div className="App">

        {state.payment && (
          <PayForm/>
        )}
          
        </div>
      </MuiThemeProvider>
    </GlobalState.Provider>
  );
}

export default App;
