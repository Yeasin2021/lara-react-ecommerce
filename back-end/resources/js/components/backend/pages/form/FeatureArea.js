import { useEffect, useState,React } from "react"
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom';

const FeatureArea = () => {
const navigate = useNavigate();
const [icon,setIcon] = useState([]);
const [header,setHeader] = useState([]);
const [details,setDetails] = useState([]);

const onSubmitForm = async(e) =>{
    e.preventDefault();
    try{

        const formData = new FormData();
        formData.append('icon',icon);
        formData.append('header',header);
        formData.append('details',details);
        await axios.post('feature',formData);
        navigate("/admin-feature");
    }catch(error){
        console.log(error.message);
    }

}


  return (
    <div>
    <div className="col-lg-12">
        <div className="card">
            <div className="card-header"><strong>Icon/Text</strong> Groups</div>
            <div className="card-body card-block">
                <form  className="form-horizontal">
                    <div className="row form-group">
                        <div className="col col-md-12">
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                <input type="text" id="input1-group1" name="icon"  onChange={(e)=>setIcon(e.target.value)} placeholder="Enter Icon Class Name" className="form-control" />
                            </div><br></br>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                <input type="text" id="input1-group1" name="header"  onChange={(e)=>setHeader(e.target.value)} placeholder="Enter Header" className="form-control" />
                            </div><br></br>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                <input type="text" id="input1-group1" name="details"  onChange={(e)=>setDetails(e.target.value)} placeholder="Enter Details" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="card-footer">
                        <button type="submit" className="btn btn-success btn-sm" onClick={onSubmitForm}><i className="fa fa-dot-circle-o"></i> Submit</button>
                        <Link to='/admin-feature'><button type="reset" className="btn btn-danger btn-sm ml-1"><i className="fa fa-ban"></i> Back</button></Link>
                     </div>

                </form>
            </div>
            {/* <div className="card-footer">
                <button type="submit" className="btn btn-success btn-sm" onClick={onSubmitForm}><i className="fa fa-dot-circle-o"></i> Submit</button>
                <Link to='/admin-feature'><button type="reset" className="btn btn-danger btn-sm ml-1"><i className="fa fa-ban"></i> Back</button></Link>
            </div> */}
        </div>
    </div>
</div>

  )
}

export default FeatureArea
