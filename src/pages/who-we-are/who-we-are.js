import React from 'react';
import Header from '../../components/header/header';
import PageHeadView from '../../components/page-head/page-head';
import whoWeAreHeadImage from '../../assets/images/what-we-do/Header-min-1.png';
export default class WhoWeAreView extends React.Component {
    render() {
        return (
            <div>
                <Header path={this.props.match.path} />
                <PageHeadView
                    imgUrl={whoWeAreHeadImage}
                    imageStyle="head-image-style"
                    pageTitle="Who We Are"
                    pageTitleStyle="page-title-style"
                />
            </div>
        );
    }
}
