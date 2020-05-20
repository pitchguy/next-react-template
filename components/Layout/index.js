import React, {Fragment, Component} from 'react';
import { Button } from 'antd';
import Header from '../Header';
import Footer from '../Footer';

export default class Layout extends Component {
    render(){
        const { headData, children } = this.props;

        return(
            <Fragment>
                <Header {...headData} />
                <Button type="primary">Primary</Button>
                <div id="app">
                    {children}
                    <Footer />
                </div>
            </Fragment>
        )
    }
}