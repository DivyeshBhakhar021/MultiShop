import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Shop(props) {


  const [productData, setProductData] = useState([]);
  const [SortBy, setSortBy] = useState('');
  const [price, setprice] = useState([]);
  const [color, setcolor] = useState([]);
  const [size, setsize] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:7001/Product");
      const data = await response.json();
      setProductData(data);


      const colordata = data.map((v) => v.color);
      setcolor([...new Set(colordata)]);

      const sizedata = data.map((v) => v.size);
      setsize([...new Set(sizedata)]);

      const pricedata = data.map((v) => v.price);
      setprice([...new Set(pricedata)]);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <a className="breadcrumb-item text-dark" href="#">Home</a>
              <a className="breadcrumb-item text-dark" href="#">Shop</a>
              <span className="breadcrumb-item active">Shop List</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* Shop Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          {/* Shop Sidebar Start */}
          <div className="col-lg-3 col-md-4">
            {/* Price Start */}
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                  <label className="custom-control-label" htmlFor="price-all">All Price</label>
                  <span className="badge border font-weight-normal">in stock</span>
                </div>
                {
                  price.map((v) => {
                    return (
                      <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" id={v} />
                        <label className="custom-control-label" htmlFor={v}>{v}</label>
                        <span className="badge border font-weight-normal">in stock</span>
                      </div>
                    )
                  })
                }


              </form>
            </div>
            {/* Price End */}
            {/* Color Start */}
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by color</span></h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" defaultChecked id="color-all" />
                  <label className="custom-control-label" htmlFor="price-all">All Color</label>
                  <span className="badge border font-weight-normal">in stock</span>
                </div>
                {
                  color.map((v) => {
                    return (
                      <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" id={v} />
                        <label className="custom-control-label" htmlFor={v}>{v}</label>
                        <span className="badge border font-weight-normal">in stock</span>
                      </div>
                    )
                  })
                }
              </form>
            </div>
            {/* Color End */}
            {/* Size Start */}
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by size</span></h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" defaultChecked id="size-all" />
                  <label className="custom-control-label" htmlFor="size-all">All Size</label>
                  <span className="badge border font-weight-normal">in stock</span>
                </div>
                {

                  size.map((v) => {
                    return (
                      <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" id={v} />
                        <label className="custom-control-label" htmlFor={v}>{v}</label>
                        <span className="badge border font-weight-normal">in stock</span>
                      </div>
                    )
                  })
                }


              </form>
            </div>
            {/* Size End */}
          </div>
          {/* Shop Sidebar End */}
          {/* Shop Product Start */}
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <button className="btn btn-sm btn-light"><i className="fa fa-th-large" /></button>
                    <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars" /></button>
                  </div>
                  <div className="ml-2">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">Latest</a>
                        <a className="dropdown-item" href="#">Popularity</a>
                        <a className="dropdown-item" href="#">Best Rating</a>
                      </div>
                    </div>
                    <div className="btn-group ml-2">
                      <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">10</a>
                        <a className="dropdown-item" href="#">20</a>
                        <a className="dropdown-item" href="#">30</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">

                {
                  productData.map((product, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                      <div className="product-item bg-light mb-4" key={index}>
                        <div className="product-img position-relative overflow-hidden">
                          <a to="">
                            <img className="img-fluid w-100" src={product.img} alt={product.name} />
                          </a>
                          <div className="product-action">
                            {/* Your Product Action Buttons */}
                          </div>
                        </div>
                        <div className="text-center py-4">
                          <Link to={`/shop/${product.id}`} className="h6 text-decoration-none text-truncate">{product.name}</Link>
                          <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>${product.price}</h5>
                          </div>
                          <div className="d-flex justify-content-between ">
                            <a onClick={() => setSortBy()} href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }


              </div>
              <div className="col-12">
                <nav>
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* Shop Product End */}
        </div>
      </div>
      {/* Shop End */}
    </div>
  );
}

export default Shop;