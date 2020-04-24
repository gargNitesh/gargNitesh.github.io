import React,{Component} from "react";
import {Button,Form,Input,DatePicker,Dropdown,Menu,Col,Row} from "antd";
import 'antd/es/date-picker/style/css';
import Drop from "./drop";

const InputGroup = Input.Group;
const {Option}=Dropdown;

let arr=[];
class Components extends Component
{
    
    constructor(props)
    {
        super(props);
         this.state={
             value:[],
             data:''
         }
    }
   getAttack = (data) => {
      console.log("Nitesh Garg");
      console.log(data);
      this.setState({data});
  }
    func1=(e)=>{
        e.preventDefault();
        
        arr.push(e._targetInst.child.stateNode.value)
        this.setState({value:[...this.state.value,e._targetInst.child.stateNode.value]})
        console.log(arr);
        }

    func(e){
        console.log(e.target.value);
        this.setState({
            value:e.target.value
        })
    }
   
    onFinish = values => {
      debugger;
      console.log('Received values of form: ', values);
    };
    
    render(){
       
        const menu = (
            <Menu>
              <Menu.Item key="0" value="Java">
                <h4>JAVA</h4>
              </Menu.Item>
              <Menu.Item key="1" value="Python">
              <h4>PYTHON</h4>
              </Menu.Item>
            </Menu>
          );
        const layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 10,
            },
          };
      return ( 
      
         <div>
          <Form   name="complex-form" onSubmit={this.onFinish} {...layout}>
          <Form.Item style={{marginTop:"50px"}}
        label="Name"
        name="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input type="text" name="name" id="name"/>
      </Form.Item>


      <Form.Item
        label="Father's Name"
        name="Father's Name"
        rules={[
          {
            required: true,
            message: 'Please input your Father Name!',
          },
        ]}
      >
        <Input type="text" name="fname" id="fname"/>
      </Form.Item>
      
      <Form.Item
        label="Mobile Number"
        name="Mobile Number"
        rules={[
          {
            required: true,
            message: 'Please input your Mobile Number!',
          },
        ]}
      >
       <InputGroup size="large">
          <Row gutter={8}>
            <Col span={2.5}>
              <Input defaultValue="+91" style={{width:"60px"}} disabled  />
            </Col>
            <Col span={8}>
              <Input type="number"  name ="mobileNo" pattern="[0-9]{10}"/>
            </Col>
          </Row>
        </InputGroup>

      </Form.Item>
      <Form.Item
        label="Date Of Birth"
        name="Date Of Birth"
        rules={[
          {
            required: true,
            message: 'Please input your DOB!',
          },
        ]}
      > <DatePicker  name="dob" id="dob" />
      </Form.Item>

      <Form.Item
        label="Select_Course"
        value={this.state.data}
        rules={[
          {
            required: true,
            message: 'Please input your Father Name!',
          },
        ]}
      >
          <Drop sendAttack={this.getAttack} />


      </Form.Item>
      
      <Form.Item
        label="College Name"
        name="College Name"
        rules={[
          {
            required: true,
            message: 'Please input your College Name!',
          },
        ]}
      >
         <Input name="cname"></Input>

      </Form.Item>
      
      <center><Button type="danger" htmlType="submit" style={{width:"100px"}}>
          Submit </Button></center>
          </Form>
          
      {this.state.value.map(item=><h1>{item}</h1>)}
      </div>
      );
    }
}
Components = Form.create({name:'register_form'})(Components);
export default Components;