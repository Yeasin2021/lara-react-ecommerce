import { useEffect, useState,React } from "react"
import axios from "axios"
import { useParams,useNavigate, Link } from 'react-router-dom';

const CategoryEdit = () => {
const {id} = useParams();
const navigate = useNavigate();
const [category,setCategory] = useState([]);
const [description,setDescription] = useState([]);
const [status,setStatus] = useState([]);

const onSubmitForm = async(e) =>{
    e.preventDefault();
    try{

        const formData = new FormData();
        formData.append('category',category);
        formData.append('category_description',description);
        formData.append('status',status);
        await axios.post(`/category-update/${id}`,formData);
        navigate("/admin-category");
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
                                <input type="text" id="input1-group1" name="category"  onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Category" className="form-control" />
                            </div><br></br>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                <input type="text" id="input1-group1" name="category_description"  onChange={(e)=>setDescription(e.target.value)} placeholder="Category Description" className="form-control" />
                            </div><br></br>

                            <div class="form-check-inline form-check">
                                <label htmlFor="inline-radio1" className="form-check-label"> <input type="radio" name="status" value="1" className="form-check-input"  onChange={(e)=>setStatus(e.target.value)} />Published </label>
                                <label htmlFor="inline-radio2" className="form-check-label ml-2"> <input type="radio" name="status" value="0" className="form-check-input"  onChange={(e)=>setStatus(e.target.value)} />Unpublished </label>
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

export default CategoryEdit
