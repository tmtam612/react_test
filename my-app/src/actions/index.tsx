import EmployeeModel from '../Constants/Employee'
export const action = () => ({
    type: 'GET_LIST',
});
export const actionSave  = (values :EmployeeModel = {id : '', name: ''}) => ({
    type: 'SAVE_DATA',
    data: values,
});