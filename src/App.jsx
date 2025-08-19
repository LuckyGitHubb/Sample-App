import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PricingPlan from './components/PricingPlan'
import SignUpForm from './components/SignUpForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SuccessCard from './components/SuccessCard'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/app/store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return (
    <>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PricingPlan/>}/>
      <Route path='/register' element={<SignUpForm/>}/>
      <Route path='/success' element={<SuccessCard/>}/>
    </Routes>
    </BrowserRouter>
    </PersistGate>
    </Provider>
    </>
  )
}

export default App
