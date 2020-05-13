import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee'
import EmployeeModel from './Constants/Employee'
import { connect, useDispatch, useSelector  } from 'react-redux';
import  {action, actionSave} from './actions';
import reducers from './reducers';
interface test {
  loading: boolean,
  news: []
};
function App() {
  useFetching(action);

  const data = useSelector(
    (state: test) => {
        return state.news || [];
    }
  );
 
  return (
    <div className="App">
        <Employee.ShowList employees={data} />
        <Employee.AddEmployee />
    </div>
  );
  
}





const useFetching = (sagas: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action());
  }, []);
} 

export default App;
