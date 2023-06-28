import React, { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom";


const BlogDetails = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    const [blog, setBlog] = useState({
        title: "",
        categories: "",
        content: "",
        posted: ""
    });

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/blogs/${id}`)
        setBlog(result.data);
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/blogs/${id}`)
        // loadUsers();
        navigate("/");
    }


    return (
        <div className="dash_color border_style">
            <div className="container py-4">
                <div class="row">
                    <div class="col mx-auto">
                        <Link className="" to="/">
                            Back to Home
                        </Link>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-outline-danger position-relative mx-4">
                            {/* <Link class="btn btn-outline-danger mx-4"></Link> */}
                            <i class="bi bi-hand-thumbs-up-fill"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                1
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </button>

                        <Link to={`/editblog/${blog.id}`} class="btn btn-warning mx-2"><i class="bi bi-pencil-square"></i></Link>
                        <Link onClick={() => deleteUser(blog.id)} class="btn btn-danger"><i class="bi bi-archive-fill"></i></Link>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col">
                        <h5 className="">Blog Id: {id}</h5>
                    </div>
                    <div class="col">
                        <li className="list-group-item"><b>Title:</b> {blog.title}</li>
                    </div>
                    <div class="col">
                        <li className="list-group-item"><b>Categories:</b> {blog.categories}</li>
                    </div>
                    <div class="col">
                        <li className="list-group-item"><b>Posted By:</b> {blog.posted}</li>
                    </div>
                </div>
                <hr />
                <ul className="list-group w-100">
                    <li className="list-group-item"><b>Content:</b> {blog.content}</li>
                </ul>
            </div>
        </div>
    );
}

export default BlogDetails;
