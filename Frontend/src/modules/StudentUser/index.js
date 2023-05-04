// import React from "react";
// import { Drawer, List, Avatar, Divider, Col, Row } from "antd";

// const DescriptionItem = ({ title, content }) => (
//   <div className="site-description-item-profile-wrapper">
//     <p className="site-description-item-profile-p-label">{title}:</p>
//     {content}
//   </div>
// );

// class App extends React.Component {
//   //function App(){
//   state = { visible: false }; //const [visible, setVisible] = useState(false)
//   //
//   showDrawer = () => {
//     //setVisible = True;
//     this.setState({
//       visible: true,
//     });
//   };

//   onClose = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   render() {
//     return (
//       <>
//         <List
//           dataSource={[
//             {
//               name: "Ram",
//             },
//             // {
//             //   name: "Kathirvel",
//             // },
//             // {
//             //   name: "saran"
//             // }
//           ]}
//           bordered
//           renderItem={(item) => (
//             <List.Item
//               key={item.id}
//               actions={[
//                 <a onClick={this.showDrawer} key={`a-${item.id}`}>
//                   View Profile
//                 </a>,
//               ]}
//             >
//               <List.Item.Meta
//                 avatar={
//                   <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
//                 }
//                 title={<a href="https://ant.design/index-cn">{item.name}</a>}
//                 description="Placement"
//               />
//             </List.Item>
//           )}
//         />
//         <Drawer
//           width={640}
//           placement="right"
//           closable={false}
//           onClose={this.onClose}
//           visible={this.state.visible}
//         >
//           <p
//             className="site-description-item-profile-p"
//             style={{ marginBottom: 24 }}
//           >
//             User Profile
//           </p>
//           <p className="site-description-item-profile-p">Personal</p>
//           <Row>
//             <Col span={12}>
//               <DescriptionItem title="Full Name" content="Ramachandran" />
//             </Col>
//             <Col span={12}>
//               <DescriptionItem
//                 title="Account"
//                 content="ram@gmail.com"
//               />
//             </Col>
//           </Row>
//           <Row>
//             <Col span={12}>
//               <DescriptionItem title="City" content="Tirupur" />
//             </Col>
//             <Col span={12}>
//               <DescriptionItem title="Country" content="India" />
//             </Col>
//           </Row>
//           <Row>
//             <Col span={12}>
//               <DescriptionItem title="Birthday" content="February 2,1900" />
//             </Col>
//             <Col span={12}>
//               <DescriptionItem title="Website" content="-" />
//             </Col>
//           </Row>
//           <Row>
//             <Col span={24}>
//               <DescriptionItem
//                 title="Placement"
//                 content="placed in sopra steria"
//               />
//             </Col>
//           </Row>
//           <Divider />
//           <p className="site-description-item-profile-p">Contacts</p>
//           <Row>
//             <Col span={12}>
//               <DescriptionItem title="Email" content="ram@gmail.com" />
//             </Col>
//             <Col span={12}>
//               <DescriptionItem
//                 title="Phone Number"
//                 content="9803997899"
//               />
//             </Col>
//           </Row>
//           <Row>
//             <Col span={24}>
//               <DescriptionItem
//                 title="Github"
//                 content={
//                   <a href="http://github.com/">
//                     github profile
//                   </a>
//                 }
//               />
//             </Col>
//           </Row>
//         </Drawer>
//       </>
//     );
//   }
// }

// export default App;
import Search from "antd/lib/transfer/search";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const User = () => {
  const [data, setData] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = () => {
    axios('http://localhost:5000/api/v1/getall')
    .then((data) => {
      console.log(data,"data")
      setAllUsers(data.data);
    })
    .catch((e) => console.log(e,"all"));
  }

  useEffect(() => {
    getAllUsers();
  }, [])
  // console.log(getAllUsers)
  // allUsers.filter(user =>{
  //   if()
  // })
return(
  <div className="table">
    <Search onChange={(e) => setData(e.target.value)} placeholder="Search"></Search> <br /><br />
    <table>
      <tr>
        <th>Name</th>
        <th>Roll_no</th>
        <th>Department</th>
        <th>Email</th>
        <th>Role</th>
        <th>Phone</th>
        <th>Placement</th>
        <th>Address</th>
        <th>SSLC</th>
        <th>HSC</th>
        <th>CGPA</th>
        <th>Action</th>
      </tr>
      {allUsers.map((user) => {
        return(
          <tr>
            <td>{user.Name}</td>
            <td>{user.Roll_no}</td>
            <td>{user.Dept}</td>
            <td>{user.Email}</td>
            <td>{user.Role}</td>
            <td>{user.Phone}</td>
            <td>{user.Placement}</td>
            <td>{user.Address}</td>
            <td>{user.SSLC}</td>
            <td>{user.HSC}</td>
            <td>{user.CGPA}</td>
            
          </tr>
        )
      })}
    </table>
  </div>
)
}

export default User;