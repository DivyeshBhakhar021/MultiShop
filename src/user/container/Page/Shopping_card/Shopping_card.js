import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQty, incrementQty, removeQty } from '../../../../admin/component/cart/cart.slice';
import { productdata } from '../../../../reduct/reducer/Product.action';
import { getCoupon } from '../../../../reduct/slice/coupon.slice';
import { object, string } from 'yup';
import { useFormik } from 'formik';

function Shopping_card(props) {
  const [discount, setdiscount] = useState(0)


  useEffect(() => {
    dispatch(productdata());
    dispatch(getCoupon())
  }, []);

  const product = useSelector((state) => state.product)
  const cart = useSelector((state) => state.cart)
  console.log(cart, product);

  const allproductdata = cart.cart.map((v) => {
    const data = product.product.find((val) => val.id === v.productId)
    console.log(data);

    return { ...data, qty: v.qty }

  })
  console.log(allproductdata);

  const subtotal = allproductdata.reduce((a, b) => a + b.price * b.qty, 0)
  // const Total = subtotal * 1.18

  const coupon = useSelector((state) => state.coupon)
  console.log(coupon);

  const Shipping = discount > 0 ? 3 : 0

  const totalDiscount = subtotal * (discount / 100);

  const Total = subtotal - totalDiscount + Shipping;



  const dispatch = useDispatch();
  const handalincrement = (id) => {
    console.log(id);
    dispatch(incrementQty(id))
  }

  const handaldecrement = (id) => {
    console.log(id);
    dispatch(decrementQty(id))
  }

  const handaldel = (id) => {
    console.log(id);
    dispatch(removeQty(id))
  }


  let couponSchema = object({
    coupon: string().required("please coupon Enter"),
  });


  const handalcoupon = (data) => {
    let flag = 0;
    console.log(data);
    coupon.coupon.map((v) => {
      if (v.coupon === data.coupon) {
        const creenetDate = new Date();

        const expriDate = new Date(v.expriy)

        if (creenetDate <= expriDate) {
          flag = 1;
          setdiscount(v.percentage)
        } else {
          flag = 2;
        }

      }
      // if (cart.cart.length === 0) {
      //     formik.setFieldError("coupon", " cart is emty");
      // } else   
      if (flag === 0) {
        formik.setFieldError("coupon", " invalid couopn");
      } else if (flag === 1) {
        formik.setFieldError("coupon", "couopn valid");
      } else if (flag === 2) {
        formik.setFieldError("coupon", "expried");
      }
    })
  }


  const formik = useFormik({
    initialValues: {
      coupon: '',

    },
    validationSchema: couponSchema,
    onSubmit: (values) => {
      handalcoupon(values)
    }

  })
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik


  return (
    <div>
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <a className="breadcrumb-item text-dark" href="#">Home</a>
              <a className="breadcrumb-item text-dark" href="#">Shop</a>
              <span className="breadcrumb-item active">Shopping Cart</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* Cart Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {
                  allproductdata.map((v) => (
                    <tr>
                      <td className="align-middle"><img src={v.img} alt style={{ width: 50 }} />{v.name}</td>
                      <td className="align-middle">{v.price}$</td>
                      <td className="align-middle">
                        <div className="input-group quantity mx-auto" style={{ width: 100 }}>
                          <div className="input-group-btn">
                            <button onClick={() => handaldecrement(v.id)} className="btn btn-sm btn-primary btn-minus">
                              <i className="fa fa-minus" />
                            </button>
                          </div>
                          <span className="form-control form-control-sm bg-secondary border-0 text-center" >
                            {v.qty}
                          </span>
                          <div className="input-group-btn">
                            <button onClick={() => handalincrement(v.id)} className="btn btn-sm btn-primary btn-plus">
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">{v.price * v.qty}</td>
                      <td className="align-middle"><button onClick={() => handaldel(v.id)} className="btn btn-sm btn-danger"><i className="fa fa-times" /></button></td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-30" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="coupon"
                  className="form-control border-0 p-4"
                  placeholder="Coupon Code"
                  value={values.coupon}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.coupon && touched.coupon ? (
                  <span className="error">{errors.coupon}</span>
                ) : null} <br></br>

                <div className="input-group-append">
                  <button  type="submit" className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Cart Summary</span></h5>
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Subtotal</h6>
                  <h6>{subtotal}$</h6>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <h6>dicount:{discount}%</h6>
                  <h6>{totalDiscount}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$3</h6>
                </div>
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h5>${(Total).toFixed(2)}</h5>
                </div>
                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart End */}
    </div>

  );
}

export default Shopping_card;