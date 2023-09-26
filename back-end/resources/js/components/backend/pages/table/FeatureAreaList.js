import { useEffect, useState,React } from "react"
import axios from "axios"
import { Link } from 'react-router-dom';

const FeatureAreaList = () => {
const [items,setItems] = useState([]);
useEffect(()=>{
    const data = async () =>{
        const response = await axios.get('/feature').then((res)=>setItems(res.data.feature));
    }
    data();
},[])
  return (
    <div>
        <div class="content mt-3">
            <div class="animated fadeIn">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <strong class="card-title">Feature Table</strong>
                            </div>
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Icon</th>
                                            <th scope="col">Header Section</th>
                                            <th scope="col">Details Section</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            items && items.map((item)=>{
                                                return(
                                                    <tr>
                                                        <th scope="row">{item.id}</th>
                                                        <td><i className={item.icon}></i></td>
                                                        <td>{item.header}</td>
                                                        <td>{item.details}</td>
                                                        <td>
                                                            <Link to={`/admin-feature-edit/${item.id}`}>
                                                                <button className='btn btn-primary'>Edit</button>
                                                            </Link>
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

export default FeatureAreaList
