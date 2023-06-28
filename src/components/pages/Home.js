import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

const Home = () => {
    const [blogs, setBlog] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/blogs")
        setBlog(result.data.reverse());
        console.log(result);
    }

    // const deleteUser=async id=>{
    //     await axios.delete(`http://localhost:3003/users/${id}`)
    //     loadUsers();
    // }

    return (
        <div className="container-fluid dash_color border_style">

            <div className="py-2 border_style">
                <div className="row mb-2">
                    <div className="col">
                        <h4>Blog Home Page</h4>
                    </div>
                    <div className="col text-end">
                        <Link to="/addblog" className='btn btn-outline-primary'>Add New Blog</Link>
                    </div>
                </div>
                <table className="table border shadow text-center">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Posted By</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs.map((blog, index) => (
                                <tr>
                                    <th scope="row"> {blog.id} </th>
                                    <td>{blog.title}</td>
                                    <td>{blog.categories}</td>
                                    <td>{blog.posted}</td>
                                    <td>
                                        <Link to={`/blogdetails/${blog.id}`} class="btn btn-outline-dark mr-2"><i class="bi bi-eye-fill"></i></Link>
                                        {/* <Link to={`/editblog/${user.id}`} class="btn btn-outline-primary mr-2">Edit</Link> */}
                                        {/* <Link onClick={()=>deleteUser(user.id)} class="btn btn-outline-danger mr-2">Delete</Link> */}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home