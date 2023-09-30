import { useEffect, useState,React } from "react"
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom';

const ProductForm = () => {
const navigate = useNavigate();
const [brands,setBrands] = useState([]);
const [categories,setCategories] = useState([]);
// const [description,setDescription] = useState([]);
// const [status,setStatus] = useState([]);


useEffect(()=>{
    const brandData = axios.get('/brand').then((response)=>setBrands(response.data.brands));
    const categoryData = axios.get('/category').then((response)=>setCategories(response.data.categories));
},[])

const onSubmitForm = async(e) =>{
    e.preventDefault();
    try{

        const formData = new FormData();
        formData.append('brand',brand);
        formData.append('brand_description',description);
        formData.append('status',status);
        await axios.post('brand',formData);
        navigate("/admin-brand");
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
                        <div className="row form-group">
                            <div className="col col-md-3"><label for="multiple-select" className=" form-control-label">Category select</label></div>
                                <div className="col col-md-9">
                                    <select name="category" id="multiple-select" multiple="" className="form-control">
                                        <option value="1">-----Select Category-----</option>
                                        {
                                            categories && categories.map((category)=>{
                                                return(
                                                    <option value="2">{category.category}</option>
                                                )
                                            })
                                        }

                                    </select>
                                </div>
                            </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label for="multiple-select" className=" form-control-label">Brand select</label></div>
                                <div className="col col-md-9">
                                    <select name="brand" id="multiple-select" multiple="" className="form-control">
                                    <option value="1">-----Select Brand-----</option>
                                    {
                                            brands && brands.map((brand)=>{
                                                return(
                                                    <option value="2">{brand.brand}</option>
                                                )
                                            })
                                        }

                                    </select>
                                </div>
                            </div>
                            {/* <div className="input-group">
                            <div className="col col-md-3"><label for="multiple-select" className=" form-control-label">Category select</label></div>
                                <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                <input type="text" id="input1-group1" name="brand"  onChange={(e)=>setBrand(e.target.value)} placeholder="Enter Brand" className="form-control" />
                            </div><br></br>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                <input type="text" id="input1-group1" name="brand_description"  onChange={(e)=>setDescription(e.target.value)} placeholder="Brand Description" className="form-control" />
                            </div><br></br>


                            <div class="form-check-inline form-check">
                                <label htmlFor="inline-radio1" className="form-check-label"> <input type="radio" name="status" value="1" className="form-check-input"  onChange={(e)=>setStatus(e.target.value)} />Published </label>
                                <label htmlFor="inline-radio2" className="form-check-label ml-2"> <input type="radio" name="status" value="0" className="form-check-input"  onChange={(e)=>setStatus(e.target.value)} />Unpublished </label>
                            </div> */}

                        </div>
                    </div>

                    <div className="card-footer">
                        <button type="submit" className="btn btn-success btn-sm" onClick={onSubmitForm}><i className="fa fa-dot-circle-o"></i> Submit</button>
                        <Link to='/admin-brand'><button type="reset" className="btn btn-danger btn-sm ml-1"><i className="fa fa-ban"></i> Back</button></Link>
                     </div>

                </form>
            </div>

        </div>
    </div>
</div>

  )
}

export default ProductForm
