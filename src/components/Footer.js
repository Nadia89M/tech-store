import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Footer = ({ product: { socialIcons } }) => {
    return (
        <FooterWrapper>
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-capitalize">
                            copyright &copy; tech store {new Date().getFullYear()}. all
                    rights reserved{" "}
                        </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-around">
                        {socialIcons.map(item => (
                            <a href={item.url} key={item.id}>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTranstion);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;

Footer.propTypes = {
    product: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    product: state.product
});


export default connect(mapStateToProps)(Footer);