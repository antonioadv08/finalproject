
import React, { Component } from 'react';
import ProductRow from './ProductRow.js';


export default class ProductTable extends Component {

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr >
                            <th >Name</th>
                            <th >Price</th>
                        </tr>
                        {this.props.name.map(product => <ProductRow {...product} />)}
                    </tbody>
                </table>

            </div>
        )
    }
}