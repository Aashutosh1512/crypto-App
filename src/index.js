import React from "react"
import  ReactDOM  from "react-dom"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import store from "./redux/store"
import 'antd/dist/antd';
import {Provider } from "react-redux"


ReactDOM.render(

<Router> 
<Provider store={store}>
<App></App>
</Provider>

</Router>



,document.getElementById('root'))