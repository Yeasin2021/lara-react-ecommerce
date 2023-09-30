import { useEffect, useState,React } from "react"
import axios from "axios"
import { Link } from 'react-router-dom';

const Brand = () => {
const [items,setItems] = useState([]);
const [status, setStatus] = useState([]);
useEffect(()=>{
    const data = async () =>{
        const response = await axios.get('/brand').then((res)=>setItems(res.data.brand));
    }
    data();
},[])

const deleteCategory = async (id) =>{

    if(window.confirm("Delete this Item") == true){
        await axios.delete(`/brand/${id}`);
        const newItems = items.filter((item)=>{
        return item.id !== id;
        });
        setItems(newItems);
    }else{
        console.log('Data not Deleted from this Record')
    }

  }


  const changeStatus = async (id) =>{

    if(window.confirm("Update this Item ?") == true){
        // Status update code
        await axios.post(`/brand-status/${id}`);
        // live status show (code)
        const data = async () =>{
        const response = await axios.get('/brand').then((res)=>setItems(res.data.brand));
        }
        data();
    }else{
        console.log('Somthimg is problem')
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
                                <strong class="card-title">Brand Table</strong>
                            </div>
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Brand</th>
                                            <th scope="col">Brand Description</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" style={{ textAlign:'center' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            items && items.map((item)=>{
                                                return(
                                                    <tr>
                                                        <th scope="row">{item.id}</th>
                                                        <td>{item.brand}</td>
                                                        <td>{item.brand_description}</td>
                                                        <td>{item.status == 1 ? 'Published':'Unpublished'}</td>
                                                        <td style={{ textAlign:'center' }}>
                                                            <Link to={`/admin-brand-edit/${item.id}`}>
                                                                <button className='btn btn-primary'>Edit</button>
                                                            </Link>
                                                            <button onClick={()=> deleteCategory(item.id)}  className='btn btn-danger ml-3'>Delete</button>
                                                            <button onClick={()=> changeStatus(item.id)} className="ml-3"><i className={item.status === 1 ? "fa fa-arrow-up" : "fa fa-arrow-down"}></i></button>
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

export default Brand
