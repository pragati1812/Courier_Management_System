import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Dashboard';
import AddParcel from './components/AddParcel';
import AddStaff from './components/AddStaff';
import StaffList from './components/StaffList';
import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';
import ParcelListCustomer from './components/ParcelListCustomer'
import ParcelList from './components/ParcelList';
import TrackParcel from './components/TrackPracel';
import UpdateStatus from './components/UpdateStatus';
import TrackParcelCustomer from './components/TrackParcelCustomer';
import AddBranch from './components/AddBranch';
import BranchList from './components/BranchList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addparcel" component={AddParcel} />
            <Route exact path="/staff" component={AddStaff} />
            <Route exact path="/stafflist" component={StaffList} />
            <Route path="/staff/edit/:id" component={AddStaff} />
            <Route path="/addcustomer" component={AddCustomer} />
            <Route path="/customerlist" component={CustomerList} />
            <Route path="/customer/edit/:id" component={AddCustomer} />
            <Route path="/customer/:id/parcel" component={AddParcel}/>
            <Route path="/customer/:id" component={ParcelListCustomer}/>
            <Route path="/parcellist" component={ParcelList} />
            <Route path="/track" component={TrackParcel} />
            <Route path="/parcel/edit/:id" component={UpdateStatus}/>
            <Route path="/trackparcel" component={TrackParcelCustomer}/>
            <Route path="/addbranch" component={AddBranch}/>
            <Route path="/branchlist" component={BranchList}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
