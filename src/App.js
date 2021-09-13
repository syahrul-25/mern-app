import "./App.scss"
import Login from "./components/pages/Login"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Register from "./components/pages/Register"
import Home from "./components/pages/Home"

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
