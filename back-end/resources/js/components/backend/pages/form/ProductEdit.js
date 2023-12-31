import { useEffect, useState,React } from "react"
import axios from "axios"
import { useParams,useNavigate, Link } from 'react-router-dom';

const ProductEdit = () => {
const {id} = useParams();
const navigate = useNavigate();

// set State for Image Preview and get Image name
const [file, setFile] = useState(); //image preview
const [image,setImage] = useState([]); //Image name


// set for loop
const [brands,setBrands] = useState([]);
const [categories,setCategories] = useState([]);




const [input,setInput] = useState(
    {
        category_id: '',
        brand_id: '',
        product_name: '',
        product_price: '',
        product_quantity: '',
        short_desc: '',
        long_desc: '',
        status: '',
        product_image: image,
    }
);





// const imageHandaler = (e) => {
//     console.log(e.target.files)
//     const selectedFile = e.target.files[0];

//     setInput({
//       ...input,
//       product_image: e.target.files[0], // Update the product_image field with the selected file

//     });



//     // setImage(selectedFile);

//     setFile(URL.createObjectURL(selectedFile));
//   }


const imageHandaler = (e) =>{
    console.log(e.target.files);
    setImage(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
}

useEffect(()=>{
    try{
        const getSingleRecord = async () =>{
        const response = await axios.get(`/product/${id}/edit`);
        setCategories(response.data.categories);
        setInput(response.data.product);
        setBrands(response.data.brands);
        // console.log(response.data.product,response.data.categories,response.data.brands)
      };

      getSingleRecord();

    }catch(error){
      console.log(error);
    }
},[id]);




const onSubmitForm = async(e) =>{
    e.preventDefault();
    try{

        await axios.post(`/product-update/${id}`,input);
        navigate("/admin-product");
    }catch(error){
        console.log(error.message);
    }

}




  return (
    <div>
    <div className="col-lg-12">
        <div className="card">
            <div className="card-header"><strong>Product</strong>Edit Page</div>
            <div className="card-body card-block">
                <form  className="form-horizontal" onSubmit={onSubmitForm} name="editForm" encType="multipart/form-data">
                    <div className="row form-group">
                        <div className="col col-md-12">
                        <div className="row form-group">
                            <div className="col col-md-3"><label for="multiple-select" className=" form-control-label">Category select</label></div>
                                <div className="col col-md-9">
                                    <select name="category_id" onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}   id="multiple-select" multiple="" className="form-control">
                                        <option>-----Select Category-----</option>
                                        {
                                            categories && categories.map((category)=>{
                                                return(
                                                    <option value={category.id} selected>{category.category}</option>

                                                )
                                            })
                                        }

                                    </select>

                                </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label for="multiple-select" className=" form-control-label">Brand select</label></div>
                                <div className="col col-md-9">
                                    <select name="brand_id" onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})} id="multiple-select" multiple="" className="form-control">
                                    <option value="1">-----Select Brand-----</option>
                                    {
                                            brands && brands.map((brand)=>{
                                                return(
                                                    <option value={brand.id} selected>{brand.brand}</option>

                                                )
                                            })
                                        }

                                    </select>
                                </div>
                        </div>

                        <div className="row form-group">
                            <div className="col col-md-3"><label for="multiple-select" className=" form-control-label">Product Name</label></div>
                                <div className="col col-md-9">
                                    <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                    <input type="text" id="input1-group1" name="product_name"  onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})} value={input.product_name} className="form-control" />
                                    </div>
                                </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label for="multiple-select" className=" form-control-label">Product Price</label></div>
                                <div className="col col-md-9">
                                    <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                    <input type="text" id="input1-group1" name="product_price"  onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})} value={input.product_price} className="form-control" />
                                    </div>
                                </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label for="multiple-select" className=" form-control-label">Product Quantity</label></div>
                                <div className="col col-md-9">
                                    <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                    <input type="text" id="input1-group1" name="product_quantity"  onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})} value={input.product_quantity} className="form-control" />
                                    </div>
                                </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label for="multiple-select" className=" form-control-label">Short Description</label></div>
                                <div className="col col-md-9">
                                    <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                    <input type="text" id="input1-group1" name="short_desc"   onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})} value={input.short_desc} className="form-control" />

                                    </div>
                                </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label for="multiple-select" className=" form-control-label">Long Description</label></div>
                                <div className="col col-md-9">
                                    <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                    <input type="text" id="input1-group1" name="long_desc"  onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})} value={input.long_desc} className="form-control" />
                                    </div>
                                </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3"><label for="multiple-select" className=" form-control-label">Product  Image</label></div>
                                <div className="col col-md-9">
                                    <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-file-text-o"></i></div>
                                    <input type="file" id="input1-group1" name="product_image"  onChange={imageHandaler}  className="form-control" />

                                    </div>
                                    {/* <img src={file ? file : `/frontend/img/product/store/${input.product_image}`} alt="product image" /> */}
                                    {console.log(imageHandaler)}


                                </div>

                        </div>

                        <div className="row form-group">
                            <div className="col col-md-3"><label for="multiple-select" className=" form-control-label">Product Status</label></div>
                                <div className="col col-md-9">
                                    <div class="form-check-inline form-check">
                                    <label htmlFor="inline-radio1" className="form-check-label"> <input type="radio" name="status" checked={input.status == 1} value="1" className="form-check-input"  onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}  />Published </label>
                                    <label htmlFor="inline-radio2" className="form-check-label ml-2"> <input type="radio" name="status" checked={input.status == 0}  value="0" className="form-check-input"  onChange={(e)=>setInput({...input,[e.target.name] : e.target.value})}  />Unpublished </label>
                                    </div>
                                </div>
                        </div>

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

export default ProductEdit
