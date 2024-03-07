import './App.css';
import BillInfoForm from './Compontents/BillInfoForm/BillInfoForm';
import Navbar from './Compontents/Navbar';
import PaymentConfirmForm from './Compontents/PaymentConfirmForm/PaymentConfirmForm';
import RentalInfoForm from './Compontents/RentalInfoForm/RentalInfoForm';
import Sidebar from './Compontents/Sidebar/Sidebar';


function App() {
  return (<><Navbar></Navbar>

<Sidebar></Sidebar>

<BillInfoForm></BillInfoForm>
<RentalInfoForm></RentalInfoForm>
<PaymentConfirmForm></PaymentConfirmForm>

  </>


  );
}

export default App;
