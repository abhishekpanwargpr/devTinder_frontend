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
import Password from "./components/Password"
import PrivacyPolicy from "./components/TermsConditions"
import TermsConditions from "./components/TermsConditions"
import CancellationRefund from "./components/CancellationRefund"
import ShippingDelivery from "./components/ShippingDelivery"
import ContactUs from "./components/ContactUs"
import Chat from "./components/Chat"

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
            <Route path="/forget-password" element={<Password/>}></Route>
            <Route path="/terms-conditions" element={<TermsConditions/>}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
            <Route path="/cancelation-refund" element={<CancellationRefund/>}></Route>
            <Route path="/shipping-delivery" element={<ShippingDelivery/>}></Route>
            <Route path="/contact-us" element={<ContactUs/>}></Route>
            <Route path="/chat/:targetUserId" element={<Chat/>}></Route>
          </Route>
         </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  )
}
export default App
