import { useEffect, useState,React } from "react"
import axios from "axios"
import {useParams, useNavigate, Link } from 'react-router-dom';

const BannerEdit = () => {
const {id} = useParams();
const navigate = useNavigate();
const [title,setTitle] = useState([]);
const [fristHeader,setFirstHeader] = useState([]);
const [secondHeader,setSecondHeader] = useState([]);
const [thirdHeader,setThirdHeader] = useState([]);
const [image,setImage] = useState([]);

const imageHandaler = (e) =>{
    console.log(e.target.files);
    setImage(e.target.files[0]);
}

const onSubmitForm = async(e) =>{
    e.preventDefault();
    try{
        const formData = new FormData();
        formData.append('title',title);
        formData.append('first_header',fristHeader);
        formData.append('second_header',secondHeader);
        formData.append('third_header',thirdHeader);
        formData.append('bannerImage',image);
        await axios.post(`/banner-update/${id}`,formData);
        console.log(formData)
        navigate("/admin-banner");
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
                                <input type="text" id="input1-group1" name="title"  onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Title" className="form-control" />
                            </div><br></br>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                <input type="text" id="input1-group1" name="first_header"  onChange={(e)=>setFirstHeader(e.target.value)} placeholder="Enter Header 1" className="form-control" />
                            </div><br></br>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                <input type="text" id="input1-group1" name="second_header"  onChange={(e)=>setSecondHeader(e.target.value)} placeholder="Enter Header 2" className="form-control" />
                            </div><br></br>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                <input type="text" id="input1-group1" name="third_header"  onChange={(e)=>setThirdHeader(e.target.value)} placeholder="Enter Header 3" className="form-control" />
                            </div>
                            <br></br><label htmlFor="exampleInputAge">Banner Image</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                <input type="file" id="input1-group1" name="bannerImage"  onChange={imageHandaler} placeholder="Enter Banner Image" className="form-control" />
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

export default BannerEdit
