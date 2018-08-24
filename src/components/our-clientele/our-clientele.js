import React from 'react';
import SimpleSlider from '../slider/slider';

export default class OurClientele extends React.Component {
    render() {
        const settings = {
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true
        };
        const clients = [
            {
                url: require('../../assets/images/clientele-logo/bp.png'),
                alt: 'bp-logo'
            },
            {
                url: require('../../assets/images/clientele-logo/caltex.png'),
                alt: 'caltex-logo'
            },
            {
                url: require('../../assets/images/clientele-logo/engen.png'),
                alt: 'engen-logo'
            },
            {
                url: require('../../assets/images/clientele-logo/flosolve.png'),
                alt: 'flosolve-logo'
            },
            {
                url: require('../../assets/images/clientele-logo/impact.png'),
                alt: 'impact-logo'
            },
            {
                url: require('../../assets/images/clientele-logo/neotel.png'),
                alt: 'neotel-logo'
            },
            {
                url: require('../../assets/images/clientele-logo/petroleum.png'),
                alt: 'petroleum-logo'
            },
            {
                url: require('../../assets/images/clientele-logo/shell.png'),
                alt: 'shell-logo'
            }
        ];
        return (
            <div className="our-clientele-container">
                <div className="left-section">
                    <h2 className="clientele-heading heading">
                        <span className="approach-border">Our</span> Clientele
                    </h2>
                    <p className="description our-clientele-description">
                        We are a dedicated, committed and competent fuel quality specialists with
                        SABS approved state of the art equipment.
                    </p>
                    <p className="description our-clientele-description sub-text">
                        Our mission is to ensure that when we leave the client premises we only take
                        the contaminants out of the tank and leave clean fuel, intact and in almost
                        the same volumes as we found it.
                    </p>
                </div>
                <div className="right-section">
                    <SimpleSlider settings={settings}>
                        <div className="client-slide">
                            {clients.map((client, idx) => {
                                if (idx > 5) return undefined;
                                else
                                    return (
                                        <img
                                            className="client-logo"
                                            key={client.alt}
                                            alt={client.alt}
                                            src={client.url}
                                        />
                                    );
                            })}
                        </div>
                        <div className="client-slide">
                            {clients
                                .slice(5)
                                .map(client => (
                                    <img
                                        className="client-logo"
                                        key={client.alt}
                                        alt={client.alt}
                                        src={client.url}
                                    />
                                ))}
                        </div>
                    </SimpleSlider>
                </div>
            </div>
        );
    }
}
