import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Popconfirm, Button } from 'antd';
import UserModal from './Modal';

const mapStateToProps = (state) => {
    const { list, total, page, loading } = state.users;
    return {
        list,
        total,
        page,
        loading
    };
};

@connect(mapStateToProps)
class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            page : 1,
        };
    }

    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href={text}>{text}</a>,
        },
        {
            title: 'UserName',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Operation',
            key: 'operation',
            render: (text, record) => (
                <div>
                    <UserModal record={record} onOk={this.editHandler.bind(null, record.id)}>
                        <Button type="primary">Edit</Button>
                    </UserModal>
                    { ' ' }
                    <Popconfirm title="Confirm to delete?" onConfirm={this.deleteHandler.bind(null, record.id)}>
                        <Button type="danger">Delete</Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];
    componentDidMount(){
        this.props.dispatch({
            type: 'HANDLER_REQUEST_USERS_FETCH',
            page: 1,
            limit: 10
        })
    }

    deleteHandler = (id) => {
        this.props.dispatch({
            type: 'HANDLER_REQUEST_USERS_DELETE',
            id: id,
        });
    };

    pageChangeHandler = (page) => {
        this.props.dispatch({
            type: 'HANDLER_REQUEST_USERS_FETCH',
            page: page
        })
    };

    editHandler = (id, values) => {
        this.props.dispatch({
            type: 'HANDLER_REQUEST_USERS_UPDATE',
            data: { id, values },
        });
    };

    createHandler = (values) => {
        this.props.dispatch({
            type: 'HANDLER_REQUEST_USERS_CREATE',
            data: values,
        });
    };

    render(){
        const { loading, list } = this.props;
        const { columns } = this;
        return (
            <div>
                <div>
                    <UserModal record={{}} onOk={this.createHandler}>
                        <Button type="primary">Create User</Button>
                    </UserModal>
                </div>
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={list}
                    rowKey={record => record.id}
                    pagination={true}
                />
            </div>
        );
    }
}

export default Index;
