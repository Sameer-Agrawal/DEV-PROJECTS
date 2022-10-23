// Class component
import { Component } from 'react';
import React from 'react';
import '../UI/Pagination.css';

class Pagination extends Component {
    constructor() {
        super();
    }
    render() {
        return(  // JSX, expected
            <React.Fragment>
                <div className="paginationElement">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default Pagination;