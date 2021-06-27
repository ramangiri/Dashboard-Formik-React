import { useHistory } from "react-router";
import { useFormik } from "formik";

export default function Productscreate(){


    let history = useHistory();
    
    let validate = (values) =>{
      const errors = {}
      if(!values.Name){
        errors.Name = 'Name is Required';
      }
      if(!values.Category){
        errors.Category = 'Category is Required';
      }
      if(!values.Price){
        errors.Price = 'Price is Required';
      }
     return errors
    }

    const formik = useFormik({
      initialValues: {
          Name: '',
          Category:'',
          Price:'',
        },
      validate,
      onSubmit: async (values) => {
        
        let Name = values.Name;
        let Category = values.Category;
        let Price = values.Price;
        await fetch("https://606ff05f85c3f0001746f0d5.mockapi.io/products",{
        method: "POST",
        body: JSON.stringify({
          Name,
          Category,
          Price
        }),
        headers: {
          "Content-type":"application/json"
        }

      })

      history.push('/products');
        
      }
    })

    return <>
    
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>Create Product Form</h1>
            </div>
        </div>
    <form onSubmit={formik.handleSubmit}>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input type="text" class="form-control" placeholder="Name" name="Name" value={formik.values.Name} onChange={formik.handleChange}/>
      {formik.touched.Name && formik.errors.Name ? (<div style={{color:'red'}}>{formik.errors.Name}</div> ) : null}
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Category</label>
      <input type="text" class="form-control" placeholder="Category" name="Category" value={formik.values.Category} onChange={formik.handleChange} />
      {formik.touched.Category && formik.errors.Category ? (<div style={{color:'red'}}>{formik.errors.Category}</div> ) : null}
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Price</label>
      <input type="number" class="form-control" placeholder="Price" name="Price" value={formik.values.Price} onChange={formik.handleChange} />
      {formik.touched.Price && formik.errors.Price ? (<div style={{color:'red'}}>{formik.errors.Price}</div> ) : null}
    </div>
    <div className="col-md-12">
        
            <input class="btn btn-primary" type="submit" value="submit"/>
       
    </div>
   </div>
   </form>
   </div>
    </>
}