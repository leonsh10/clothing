<template>
  <div>
    <Header />
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-3">
          <h1 class="h2 pb-4">Categories</h1>
          <div class="row">
            <b-button
              :class="visibleGender ? null : 'collapsed'"
              :aria-expanded="visibleGender ? 'true' : 'false'"
              aria-controls="collapse-4"
              @click="visibleGender = !visibleGender"
              style="
                display: flex;
                justify-content: space-between;
                background-color: transparent;
                border: none;
                font-size: 22px;
              "
            >
              Gender <i class="fa fa-fw fa-chevron-circle-down mt-1"></i>
            </b-button>
            <b-collapse id="collapse-4" v-model="visibleGender" class="mt-2">
              <ul class="collapse show list-unstyled pl-3">
                <li>
                  <a class="text-decoration-none collapse-links" href="#"
                    >Men</a
                  >
                </li>
                <li>
                  <a class="text-decoration-none collapse-links" href="#"
                    >Women</a
                  >
                </li>
              </ul>
            </b-collapse>
            <b-button
              :class="visibleSale ? null : 'collapsed'"
              :aria-expanded="visibleSale ? 'true' : 'false'"
              aria-controls="collapse-4"
              @click="visibleSale = !visibleSale"
              style="
                display: flex;
                justify-content: space-between;
                background-color: transparent;
                border: none;
                font-size: 22px;
              "
            >
              Sale
              <i class="fa fa-fw fa-chevron-circle-down mt-1"></i>
            </b-button>
            <b-collapse id="collapse-4" v-model="visibleSale" class="mt-2">
              <ul class="collapse show list-unstyled pl-3">
                <li>
                  <a class="text-decoration-none collapse-links" href="#"
                    >Sport</a
                  >
                </li>
                <li>
                  <a class="text-decoration-none collapse-links" href="#"
                    >Luxury</a
                  >
                </li>
              </ul>
            </b-collapse>
            <b-button
              :class="visibleProduct ? null : 'collapsed'"
              :aria-expanded="visibleProduct ? 'true' : 'false'"
              aria-controls="collapse-4"
              @click="visibleProduct = !visibleProduct"
              style="
                display: flex;
                justify-content: space-between;
                background-color: transparent;
                border: none;
                font-size: 22px;
              "
            >
              Product <i class="fa fa-fw fa-chevron-circle-down mt-1"></i>
            </b-button>
            <b-collapse id="collapse-4" v-model="visibleProduct" class="mt-2">
              <ul class="collapse show list-unstyled pl-3">
                <li>
                  <a class="text-decoration-none collapse-links" href="#"
                    >Bag</a
                  >
                </li>
                <li>
                  <a class="text-decoration-none collapse-links" href="#"
                    >Sweather</a
                  >
                </li>
                <li>
                  <a class="text-decoration-none collapse-links" href="#"
                    >Sunglass</a
                  >
                </li>
              </ul>
            </b-collapse>
          </div>
        </div>

        <div class="col-lg-9">
          <div class="row">
            <div class="col-md-6">
              <ul class="list-inline shop-top-menu pb-3 pt-1">
                <li class="list-inline-item">
                  <a class="h3 text-dark text-decoration-none mr-3" href="#"
                    >All</a
                  >
                </li>
                <li class="list-inline-item">
                  <a class="h3 text-dark text-decoration-none mr-3" href="#"
                    >Men's</a
                  >
                </li>
                <li class="list-inline-item">
                  <a class="h3 text-dark text-decoration-none" href="#"
                    >Women's</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-6 pb-4">
              <div class="d-flex">
                <select class="form-control">
                  <option>Featured</option>
                  <option>A to Z</option>
                  <option>Item</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                  <img
                    class="card-img rounded-0 img-fluid"
                    src="https://picsum.photos/1024/480/?image=52"
                  />
                  <div
                    class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
                  >
                    <ul class="list-unstyled">
                      <li>
                        <a class="btn btn-success text-white" href="#"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-eye"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-cart-plus"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <a href="#" class="h3 text-decoration-none">Oupidatat non</a>
                  <ul
                    class="w-100 list-unstyled d-flex justify-content-between mb-0"
                  >
                    <li>M/L/X/XL</li>
                    <li class="pt-2">
                      <span
                        class="product-color-dot color-dot-red float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-blue float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-black float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-light float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-green float-left rounded-circle ml-1"
                      ></span>
                    </li>
                  </ul>
                  <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p class="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                  <img
                    class="card-img rounded-0 img-fluid"
                    src="https://picsum.photos/1024/480/?image=52"
                  />
                  <div
                    class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
                  >
                    <ul class="list-unstyled">
                      <li>
                        <a class="btn btn-success text-white" href="#"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-eye"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-cart-plus"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <a href="#" class="h3 text-decoration-none">Oupidatat non</a>
                  <ul
                    class="w-100 list-unstyled d-flex justify-content-between mb-0"
                  >
                    <li>M/L/X/XL</li>
                    <li class="pt-2">
                      <span
                        class="product-color-dot color-dot-red float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-blue float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-black float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-light float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-green float-left rounded-circle ml-1"
                      ></span>
                    </li>
                  </ul>
                  <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p class="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                  <img
                    class="card-img rounded-0 img-fluid"
                    src="https://picsum.photos/1024/480/?image=52"
                  />
                  <div
                    class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
                  >
                    <ul class="list-unstyled">
                      <li>
                        <a class="btn btn-success text-white" href="#"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-eye"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-cart-plus"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <a href="#" class="h3 text-decoration-none">Oupidatat non</a>
                  <ul
                    class="w-100 list-unstyled d-flex justify-content-between mb-0"
                  >
                    <li>M/L/X/XL</li>
                    <li class="pt-2">
                      <span
                        class="product-color-dot color-dot-red float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-blue float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-black float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-light float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-green float-left rounded-circle ml-1"
                      ></span>
                    </li>
                  </ul>
                  <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p class="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                  <img
                    class="card-img rounded-0 img-fluid"
                    src="https://picsum.photos/1024/480/?image=52"
                  />
                  <div
                    class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
                  >
                    <ul class="list-unstyled">
                      <li>
                        <a class="btn btn-success text-white" href="#"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-eye"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-cart-plus"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <a href="#" class="h3 text-decoration-none">Oupidatat non</a>
                  <ul
                    class="w-100 list-unstyled d-flex justify-content-between mb-0"
                  >
                    <li>M/L/X/XL</li>
                    <li class="pt-2">
                      <span
                        class="product-color-dot color-dot-red float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-blue float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-black float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-light float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-green float-left rounded-circle ml-1"
                      ></span>
                    </li>
                  </ul>
                  <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p class="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                  <img
                    class="card-img rounded-0 img-fluid"
                    src="https://picsum.photos/1024/480/?image=52"
                  />
                  <div
                    class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
                  >
                    <ul class="list-unstyled">
                      <li>
                        <a class="btn btn-success text-white" href="#"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-eye"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-cart-plus"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <a href="#" class="h3 text-decoration-none">Oupidatat non</a>
                  <ul
                    class="w-100 list-unstyled d-flex justify-content-between mb-0"
                  >
                    <li>M/L/X/XL</li>
                    <li class="pt-2">
                      <span
                        class="product-color-dot color-dot-red float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-blue float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-black float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-light float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-green float-left rounded-circle ml-1"
                      ></span>
                    </li>
                  </ul>
                  <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p class="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                  <img
                    class="card-img rounded-0 img-fluid"
                    src="https://picsum.photos/1024/480/?image=52"
                  />
                  <div
                    class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
                  >
                    <ul class="list-unstyled">
                      <li>
                        <a class="btn btn-success text-white" href="#"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-eye"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-cart-plus"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <a href="#" class="h3 text-decoration-none">Oupidatat non</a>
                  <ul
                    class="w-100 list-unstyled d-flex justify-content-between mb-0"
                  >
                    <li>M/L/X/XL</li>
                    <li class="pt-2">
                      <span
                        class="product-color-dot color-dot-red float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-blue float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-black float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-light float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-green float-left rounded-circle ml-1"
                      ></span>
                    </li>
                  </ul>
                  <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p class="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                  <img
                    class="card-img rounded-0 img-fluid"
                    src="https://picsum.photos/1024/480/?image=52"
                  />
                  <div
                    class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
                  >
                    <ul class="list-unstyled">
                      <li>
                        <a class="btn btn-success text-white" href="#"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-eye"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-cart-plus"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <a href="#" class="h3 text-decoration-none">Oupidatat non</a>
                  <ul
                    class="w-100 list-unstyled d-flex justify-content-between mb-0"
                  >
                    <li>M/L/X/XL</li>
                    <li class="pt-2">
                      <span
                        class="product-color-dot color-dot-red float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-blue float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-black float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-light float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-green float-left rounded-circle ml-1"
                      ></span>
                    </li>
                  </ul>
                  <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p class="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                  <img
                    class="card-img rounded-0 img-fluid"
                    src="https://picsum.photos/1024/480/?image=52"
                  />
                  <div
                    class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
                  >
                    <ul class="list-unstyled">
                      <li>
                        <a class="btn btn-success text-white" href="#"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-eye"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-cart-plus"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <a href="#" class="h3 text-decoration-none">Oupidatat non</a>
                  <ul
                    class="w-100 list-unstyled d-flex justify-content-between mb-0"
                  >
                    <li>M/L/X/XL</li>
                    <li class="pt-2">
                      <span
                        class="product-color-dot color-dot-red float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-blue float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-black float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-light float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-green float-left rounded-circle ml-1"
                      ></span>
                    </li>
                  </ul>
                  <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p class="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                  <img
                    class="card-img rounded-0 img-fluid"
                    src="https://picsum.photos/1024/480/?image=52"
                  />
                  <div
                    class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
                  >
                    <ul class="list-unstyled">
                      <li>
                        <a class="btn btn-success text-white" href="#"
                          ><i class="fa fa-heart-o"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-eye"></i
                        ></a>
                      </li>
                      <li>
                        <a class="btn btn-success text-white mt-2" href="#"
                          ><i class="fa fa-cart-plus"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <a href="#" class="h3 text-decoration-none">Oupidatat non</a>
                  <ul
                    class="w-100 list-unstyled d-flex justify-content-between mb-0"
                  >
                    <li>M/L/X/XL</li>
                    <li class="pt-2">
                      <span
                        class="product-color-dot color-dot-red float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-blue float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-black float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-light float-left rounded-circle ml-1"
                      ></span>
                      <span
                        class="product-color-dot color-dot-green float-left rounded-circle ml-1"
                      ></span>
                    </li>
                  </ul>
                  <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p class="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
          </div>
          <div div="row">
            <ul class="pagination pagination-lg justify-content-end">
              <li class="page-item disabled">
                <a
                  class="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                  href="#"
                  tabindex="-1"
                  >1</a
                >
              </li>
              <li class="page-item">
                <a
                  class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                  href="#"
                  >2</a
                >
              </li>
              <li class="page-item">
                <a
                  class="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                  href="#"
                  >3</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section class="bg-light py-5">
      <div class="container my-4">
        <div class="row text-center py-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Our Brands</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div class="col-lg-9 m-auto tempaltemo-carousel">
            <div class="row d-flex flex-row">
              <!--Controls-->
              <div class="col-1 align-self-center">
                <a
                  class="h1"
                  href="#multi-item-example"
                  role="button"
                  data-bs-slide="prev"
                >
                  <i class="text-light fa fa-chevron-left"></i>
                </a>
              </div>
              <!--End Controls-->

              <!--Carousel Wrapper-->
              <div class="col">
                <div
                  class="carousel slide carousel-multi-item pt-2 pt-md-0 pointer-event"
                  id="multi-item-example"
                  data-bs-ride="carousel"
                >
                  <!--Slides-->
                  <div class="carousel-inner product-links-wap" role="listbox">
                    <!--First slide-->
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-3 p-md-5">
                          <a href="#"
                            ><img
                              class="img-fluid brand-img"
                              src="https://picsum.photos/1024/480/?image=52"
                              alt="Brand Logo"
                          /></a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#"
                            ><img
                              class="img-fluid brand-img"
                              src="https://picsum.photos/1024/480/?image=52"
                              alt="Brand Logo"
                          /></a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#"
                            ><img
                              class="img-fluid brand-img"
                              src="https://picsum.photos/1024/480/?image=52"
                              alt="Brand Logo"
                          /></a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#"
                            ><img
                              class="img-fluid brand-img"
                              src="https://picsum.photos/1024/480/?image=52"
                              alt="Brand Logo"
                          /></a>
                        </div>
                      </div>
                    </div>
                    <!--End First slide-->

                    <!--Second slide-->
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-3 p-md-5">
                          <a href="#"
                            ><img
                              class="img-fluid brand-img"
                              src="https://picsum.photos/1024/480/?image=52"
                              alt="Brand Logo"
                          /></a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#"
                            ><img
                              class="img-fluid brand-img"
                              src="https://picsum.photos/1024/480/?image=52"
                              alt="Brand Logo"
                          /></a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#"
                            ><img
                              class="img-fluid brand-img"
                              src="https://picsum.photos/1024/480/?image=52"
                              alt="Brand Logo"
                          /></a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#"
                            ><img
                              class="img-fluid brand-img"
                              src="https://picsum.photos/1024/480/?image=52"
                              alt="Brand Logo"
                          /></a>
                        </div>
                      </div>
                    </div>
                    <!--End Second slide-->

                    <!--Third slide-->
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-3 p-md-5">
                          <a href="#"
                            ><img
                              class="img-fluid brand-img"
                              src="https://picsum.photos/1024/480/?image=52"
                              alt="Brand Logo"
                          /></a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#"
                            ><img
                              class="img-fluid brand-img"
                              src="https://picsum.photos/1024/480/?image=52"
                              alt="Brand Logo"
                          /></a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#"
                            ><img
                              class="img-fluid brand-img"
                              src="https://picsum.photos/1024/480/?image=52"
                              alt="Brand Logo"
                          /></a>
                        </div>
                        <div class="col-3 p-md-5">
                          <a href="#"
                            ><img
                              class="img-fluid brand-img"
                              src="https://picsum.photos/1024/480/?image=52"
                              alt="Brand Logo"
                          /></a>
                        </div>
                      </div>
                    </div>
                    <!--End Third slide-->
                  </div>
                  <!--End Slides-->
                </div>
              </div>
              <!--End Carousel Wrapper-->

              <!--Controls-->
              <div class="col-1 align-self-center">
                <a
                  class="h1"
                  href="#multi-item-example"
                  role="button"
                  data-bs-slide="next"
                >
                  <i class="text-light fa fa-chevron-right"></i>
                </a>
              </div>
              <!--End Controls-->
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      visibleGender: false,
      visibleSale: false,
      visibleProduct: false,
    };
  },
};
</script>

<style scoped></style>
