import React from 'react';
import Header from '../../components/header/header';
import PageHeadView from '../../components/page-head/page-head';
import whoWeAreHeadImage from '../../assets/images/what-we-do/Header-min-1.png';
import Description from '../../components/description/description';
import Card from '../../components/card/card';
export default class WhoWeAreView extends React.Component {
    render() {
        const firstParagraph =
            'We are a South African based company with decades of fuel experience. We provide complete on-site mobile fuel & tank cleaning services for all GASOLINES including E10 to E85, DIESEL and BIO-DIESEL. We have branches in and around Gauteng Province.';
        const secondParagraph =
            'We provide mobile service for boats, storage tanks, heavy equipment, standby generators, tank farms, service stations and more! MTC Masters can successfully clean your most difficult tanks. Serving numerous industries, municipalities and utility companies, we are equipped to handle a broad spectrum of cleaning from 10-gallon acid neutralization tanks for medical and biotechnology companies to six million gallon 240-foot diameter refinery tanks.';
        const mvpObject = [
            {
                iconUrl: require('../../assets/images/who-we-are/eye.svg'),
                title: 'our vision',
                description:
                    'To be in the top three mobile fuel tank management service provider in South Africa'
            },
            {
                iconUrl: require('../../assets/images/who-we-are/target.svg'),
                title: 'our mission',
                description:
                    "To ensure that when we leave the client's premises their tanks are free of contaminants, intact, and are in the same volumes as we found them"
            },
            {
                iconUrl: require('../../assets/images/who-we-are/handshake.svg'),
                title: 'our promise',
                description:
                    'To give you an oustanding service. Should you not be satisfied with it, then we are more than happy to seek an immediate solution of whatever the issue may have been.'
            }
        ];
        return (
            <div>
                <Header path={this.props.match.path} />
                <PageHeadView
                    imgUrl={whoWeAreHeadImage}
                    imageStyle="head-image-style"
                    pageTitle="Who We Are"
                    pageTitleStyle="page-title-style"
                />
                <Description firstParagraph={firstParagraph} secondParagraph={secondParagraph} />
                <div className="mvp">
                    {mvpObject.map(mvp => (
                        <Card
                            key={mvp.title}
                            icon={mvp.iconUrl}
                            title={mvp.title}
                            description={mvp.description}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
