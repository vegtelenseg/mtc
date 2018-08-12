import React from 'react';
import PropTypes from 'prop-types';

export default class PageHeadView extends React.PureComponent {
    render() {
        const { imgUrl, pageTitle, imageStyle, pageTitleStyle } = this.props;
        return (
            <div>
                <img src={imgUrl} className={imageStyle} alt="page-head-view"/>
                <div className={pageTitleStyle}>
                    <span>{pageTitle}</span>
                </div>
            </div>
        );
    }
}

PageHeadView.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    pageTitle: PropTypes.string.isRequired,
    imageStyle: PropTypes.object.isRequired,
    pageTitleStyle: PropTypes.object.isRequired
};
