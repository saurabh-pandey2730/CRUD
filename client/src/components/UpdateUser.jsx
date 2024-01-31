import React from 'react'

function UpdateUser() {
  return (
    <div className='d-flex bg-primary justify-content-center align-items-center vh-100'>
      <div className=" w-50 bg-white rounded p-3">
        <form>
             <h2>Add User</h2>
            <div className="mb-2">
                <label  >Name</label>
                <input type="text" className="form-control" placeholder='Enter Name'/>
            </div>
            <div className="mb-2">
                <label  >Email</label>
                <input type="email" className="form-control" placeholder='Enter Email'/>
            </div>
            <div className="mb-2">
                <label  >Age</label>
                <input type="text" className="form-control" placeholder='Enter Name'/>
            </div>
            <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
