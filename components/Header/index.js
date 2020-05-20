import React, {Fragment, PureComponent} from 'react';
import Head from 'next/head';

export default (props) => {
        const {keywords, description, title} = props;

        return (
            <Head>
                <meta charSet="utf-8"/>
                <meta name="keywords" content={keywords || ''}/>
                <meta name="description" content={description || ''}/>
                <meta name="viewport"
                    content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1,user-scalable=no,viewport-fit=cover"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="applicable-device" content="mobile"/>
                {/* <link href={`https://www.taxspirit.com${asName}`} rel="canonical"/> */}
                {/* <script src='/static/js/resize.js'></script> */}
                <link rel="shortcut icon" href="/static/images/favicon.ico"/>
                <title>{title || ''}</title>
            </Head>
        )
}