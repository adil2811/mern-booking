import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from './layouts/Layout';
import Register from './pages/Register';
import SignIn from './pages/Signin';
import Addhotel from './pages/AddHotel';
import { useAppContext } from './contexts/AppContext';
import MyHotels from './pages/MyHotel';
import Detail from './pages/Details';
import EditHotel from './pages/EditHotel';
import Search from './pages/Search';
import Booking from './pages/Booking';
import Home from './pages/Home'; 

function App() {
  const {isLoggedIn} = useAppContext
console.log('✌️isLoggedIn --->', isLoggedIn);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout> <Home/> </Layout>}/>
        <Route path="/search" element={<Layout> <Search/> </Layout>}/>
        <Route path="/register" element={<Layout> <Register/> </Layout>}/>
        <Route path="/signin" element={<Layout> <SignIn/> </Layout>}/>
        <Route
          path="/detail/:hotelId"
          element={
            <Layout>
              <Detail />
            </Layout>
          }
        />
        {!isLoggedIn && (
        <>
           <Route
              path="/hotel/:hotelId/booking"
              element={
                <Layout>
                  <Booking />
                </Layout>
              }
            />
            <Route
            path="/add-hotel"
            element={
                <Layout>
                  <Addhotel />
                </Layout>
              }
            />
            <Route
            path="/my-hotel"
            element={
                <Layout>
                  <MyHotels />
                </Layout>
              }
            />
                  <Route
              path="/edit-hotel/:hotelId"
              element={
                <Layout>
                  <EditHotel />
                </Layout>
              }
            />
          
         
          
            </>
        )}

        <Route path="*" element={<Navigate to="/" />}/>


      </Routes>
    
    </Router>
  )
}

export default App
