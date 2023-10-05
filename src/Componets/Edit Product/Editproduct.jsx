import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProductasync, updateProductasync } from '../../Services/Action/Product Action/Productaction';

function EditProduct() {

    const product = useSelector(state => state.Productreducer.product);

  
const dispatch = useDispatch()
const [inputValue, setinputvalue] = useState(product);

console.log(inputValue.id,"inputValue iddddddddd");

const hadlesubmit = (e) => {
  e.preventDefault();
  dispatch(updateProductasync(inputValue.id,inputValue));


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
    	
    <Container className=''>

      <h1>Edit Product</h1>

    <form className='col-12' onSubmit={hadlesubmit}>
      <div class=" col-6 mb-3 mt-3">
        <label class="form-label">Name :</label>
        <input type="text" class="form-control" placeholder="Enter Product Name" name="produt_Name" onChange={handlechange} value={inputValue.produt_Name} />
      </div>
      <div class="mb-3 col-6 ">
        <label class="form-label">Category :</label>
        <input type="text" class="form-control" placeholder="Enter Product Category" name="produt_Category" onChange={handlechange} value={inputValue.produt_Category} />
      </div>
      <div class="mb-3 col-6 ">
        <label class="form-label">Price :</label>
        <input type="text" class="form-control" placeholder="Enter Product Price" name="produt_Price" onChange={handlechange} value={inputValue.produt_Price} />
      </div>
      <div class="mb-3 col-6 ">
        <label class="form-label">Img :</label>
        <input type="text" class="form-control" placeholder="Enter Product Img" name="produt_Img" onChange={handlechange} value={inputValue.produt_Img} />
      </div>
     

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </Container>
  )
}

export default EditProduct;