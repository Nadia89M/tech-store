import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import singleProductImg from "../images/singleProductBcg.jpeg";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../actions/productActions';

const SingleProductPage = ({ product: { singleProduct }, addToCart }) => {
    const {
        company,
        description,
        price,
        title,
        image
    } = singleProduct;
    return (
        <>
            <Hero img={singleProductImg} title={title} />
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                            <img
                                src={`/${image}`}
                                // src={image}
                                alt="single product"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                            <h5 className="text-title mb-4">model :{title} </h5>
                            <h5 className="text-capitalize text-muted mb-4">
                                company : {company}
                            </h5>
                            <h5 className="text-main text-capitalize mb-4">
                                price : ${price}
                            </h5>
                            <p className="text-capitalize text-title mt-3">
                                some info about product :
                    </p>
                            <p>{description}</p>
                            <button
                                type="button"
                                className="main-link"
                                style={{ margin: "0.75rem" }}
                                onClick={() => addToCart(singleProduct)}
                            >
                                add to cart
                    </button>
                            <Link
                                to="/products"
                                className="main-link"
                                style={{ margin: "0.75rem" }}
                            >
                                back to products
                    </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

SingleProductPage.propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps, { addToCart })(SingleProductPage);