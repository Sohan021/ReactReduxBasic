// import React, { useState, useEffect } from 'react';
// import BootstrapTable from "react-bootstrap-table-next";
// import { Container, Row, Col, Button, Input, Form, FormGroup, Card, Spinner } from "reactstrap";
// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// import paginationFactory from "react-bootstrap-table2-paginator";
// import { Link } from "react-router-dom";

// import { useSelector, useDispatch } from 'react-redux';
// import { fundCeo } from '../../../../../actions/Fund/fundActions';

// const { SearchBar } = Search;

// const defaultSorted = [
//     {
//         dataField: "id",
//         order: "asc",
//     },
// ];


// const FundCeoForAdminScreen = (props) => {

//     const fundCeos = useSelector((state) => state.fundCEO)
//     const { fund } = fundCeos;

//     const dispatch = useDispatch();

//     useEffect(() => {

//         dispatch(fundCeo());
//         return () => {
//             //
//         };
//     }, []);


//     const columns = [
//         {
//             dataField: "mainAccount",
//             text: "MainAccount",
//             sort: true,
//         },
//         {
//             dataField: "totalIncome",
//             text: "TotalIncome",
//             sort: true,
//         },
//     ];

//     return (
//         <div className="container">
//             <br />
//             <br />
//             <br />
//             <br />
//             <div className="row">
//                 <div className="col-2">
//                 </div>
//                 <div className="col-8">
//                     <Card style={{ width: "876px", height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", borderColor: "#5cb85c", background: "#000" }}>
//                         All Shoper Fund List
//                     </Card>
//                     <Card style={{ width: "876px", padding: "20px", borderColor: "#000" }}>
//                         <Container>
//                             {fund ? (
//                                 <ToolkitProvider
//                                     bootstrap4
//                                     keyField="id"
//                                     data={fund}
//                                     columns={columns}
//                                     defaultSorted={defaultSorted}
//                                     search
//                                 >
//                                     {(props) => (
//                                         <div>
//                                             <Row>
//                                                 <Col>
//                                                     <Form onSubmit={submitHandler}>
//                                                         <div className="row">
//                                                             <div className="col-6">
//                                                                 <FormGroup>
//                                                                     <Input
//                                                                         type="text"
//                                                                         name="countInStock"
//                                                                         id="countInStock"
//                                                                         placeholder="Enter Agent Phone Number"
//                                                                         size="lg"
//                                                                         value={appSharerPhoneNumber}
//                                                                         onChange={(e) => setAppSharerPhoneNumber(e.target.value)}
//                                                                     />
//                                                                 </FormGroup>
//                                                             </div>
//                                                             <div className="col-6">
//                                                                 <Button style={{
//                                                                     color: "#000"
//                                                                 }} outline color="dark" size="lg" block type="submit">
//                                                                     Search
//                                                                 </Button>
//                                                             </div>
//                                                         </div>
//                                                     </Form>
//                                                 </Col>
//                                             </Row>
//                                             <BootstrapTable
//                                                 {...props.baseProps}
//                                                 pagination={paginationFactory()}
//                                             />
//                                         </div>
//                                     )}
//                                 </ToolkitProvider>
//                             ) : (
//                                     <div className="text-center">
//                                         {props.errorCategoriesList ? (
//                                             <h4>{props.errorCategoriesList}</h4>
//                                         ) : (
//                                                 <Spinner color="dark" />
//                                             )}
//                                     </div>
//                                 )}
//                         </Container>
//                     </Card>
//                 </div>
//                 <div className="col-2">
//                 </div>
//             </div>
//         </div >
//     );
// };

// export default FundCeoForAdminScreen;
