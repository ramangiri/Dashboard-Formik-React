import { useHistory } from "react-router";
import { useFormik } from "formik";


export default function Userscreate(){

    let history = useHistory();

    
    let validate = (values) =>{
      const errors = {}
      if(!values.Name){
        errors.Name = 'Name is Required';
      }else if (values.Name.length > 15) {
        errors.Name = 'Must be 15 characters or less';
      }
      if(!values.Position){
        errors.Position = 'Position is Required';
      }
      if(!values.Office){
        errors.Office = 'Office is Required';
      }
      if(!values.Age) {
        errors.Age = 'Age is Required';
      }else if(values.Age<=20) {
        errors.Age = 'Required age is between 20 and 50';
      }else if (values.Age>=50){
          errors.Age = 'Required age is between 20 and 50';
      } 
      if(!values.StartDate){
        errors.StartDate = 'Date is Required';
      }
      if(!values.Salary){
        errors.Salary = 'Salary is Required';
      }
    
      return errors
    }

    const formik = useFormik({
      initialValues: {
          Name: '',
          Position:'',
          Office:'',
          Age:'',
          StartDate:'',
          Salary:''
      },
      validate,
      onSubmit: async (values) => {
        
        let Name = values.Name;
        let Age = values.Age;
        let Office = values.Office;
        let StartDate = values.StartDate;
        let Salary = values.Salary;
        let Position = values.Position;
        
        await fetch("https://606ff05f85c3f0001746f0d5.mockapi.io/users",{
        method: "POST",
        body: JSON.stringify({
          Name,
          Position,
          Office,
          Age,
          StartDate,
          Salary
        }),
        headers: {
          "Content-type":"application/json"
        }

      })

      history.push('/users');
        
      }
    })

    return <>
    
    <div className="container"no>
        <div className="row">
            <div className="col-lg-12">
                <h1>Create User Form</h1>
            </div>
        </div>
    <form onSubmit={formik.handleSubmit}>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">FirstName</label>
      <input type="text" class="form-control" placeholder="Firstname"  name="Name" value={formik.values.Name} onChange={formik.handleChange}/>
      {formik.touched.Name && formik.errors.Name ? (<div style={{color:'red'}}>{formik.errors.Name}</div> ) : null}
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Position</label>
      <input type="text" class="form-control" placeholder="Position" name="Position" value={formik.values.Position} onChange={formik.handleChange}/>
      {formik.touched.Position &&formik.errors.Position ? (<div style={{color:'red'}}>{formik.errors.Position}</div> ): null}
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Office</label>
      <input type="text" class="form-control" placeholder="Office" name="Office" value={formik.values.Office} onChange={formik.handleChange}/>
      {formik.touched.Office &&formik.errors.Office ? (<div style={{color:'red'}}>{formik.errors.Office}</div> ): null}
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Age</label>
      <input type="number" class="form-control" placeholder="Age" name="Age" value={formik.values.Age} onChange={formik.handleChange}/>
      {formik.touched.Age && formik.errors.Age ? (<div style={{color:'red'}}>{formik.errors.Age}</div> ): null}
    </div>
    <div class="form-group col-md-6">
    <label for="example-date-input" class="col-2 col-form-label">Date</label>
    <input class="form-control" type="date" value="2011-08-19" name="StartDate" value={formik.values.StartDate} onChange={formik.handleChange}/>
    {formik.touched.StartDate && formik.errors.StartDate ? (<div style={{color:'red'}}>{formik.errors.StartDate}</div> ): null}
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Salary</label>
      <input type="number" class="form-control" placeholder="Salary" name="Salary" value={formik.values.Salary} onChange={formik.handleChange}/>
      {formik.touched.Salary && formik.errors.Salary ? (<div style={{color:'red'}}>{formik.errors.Salary}</div> ): null}
    </div>
    <div className="row">
        <div className="col-lg-6">
            <input class="btn btn-primary" type="submit" value="submit"/>
        </div>
    </div>
   </div>
   </form>
   </div>
    </>
}