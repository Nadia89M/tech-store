import React, { useEffect } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Title from "../Title";
import Product from "../Product";
import { setProducts } from '../../actions/productActions';

const Products = ({ product: { storeProducts }, setProducts }) => {
    useEffect(() => {
        setProducts();
        // eslint-disable-next-line
    }, []);
    return (
        <section className="py-5">
            <div className="container">
                {/* title */}
                <Title center title="our products" />
                {/* products */}
                <div className="row py-5">
                    {storeProducts.map(product => {
                        return <Product key={product.id} product={product} />;
                    })}
                </div>
            </div>
        </section>
    );
}

Products.propTypes = {
    product: PropTypes.object.isRequired,
    setProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    product: state.product
});


export default connect(mapStateToProps, { setProducts })(Products);