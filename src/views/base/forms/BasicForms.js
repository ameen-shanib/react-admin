import React, {
  useState
} from 'react'
import {
  bindActionCreators
} from 'redux';
//import * as resturentAction from "../../../actions/resturent.action";
import {
  connect,
  useDispatch,
  useSelector
} from 'react-redux';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CInputCheckbox,
  CLabel,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Tables from "../tables/Tables";
import { number, string } from 'prop-types';
let defultSProps = {
  id:number,
  name:string,
  place:string,
  foodType:foodType
}
const BasicForms = () => {
  let name = props.name;
  let id = props.id;
  let place = props.place;
  let foodTypes = props.foodtype;
  const dispatch = useDispatch();
  const resturentData = useSelector(state => state.resturentData);
  const saveResturentData = () => {
    resturentData.id = Object.keys(resturentData).length;
    resturentData.name = document.getElementById("name").value;
    resturentData.place = document.getElementById("place").value;
    resturentData.foodType = document.getElementById("foodType").value = '';
    document.getElementById("name").value = '';
    document.getElementById("place").value = '';
    document.getElementById("foodType").value = '';
    dispatch({
      type: 'addResturent',
      resturentData: resturentData
    })
  }
  const clickRow = (a,b) => {
    let id = a.id;
    name = a.name;
    id = a.id;
    place = a.place;
    foodTypes = a.foodtype;
  }  
  return ( <
    >
    <
    CRow >

    <
    CCol xs = "12"
    sm = "6" >
    <
    CCard >
    <
    CCardHeader >
    Add New Restaurant <
    /CCardHeader> <
    CCardBody >
    <
    CFormGroup >
    <
    CLabel htmlFor = "name" > Restaurant Name < /CLabel> <
    CInput id = "name"
    placeholder = "Enter your rest name" / >
    <
    /CFormGroup> <
    CFormGroup >
    <
    CInputHidden id = "id"  value={id}/ >
    
    <
    CLabel htmlFor = "vat" > Restaurant Place < /CLabel> <
    CInput id = "place"
    placeholder = "Enter place" 
    value={name}/ >
    <
    /CFormGroup>

    <
    CFormGroup row >
    <
    CCol md = "3" > < CLabel > Food Type < /CLabel></CCol >
    <
    CCol md = "9" >
    <
    CFormGroup variant = "checkbox"
    className = "checkbox" >
    <
    CInputCheckbox id = "veg"
    name = "veg"
    value = "veg"  slected={foodType=='veg' ? selected : ""}/
    >
    <
    CLabel variant = "checkbox"
    className = "form-check-label"
    htmlFor = "veg" > Veg < /CLabel> < /
    CFormGroup > <
    CFormGroup variant = "checkbox"
    className = "checkbox"  >
    <
    CInputCheckbox id = "NonVeg"
    name = "NonVeg"
    value = "NonVeg" slected={foodType=='NonVeg' ? selected : ""} / >
    <
    CLabel variant = "checkbox"
    className = "form-check-label"
    htmlFor = "NonVeg" > Non Vege < /CLabel> < /
    CFormGroup > <
    /CCol> < /
    CFormGroup >

    <
    CCardFooter >
    <
    CButton type = "submit"
    size = "sm"
    color = "primary"
    onClick = {
      (e) => saveResturentData()
    } > < CIcon name = "cil-scrubber" / > Submit < /CButton> < /
    CCardFooter > <
    /CCardBody> < /
    CCard > <
    /CCol> < /
    CRow > <
    />


    <Tables clickRow={clickRow()} >
  )

  
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(resturentAction, dispatch),
  dispatch
});

export default connect(mapDispatchToProps, mapDispatchToProps)(BasicForms);
