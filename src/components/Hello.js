import React from 'react';
import { useTable } from 'react-table';

import axios from 'axios';



export default class Hello extends React.Component {

    state = {
        employee : [] 
        }

    columns = [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Salary', accessor: 'salary' }
    ];
     Table = ({ columns, employee }) => {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow
        } = useTable({
            columns,
            employee
        });
        return (
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    };
    
    componentDidMount() {
        axios.get(`http://localhost:8084/Employee`)
            .then(res => {
                const employee = res.employee;
                this.setState({ employee });
            })
    }

    render() {
        return (
            <ul>
                {this.state.employee.map(person => { return <p>{person.name + ' ' + person.id + ' ' + person.salary}</p> })}
            </ul>
        )
    }
    // state = {
    //     message: ''
    // }

    // componentDidMount() {
    //     axios.get(`https://localhost:8084/hello`)
    //         .then(res => {
    //             const message = res.employee;
    //             this.setState({ message });
    //         })
    // }

    // render() {
    //     return (
    //         <div>

    //             {this.state.message.map(message => <li>{message}</li>)}

    //         </div>
    //     )
    // }
}









