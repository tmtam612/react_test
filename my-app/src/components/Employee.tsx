import React, { Component, useState } from 'react'
import { useDispatch } from 'react-redux'
import EmployeeModel from '../Constants/Employee'
import { Button, Modal } from 'react-bootstrap';
import { Formik, FormikProps, Field, ErrorMessage } from 'formik';
import  {action, actionSave} from '../actions';
import * as Yup from "yup";
import reducers from '../reducers';

interface objectType {
    id: number,
    title: String
}
const ShowList:React.FC<{employees: Array<objectType>}> = ({employees}) => {
    if(employees) {
        let list = employees.map((value: objectType, index: number) => {
            return <tr key={value.id}><td>{value.id}</td><td>{value.title}</td></tr>
        });
        return <table><tbody>{list}</tbody></table>
    }
    return <h1>error</h1>
}
const initForm: EmployeeModel = {
    id: '',
    name: ''
}
const AddEmployee:React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const validateForm = Yup.object().shape({
        id: Yup.number().required("Required"),
        name: Yup.string().required("Required")
    });
    const dispatch = useDispatch();
    const onSunmit = (values: EmployeeModel) => {
        dispatch(actionSave(values));
    }

    const handleSubmit = (formik: FormikProps<EmployeeModel>) => {
        formik.submitForm();
    }

    const handleReset = (formik: FormikProps<EmployeeModel>) => {
        formik.resetForm();
    }
    
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button>
                <Formik initialValues={initForm} onSubmit={onSunmit} validationSchema={validateForm} validateOnChange={false} validateOnBlur={false}>{(props: FormikProps<EmployeeModel>) => {
                            return (
                                <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <label htmlFor="id" style={{display: "block"}}>id</label>
                                    <Field name="id"  /><br></br>
                                    <div><ErrorMessage name="id" className="abc"/></div>
                                    <label htmlFor="name" style={{display: "block"}}>name</label>
                                    <Field name="name"  /><br></br>
                                    <ErrorMessage name="name" />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="secondary" onClick={() => handleReset(props)}>
                                        Reset
                                    </Button>
                                    <Button type="button" onClick={() => handleSubmit(props)}>
                                        Save Changes
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            )
                        }
                    }
                </Formik>
        </>
    );
}
export default {ShowList, AddEmployee};