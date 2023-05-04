import React from "react";
import { Drawer, List, Avatar, Divider, Col, Row } from "antd";

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

class App extends React.Component {
  //function App(){
  state = { visible: false }; //const [visible, setVisible] = useState(false)
  //
  showDrawer = () => {
    //setVisible = True;
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <List
          dataSource={[
            {
              name: "Ram",
            },
            // {
            //   name: "Kathirvel",
            // },
            // {
            //   name: "saran"
            // }
          ]}
          bordered
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                <a onClick={this.showDrawer} key={`a-${item.id}`}>
                  View Profile
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Placement"
              />
            </List.Item>
          )}
        />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p
            className="site-description-item-profile-p"
            style={{ marginBottom: 24 }}
          >
            User Profile
          </p>
          <p className="site-description-item-profile-p">Personal</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Full Name" content="Ramachandran" />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Account"
                content="ram@gmail.com"
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="City" content="Tirupur" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="India" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Birthday" content="February 2,1900" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Website" content="-" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Placement"
                content="placed in sopra steria"
              />
            </Col>
          </Row>
          <Divider />
          <p className="site-description-item-profile-p">Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content="ram@gmail.com" />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Phone Number"
                content="9803997899"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Github"
                content={
                  <a href="http://github.com/">
                    github profile
                  </a>
                }
              />
            </Col>
          </Row>
        </Drawer>
      </>
    );
  }
}

export default App;
