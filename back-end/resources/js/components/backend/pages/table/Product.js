import { useEffect, useState,React } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

const Product = () => {
const [items,setItems] = useState([]);
useEffect(()=>{
    const data = async () =>{
        const response = await axios.get('/product').then((res)=>setItems(res.data.products));
    }
    data();
},[])

const deleteCategory = async (id) =>{

    if(window.confirm("Delete this Item") == true){
        await axios.delete(`/product/${id}`);
        const newItems = items.filter((item)=>{
        return item.id !== id;
        });
        setItems(newItems);
    }else{
        console.log('Data not Deleted from this Record')
    }

  }

  return (
    <div>
        <div class="content mt-3">
            <div class="animated fadeIn">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Products Table</strong>
                            </div>
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Brand Name</th>
                                            <th scope="col">Category Name</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Details</th>
                                            <th scope="col">Product Image</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                             {
                                                items && items.map((item)=>{
                                                    return(
                                                            <tr>
                                                            <th scope="row">{item.id}</th>
                                                            <td>{item.product_name}</td>
                                                            <td>{item.brand}</td>
                                                            <td>{item.category}</td>
                                                            <td>{item.product_quantity}</td>
                                                            <td>{item.product_price}</td>
                                                            <td>{item.short_desc}</td>
                                                            <td>{item.long_desc}</td>
                                                            <td>
                                                                <img width="70px" height="70px" src={`frontend/img/product/store/${item.product_image}`} />
                                                            </td>
                                                            <td>
                                                                <Link to={`/admin-product-edit/${item.id}`}>
                                                                    <button className='btn btn-primary'>E</button>
                                                                </Link>
                                                                    <button onClick={()=> deleteCategory(item.id)}  className='btn btn-danger ml-3'>D</button>
                                                            </td>

                                                        </tr>
                                                    )
                                                })
                                            }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Product
