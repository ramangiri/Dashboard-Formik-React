import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure();

export default function Products(){
  
    let [productList,setProductList] = useState([]);
    useEffect(async ()=> {
        let users = await fetch("https://606ff05f85c3f0001746f0d5.mockapi.io/products");
        let userData = await users.json();
        setProductList([...userData])
      
    },[])

    async function deleteData(id){
        await fetch(`https://606ff05f85c3f0001746f0d5.mockapi.io/products/${id}`,{
            method: "DELETE",
            body: null,
            headers: {
              "Content-type":"application/json"
            }
          })
          toast('Record Deleted',{position:"top-center"}); 
          window.setTimeout(function(){window.location.href = window.location.href},5000)
          
    }
    return <>
    <div class="container-fluid">


<h1 class="h3 mb-2 text-gray-800">Tables</h1>

<Link to="/productscreate">Create Product</Link>
<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Products List</h6>
    </div>
    
    <div class="card-body">
        <div class="table-responsive">
            {
                productList.length > 0 ?
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                       productList.map((obj)=>{
                            return <tr>
                            <td>{obj.Name}</td>
                            <td>{obj.Category}</td>
                            <td>${obj.Price}</td>
                            <td>
                                <Link to={`/productsedit/${obj.id}`}>Edit Product</Link>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger" onClick={()=>{
                                    deleteData(obj.id)
                                }}>Delete</button>
                            </td>
                        </tr>
                        })
                    }
                  </tbody>
            </table>
            : <div><h1>Loading..!</h1></div>
                }
        </div>
    </div>
</div>

</div>
    </>
}