import React from "react"

const Contact = () => {
    return (
        <div className="container">
            <div className="py-4">

                <div className="row">
                    <h4>Contact us Page</h4>
                    <div className="col-md-6 offset-md-3">
                        <form>
                            <div class="row g-3 align-items-center mb-2">
                                <div class="col-auto">
                                    <label for="" class="col-form-label">Name</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" name="name" id="" class="form-control"  />
                                </div>
                            </div>

                            <div class="row g-3 align-items-center mb-2">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Contact</label>
                                </div>
                                <div class="col-auto">
                                    <input type="number" name="phone" id="" class="form-control" />
                                </div>
                            </div>

                            <div class="row g-3 align-items-center mb-2">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Email</label>
                                </div>
                                <div class="col-auto">
                                    <input type="email" name="email" id="" class="form-control" />
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact