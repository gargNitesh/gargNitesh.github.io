import React from 'react';
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';



class Drop extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            value1:'Select Course'
        }
    }

    getChange=()=> {
      console.log("hello");
      
    }  

       handleMenuClick=(e)=> {
        this.props.sendAttack(e.key);
        this.setState({
            value1:e.key
        })

      }
render(){
    const menu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="Java">
              JAVA
          </Menu.Item>
          <Menu.Item key="Python">
            Python
          </Menu.Item>
          <Menu.Item key="Machine Learing">
              Machine Learing
          </Menu.Item>
        </Menu>
      );
      
    return(
  <div id="components-dropdown-demo-dropdown-button">
    <Dropdown.Button overlay={menu} >
      {this.state.value1}
    </Dropdown.Button>   
  </div>
);
}
}


export default Drop;