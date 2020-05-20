import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../../components/Layout';
import api from '../../utils/api';
import './index.less';

export default class Home extends Component {
  static async getInitialProps(props) {
    const result = await api.getIndexData({name: 'chen', key: 1});

    return {result}
  }

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  routerTest = () => {
    Router.push('/userList', '002.aspx', { name: 'home' })
  }

  render(){
    const { result } = this.props;
    const headData = {
      keywords: '某个key',
      title: '某个title',
      description: '某个description'
    }
    
    return (
      <Layout headData={headData}>
        <h1 className="title">我是Next的首页</h1>
        <h2 onClick={this.routerTest}>也可以通过点击跳转</h2>
        <img src="/static/images/bank@2x.png" />
        <div>
          <p>接口请求预处理</p>
          <ul>
            <li>{result.article.name}</li>
            <li>{result.article.value}</li>
            <li>{result.article.time}</li>
            <li>{result.article.id}</li>
          </ul>
        </div>
        <Link as="002.aspx" href={{pathname: '/userList', query: {name: 'home'}}}>
          <a>用户列表页</a>
        </Link>
      </Layout>
    )
  }
}