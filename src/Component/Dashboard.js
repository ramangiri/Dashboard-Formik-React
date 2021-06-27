import Card from "./Card";
import Progress from "./Progress";
function Dashboard(){

    let CardData = [
        {
            Earnings:'Earnings(Monthly)',
            Value:'$40,000',
            icon:'fa-calendar',
            progressbar:false
        },
        {
            Earnings:'Earnings(Annual)',
            Value:'$215,000',
            icon:'fa-dollar-sign',
            progressbar:false
        },
        {
            Earnings:'Tasks',
            Value:'50%',
            icon:'fa-clipboard-list',
            progressbar:true
        },
        {
            Earnings:'Pending Requests',
            Value:'18',
            icon:'fa-comments',
            progressbar:false
        }
       
    ];

    let progressData = [
        {
            name: 'Server Migration',
            value: '20',
            color: 'bg-danger'
        },
        {
            name: 'Sales Tracking',
            value: '40',
            color: 'bg-warning'
        },
        {
            name: 'Customer Database',
            value: '60',
            color: ''
        },
        {
            name: 'Payout Details',
            value: '80',
            color: 'bg-info'
        },
        {
            name: 'Account Setup',
            value: '100',
            color: 'bg-success'
        },
    ]
    return(
        <>


     <div className="container-fluid">
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
     <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
     <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>
    <div className="row">

    {
       CardData.map((obj)=>{
        return <Card data={obj}></Card>
       })
    }
   
    </div>
    <div className="row">
             {/* Content Column */}
          <div className="col-lg-6 mb-4">
          {/* Project Card Example */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
        {
            progressData.map((obj)=>{
                return <Progress data={obj}></Progress>
            })
        
        }
        
        </div>
        </div>
        </div>



        
    </div>
    


        </>

    );
}

export default Dashboard;