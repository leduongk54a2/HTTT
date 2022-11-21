import React, { Component } from "react";
import { Layout, Button, Space } from "antd";
import withRouter from "../../hocs/withRouter";
import ROUTES from "../../router/router";

import "antd/dist/reset.css";
import "./index.scss";
const { Header, Footer, Sider, Content } = Layout;

class Homepage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>Hệ Chuyên gia</Header>
          <Layout>
            <Content>
              <div className="background-ptit"></div>
              <div className="content-title">
                Tư vấn ngành nghề phù hợp với bản thân
              </div>
              <div className="btn-wrapper">
                <Button
                  onClick={() => this.props.navigate(ROUTES.MANAGEMENT_EVENT)}
                >
                  Sự kiện
                </Button>
                <Button>Luật</Button>
                <Button>Tư vấn</Button>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(Homepage);
