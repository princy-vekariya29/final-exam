import React, { useState } from 'react'
import '../Home/Home.css'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { EditProductasync, getAllAsyncData, removeProductasync } from '../../Services/Action/Product Action/Productaction';
// import { addProductasync } from '../../Services/Action/action';

function Home() {

    const productData = useSelector(state => state.Productreducer.products)
    console.log(productData,"Prooooooooooo");

    const [prodata , setprodata] = useState(productData)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemove = (id) => {
        dispatch(removeProductasync(id))
      }


      const handleEdit = async (id) => {


       await  dispatch(EditProductasync(id))

        navigate(`/editproduct/${id}`);
      }


    const getdata = () => {
        dispatch(getAllAsyncData());
      }
     
      useEffect(() => {
        getdata();
      })

    return (
        <>
          
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {
              prodata.map((data) => {
        
                return (
                  <tr>
                    <td>
                      <div style={{width:"100px", height:"100px"}}>
                        <img src={data.produt_Img} alt="" style={{width:"100%", height:"100%",objectFit:"cover"}} />
                      </div>
                    </td>
                    <td>{data.produt_Name}</td>
                    <td>{data.produt_Category}</td>

                    <td>{data.produt_Price}</td>
                    <td><button className='btn btn-danger me-3' onClick={() => handleRemove(data.id)}>Remove</button><button className='btn btn-primary' onClick={() => handleEdit(data.id)}>Edit</button>
                    </td>
                    
                    
                  </tr>
                )
              })
            }


          </tbody>
        </Table>
        </>
    )
}

export default Home