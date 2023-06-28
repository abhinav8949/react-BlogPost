import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"

const AddBlog = () => {
    let navigate = useNavigate();
    // let history=useHistory()
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

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3003/blogs", blog);
        navigate("/");
    }

    return (
        <div className="dash_color border_style">
            <div className="container border_style">
            <div class="row">
                    <div class="col mx-auto">
                        <Link className="" to="/">
                            Back to Home
                        </Link>
                    </div>
                    </div>
                <div className="w-75 mx-auto shadow p-1">
                    <h2 className="text-center mb-4">Add New Blog</h2>
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
                                placeholder="Posted By"
                                name="posted"
                                value={posted}
                                onChange={e => onInputChange(e)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success btn-block mx-2">Add Blog</button>
                        <button type="reset" class="signup-btn">clear</button>                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBlog;