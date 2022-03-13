<template>
  
  <div class="sidebar-container">
          <div class="sidebar__profile" style="margin-top:20%; align-self: center;text-align:center; margin-bottom:1cm;">
            <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" alt="Profile Photo" style=" border-radius:50%;
            width: 30%;">
      </div>
  <div class="sidebar-logo">
    Clothing Store
  </div>
  <ul class="sidebar-navigation">
     <li>
      <a href="/productsDashboard">
        <i class="fa fa-tachometer" aria-hidden="true"></i> Products
      </a>
    </li>
    <li>
      <a href="/aboutDashboard">
        <i class="fa fa-home" aria-hidden="true"></i> About
      </a>
    </li>
  
    <li>
      <a href="/contactsDashboard">
        <i class="fa fa-users" aria-hidden="true"></i> Contacts
      </a>
    </li>
   
  </ul>
</div>
</template>
    

<script>
</script>
<style >

.sidebar-container {
  position:relative;
  width:270px;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: #000000;
  color: #fff;
}

.sidebar-logo {
  padding: 10px 10px 10px 75px;
  font-size: 30px;
  background-color: #214fb3;
}

.sidebar-navigation {
  padding:0;
  margin: 0;
  list-style-type: none;
  position: relative;
}

.sidebar-navigation li {
  background-color: transparent;
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 30px;
}

.sidebar-navigation li a {
  padding: 10px 10px 10px 75px;
  display: block;
  color: #fff;
  text-decoration: none;
}

.sidebar-navigation li .fa {
  margin-right: 10px;
}

.sidebar-navigation li a:active,
.sidebar-navigation li a:hover,
.sidebar-navigation li a:focus {
  text-decoration: none;
  outline: none;
}

.sidebar-navigation li::before {
  background-color: #2574A9;
  position: absolute;
  content: '';
  height: 100%;
  left: 0;
  top: 0;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 3px;
  z-index: -1;
}

.sidebar-navigation li:hover::before {
  width: 100%;
}

.sidebar-navigation .header {
  font-size: 12px;
  text-transform: uppercase;
  background-color: #151515;
  padding: 10px 15px 10px 30px;
}

.sidebar-navigation .header::before {
  background-color: transparent;
}



</style>