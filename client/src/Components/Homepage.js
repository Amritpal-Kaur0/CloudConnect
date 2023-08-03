import React from 'react'

export default function Homepage() {
  return (
    <div class="container">

    <div class="container login d-flex justify-content-center">
      <form>
      <h2>LOGIN</h2>

        <div class="mb-3">

          <input type="email" class="form-control" id="inputEmail" placeholder="Email address"></input>
        </div>

        <div class="mb-3">

          <input type="email" class="form-control" id="inputEmail" placeholder="Password"></input>

        </div>

      <button type="submit" class="btn btn-primary">SUBMIT</button>

      </form>

      </div>

    </div>
  )
}
