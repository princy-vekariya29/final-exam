import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProductasync } from '../../Services/Action/Product Action/Productaction';

function AddProduct() {

  const [inputValue, setinputvalue] = useState({
    produt_Name: '',
    produt_Category: '',
    produt_Price: '',
    produt_Img: '',
  }
  );

  // console.log(inputValue);
  const dispatch = useDispatch()



  const hadlesubmit = (e) => {
    e.preventDefault();
    dispatch(addProductasync(inputValue));
    console.log(inputValue);

    setinputvalue({
      produt_Name: '',
      produt_Category: '',
      produt_Price: '',
      produt_Img: '',
    })
  }

  const handlechange = (e) => {

    let name = e.target.name;
    let value = e.target.value;

    setinputvalue({ ...inputValue, [name]: value })

  }

  return (

    <Container className='d-flex align-items-center'>

      <form className='col-12' onSubmit={hadlesubmit}>
        <div class=" col-6 mb-3 mt-3">
          <label class="form-label">Title :</label>
          <input type="text" class="form-control" placeholder="Enter Product Name" name="produt_Name" onChange={handlechange} value={inputValue.produt_Name} />
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Category :</label>
          <input type="text" class="form-control" placeholder="Enter Product Category" name="produt_Category" onChange={handlechange} value={inputValue.produt_Category} />
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Price :</label>
          <input type="text" class="form-control" placeholder="Enter Product Reting" name="produt_Price" onChange={handlechange} value={inputValue.produt_Price} />
        </div>
        <div class="mb-3 col-6 ">
          <label class="form-label">Img :</label>
          <input type="text" class="form-control" placeholder="Enter Product Qty" name="produt_Img" onChange={handlechange} value={inputValue.produt_Img} />
        </div>
       

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </Container>
  )
}

export default AddProduct