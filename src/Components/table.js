import React, { Component } from 'react';
import { Table } from 'antd';

export default class Tables extends Component {

    constructor(props){
      super(props);
      this.state={
        course:'',
        value:[]
      }
    }
    state = {
      disabled: true
    };
    render() {
      const rowSelection = {
        type: "radio",
        
        onChange: (selectedRowKeys, selectedRows) => {
          this.props.getData(selectedRows);
        },
        getCheckboxProps: record => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
      };
        const {data}=this.props;
   const columns = [
    {
      title: 'Student_Id',
      dataIndex: 'Student_Id',
      key: 'Student_Id',
    },
    {
      title: 'Name',
      dataIndex: 'Full_Name',
      key: 'name',
    },
    {
      title: 'Mobile_Number',
      dataIndex: 'Mobile_Number',
      key: 'Mobile_Number',
    },
    {
      title: 'Email_Id',
      dataIndex: 'email',
      key: 'email',
    },
    {
        title: 'Date_Of_Birth',
        dataIndex: 'date_of_birth',
        key: 'date_of_birth',
      },
      {
        title: 'Course_Selected',
        dataIndex: 'Select_Course',
        key: 'Course_Selected',
      },
      {
        title: 'College_Name',
        dataIndex: 'College_Name',
        key: 'College_Name',
      },
  ];
      return (
    <div> 
<center><h1>Student's Details</h1></center>

<Table rowSelection={rowSelection} dataSource={data} columns={columns} />;

        </div>
      );
    }
}
  
