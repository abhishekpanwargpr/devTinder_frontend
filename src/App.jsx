import { BrowserRouter, Routes, Route } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Feed from "./components/Feed"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Connections from "./components/Connections"
import Requests from "./components/Request"
import SignUp from "./components/SignUp"

function App() {
  return (
    <div>
      <Provider store={appStore}>
      <BrowserRouter basename="/">
         <Routes>
          <Route path= "/" element={<Body/>}>
            <Route path="/" element={<Feed/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/connections" element={<Connections/>}></Route>
            <Route path="/requests" element={<Requests/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
          </Route>
         </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  )
}
export default App
