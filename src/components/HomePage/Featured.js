import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../Product';
import { Link } from "react-router-dom";
import { setProducts } from '../../actions/productActions';
import PropTypes from 'prop-types';
import Title from "../Title";

const Featured = ({ product: { storeProducts }, setProducts }) => {
    useEffect(() => {
        setProducts();
        // eslint-disable-next-line
    }, []);
    let featuredProducts = storeProducts.filter(product => product.featured)

    return (
        <section className="py-5">
            <div className="container">
                {/* title */}
                <Title title="featured products" center="true" />
                {/* products */}
                <div className="row">
                    {featuredProducts.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                    }

                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <Link to="/products" className="main-link">
                            our products
                          </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

Featured.propTypes = {
    product: PropTypes.object.isRequired,
    setProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    product: state.product
});


export default connect(mapStateToProps, { setProducts })(Featured);

