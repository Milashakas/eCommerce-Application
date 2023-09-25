const PaginationBtn = (paginationNumber: number, currentOffset: number): string => {
  const storePaginationValue: number = (paginationNumber - 1) * 9;
  const isCurrentPage: boolean = currentOffset === storePaginationValue;
  const setProspectiveActiveStyle = isCurrentPage ? "active-pagination-btn" : "";

  const view = `
    <span class="pagination-btn ${setProspectiveActiveStyle}" id="${storePaginationValue}">${paginationNumber}</span>
  `;

  return view;
};

export default PaginationBtn;
