import React, { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom";

const EditBlog = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    const [blog, setBlog] = useState({
        title: "",
        categories: "",
        content: "",
        posted: ""
    });

    const { title, categories, content, posted } = blog;

    const onInputChange = e => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/blogs/${id}`, blog);
        navigate("/");
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/blogs/${id}`)
        setBlog(result.data);
    }

    return (
        <div className="dash_color border_style">
            <div className="container border_style">
            <div class="row">
                    <div class="col mx-auto">
                        <Link className="" to={`/blogdetails/${blog.id}`}>
                            Back
                        </Link>
                    </div>
                    </div>
                <div className="w-75 mx-auto shadow p-1">
                    <h2 className="text-center mb-4">Edit Blog</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Title"
                                name="title"
                                value={title}
                                onChange={e => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Categories"
                                name="categories"
                                value={categories}
                                onChange={e => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <textarea className="form-control form-control-lg"
                                placeholder="Enter Your Content"
                                name="content"
                                value={content}
                                onChange={e => onInputChange(e)}
                                required
                            >
                            </textarea>
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Posted"
                                name="posted"
                                value={posted}
                                onChange={e => onInputChange(e)}
                                required
                            />
                        </div>
                        <button className="btn btn-warning btn-block">Update Blog</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default EditBlog;