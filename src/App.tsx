import React, { useEffect, useState } from "react";
// import Loader from "./components/loader/loader.component";
import { Route, Switch } from "react-router-dom";
// import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";

import "./App.scss";
// import AboutPage from "./pages/about/about.component";
import Isum from "./pages/isum/isum.component";
import Esl from "./pages/esl/esl.component";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);

  return (
    <React.Fragment>
      {/*{*/}
      {/*    loading ? (*/}
      {/*        <div className="loader">*/}
      {/*            <Loader/>*/}
      {/*        </div>*/}
      {/*    ) : (*/}
      <div className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/isum" component={Isum} />
          <Route path="/esl" component={Esl} />
        </Switch>
      </div>
      {/*    )*/}
      {/*}*/}
    </React.Fragment>
  );
}

export default App;
