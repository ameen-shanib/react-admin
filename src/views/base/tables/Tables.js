import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'
import {
  useSelector
} from 'react-redux';

//import resturentData from '../../datas/dataList'


const fields = ['id','name','place', 'foodType']
const Tables = (props) => {
const resturentData = useSelector(state => state.resturentData||{});
}
//console.log(resturentData,"resturentData");
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Resturent List
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={resturentData}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              clickableRows={true}
              onRowClick={props.clickRow}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>       
    </>
  )


export default Tables
