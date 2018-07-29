import React from 'react';
import Header from '../../components/header/header';

export default class WhoWeAreView extends React.Component {
    render() {
        return (
            <div>
                <Header path={this.props.match.path} />
            </div>
        );
    }
}
