const PaginationBtn = (paginationNumber: string | number): string => {
  const view = `
    <span class="pagination-btn">${paginationNumber}</span>
  `;

  return view;
};

export default PaginationBtn;
