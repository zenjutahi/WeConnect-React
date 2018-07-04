import React from "react";

class Pagination extends React.Component {
  state = {};
  render() {
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.business.length / this.props.todosPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li className="page-item" key={number}>
          <div
            class="page-link"
            id={number}
            onClick={this.props.handlePageClick}
          >
            {number}
          </div>
        </li>
      );
    });

    return (
      <div className="pagination">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <div className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </div>
            </li>
            {renderPageNumbers}
            <li className="page-item">
              <div className="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
