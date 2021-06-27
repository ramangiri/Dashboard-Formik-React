
import React from "react";
 function Progress(props){
    return<>
        
   
            <div className="card-body">
              <h4 className="small font-weight-bold">{props.data.name} <span className="float-right">{props.data.value}%</span></h4>
              <div className="progress mb-4">
                <div className={`progress-bar ${props.data.color}`}
                 role="progressbar" style={{width: `${props.data.value}%`}}
                  aria-valuenow={`${props.data.value}`} 
                  aria-valuemin={0} aria-valuemax={100}
                   />
              </div>
            </div>
          
        
    

    
    </>
}
export default Progress;