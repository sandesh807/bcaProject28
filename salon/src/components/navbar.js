import React from 'react'

export default function navbar() {
   
  return (
    
    <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="row">
        <div class="col-4" style={{paddingLeft:"40px"}}>
      <div class="nav-link active " aria-current="page" href="#" style={{paddingLeft:"60px",height:"100px",width:"260px",backgroundImage:'url("logo.png")'}}></div>
      </div>
      </div>
     
    
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="row">
        
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <div class="col-6"> 
    
        </div>
       
        <li class="nav-item">
          <a class="nav-link" href="#"  style={{paddingLeft:"30px"}}>Link</a>
        </li>
        <li class="nav-item dropdown">
          <a style={{paddingLeft:"30px"}} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a  style={{paddingLeft:"30px"}} class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
