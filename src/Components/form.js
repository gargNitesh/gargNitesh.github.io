import React, { Component } from 'react';
import { Form, Input, Button,DatePicker } from 'antd';
import Drop from './drop';
import Table from './table';



let i=0;


    
export default class First extends Component {

  constructor(props){
    super(props);
    this.state={
      course:'',
      value:[],
      edited:false
    }
  }
  state = {
    disabled: true
  };
  getAttack = (data) => {
    console.log(data)
    this.setState({course:data});

}
setData=(data)=>{
  
  this.props.form.setFieldsValue({ Full_Name: data[0].Full_Name,
    email :data[0].email,
    Date_Of_Birth:data[0].Date_Of_Birth,
    Mobile_Number:data[0].Mobile_Number,
    Select_Course:data[0].Select_Course,
    College_Name:data[0].College_Name,
    Student_Id:data[0].Student_Id
   });
   this.setState({
    edited:true
   })
}
tables = (values) =>{
  if(values.length!=0)
  {
    return <Table data={this.state.value} getData={this.setData}/>;
    //return <Table data={this.props.items} getData={this.setData}/>;
  }
}

  handleSubmit = e => {
    e.preventDefault();
    
    this.props.form.validateFields((err, values) => {
      if(this.state.edited)
      {
           if (!err) {
              values["date_of_birth"]=values.Date_Of_Birth._d.getDate()+"-"+(values.Date_Of_Birth._d.getMonth()+1)+"-"+values.Date_Of_Birth._d.getFullYear()
              let data=this.state.value.filter(item=>item.Student_Id!==values.Student_Id);
              values["Select_Course"]=this.state.course;
              const list=[...data,values];
              let data1=list.sort((a,b)=>(a.Student_Id>b.Student_Id) ? 1 : -1 );
              this.setState({
                value:[...data1],
                edited:false
              })
          this.props.form.resetFields();
           }
          
      }
      else{
      if (!err) {
              i=i+1;
              values["date_of_birth"]=values.Date_Of_Birth._d.getDate()+"-"+(values.Date_Of_Birth._d.getMonth()+1)+"-"+values.Date_Of_Birth._d.getFullYear()
              values["Student_Id"]=i;
              values["Select_Course"]=this.state.course;
      this.setState({
          value:[...this.state.value,values]
        })
        
        this.props.form.resetFields()

           }
          }
    });
  };
  render() {
    const isMobile=false;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    return (
      
      <div id="hello">
        <div
          style={{
            textAlign: 'center',
            fontSize: '18x',
            marginTop: '24px',
            marginBottom: '24px'
          }}
        >
          <h1>Welcome to world best Institute!!!!!</h1>
          <div style={{ marginTop: '50px' }} />
          <h2>Codeplanet Technologies Pvt. Ltd.</h2>
        </div>
        <div style={{ marginTop: '50px' }} />
        <Form
          {...formItemLayout}
          onSubmit={this.handleSubmit}
          style={
            isMobile
              ? { width: '300px', marginLeft: 'auto', marginRight: 'auto' }
              : { width: '600px', marginLeft: 'auto', marginRight: 'auto' }
          }
        >
          <Form.Item>
            {getFieldDecorator('Student_Id', {
            })(<Input type="hidden" />)}
          </Form.Item>
          
          <Form.Item label="Full Name">
            {getFieldDecorator('Full_Name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!'
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Mobile number">
            {getFieldDecorator('Mobile_Number', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Phone number!',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Date Of Birth">
            {getFieldDecorator('Date_Of_Birth', {
              rules: [
                {
                  required: true
                }
              ],
              
            })(<DatePicker />)}
          </Form.Item>
          <Form.Item label="Select Course">
            {getFieldDecorator('Select_Course', {
               
             })(<Drop sendAttack={this.getAttack} />)}
          </Form.Item>
          
          <Form.Item label="College Name">
            {getFieldDecorator('College_Name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your College Name!',
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
          <div style={{ marginTop: '50px' }} />
         
    
          
          <Form.Item {...tailFormItemLayout}>

            <Button
              type={this.state.edited?"danger":'primary'}
              size="large"
              htmlType="submit"
              icon="right-circle"
              style={isMobile ? { marginLeft: '50%' } : {}}
            >
              {this.state.edited?"update":"Submit"}
            </Button>
          
          </Form.Item>
    
        </Form>
     {this.tables(this.state.value)} 
        {/* {this.tables(this.props.items)}
         */}
      </div>

    );
  }
}
First = Form.create({ name: 'horizontal_Register' })(First);
