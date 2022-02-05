<template>
  <div style="background-color: #212934">
    <div class="container">
      <div class="row">
        <div class="col-md-4 pt-5">
          <h2 class="h2 text-success border-bottom pb-3 border-light logo">
            Zay Shop
          </h2>
          <ul
            class="list-unstyled text-light footer-link-list"
            style="color: #cfd6e1 !important"
          >
            <li style="color: #cfd6e1 !important">
              <i class="fas fa-map-marker-alt fa-fw"></i>
              123 Consectetur at ligula 10660
            </li>
            <li style="color: #cfd6e1 !important">
              <i class="fa fa-phone fa-fw"></i>
              <a
                class="text-decoration-none"
                href="tel:010-020-0340"
                style="color: #cfd6e1 !important"
                >010-020-0340</a
              >
            </li>
            <li style="color: #cfd6e1 !important">
              <i class="fa fa-envelope fa-fw"></i>
              <a
                class="text-decoration-none"
                href="mailto:info@company.com"
                style="color: #cfd6e1 !important"
                >info@company.com</a
              >
            </li>
          </ul>
        </div>

        <div class="col-md-4 pt-5">
          <h2
            class="h2 text-light border-bottom pb-3 border-light"
            style="color: #cfd6e1 !important"
          >
            Products
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li style="color: #cfd6e1 !important">
              <a
                class="text-decoration-none"
                style="color: #cfd6e1 !important"
                href="/products"
                >All</a
              >
            </li>
            <li>
              <a
                class="text-decoration-none"
                style="color: #cfd6e1 !important"
                href="/products"
                >Men's Products</a
              >
            </li>
            <li>
              <a
                class="text-decoration-none"
                style="color: #cfd6e1 !important"
                href="/products"
                >Women's Products</a
              >
            </li>
          </ul>
        </div>

        <div class="col-md-4 pt-5">
          <h2
            class="h2 text-light border-bottom pb-3 border-light"
            style="color: #cfd6e1 !important"
          >
            Further Info
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li>
              <a
                class="text-decoration-none"
                href="/"
                style="color: #cfd6e1 !important"
                >Home</a
              >
            </li>
            <li>
              <a
                class="text-decoration-none"
                href="/about"
                style="color: #cfd6e1 !important"
                >About Us</a
              >
            </li>

            <li>
              <a
                class="text-decoration-none"
                href="/contact"
                style="color: #cfd6e1 !important"
                >Contact</a
              >
            </li>
            <li>
              <a
                class="text-decoration-none"
                href="/login"
                style="color: #cfd6e1 !important"
                >Login</a
              >
            </li>
            <li>
              <a
                class="text-decoration-none"
                href="/register"
                style="color: #cfd6e1 !important"
                >Register</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="row text-light mb-4">
        <div class="col-12 mb-3">
          <div class="w-100 my-3 border-top border-light"></div>
        </div>
        <div class="col-auto me-auto">
          <ul class="list-inline text-left footer-icons" style="width: 200px">
            <li
              class="list-inline-item border border-light rounded-circle text-center"
              style="width: 30px"
            >
              <a
                class="text-light text-decoration-none"
                href="#"
                style="color: #cfd6e1 !important"
                ><i class="fa fa-facebook"></i
              ></a>
            </li>
            <li
              class="list-inline-item border border-light rounded-circle text-center"
              style="width: 30px"
            >
              <a class="text-light text-decoration-none" href="#"
                ><i class="fa fa-instagram"></i
              ></a>
            </li>
            <li
              class="list-inline-item border border-light rounded-circle text-center"
              style="width: 30px"
            >
              <a class="text-light text-decoration-none" href="#"
                ><i class="fa fa-twitter"></i
              ></a>
            </li>
            <li
              class="list-inline-item border border-light rounded-circle text-center"
              style="width: 30px"
            >
              <a class="text-light text-decoration-none" href="#"
                ><i class="fa fa-linkedin"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="col-auto">
          <label
            class="sr-only"
            for="subscribeEmail"
            style="color: #cfd6e1 !important"
            >Email address</label
          >
          <div class="input-group mb-2">
            <input
              type="text"
              class="form-control border-light"
              id="subscribeEmail"
              placeholder="Email address"
              style="background-color: #212934; outline: none"
            />
            <div
              class="input-group-text btn-success text-light"
              style="color: #cfd6e1 !important"
            >
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped></style>
