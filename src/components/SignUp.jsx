import React from 'react'

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 py-5">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title font-extrabold justify-center">SIGN UP</h2>
          <div className="justify-center space-y-4 mt-4">
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">First Name:</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Last Name:</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Email Id:</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">age:</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Gender:</span>
              </label>
              <input
                type=""
                className="input input-bordered"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">About:</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Skills:</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Password:</span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                placeholder="Type here"
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
