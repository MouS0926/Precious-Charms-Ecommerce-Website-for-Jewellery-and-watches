import React from 'react';
import styled from 'styled-components';

interface PaginationButtonProps {
  isActive: boolean;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button<PaginationButtonProps>`
  padding: 8px 12px;
  margin: 0 4px;
  background-color: ${({ isActive }) => (isActive ? '#000000' : '#ddd')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#333')};
  border: none;
  border-radius: 4px;
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
`;

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  console.log("page", totalPages, currentPage);
  const handleclick = (i: number) => {
    onPageChange(i + 1);
    console.log("clicked", i + 1);
  };

  return (
    <PaginationContainer>
      {new Array(totalPages)?.fill(0).map((el, i) => (
        <PaginationButton
          key={i}
          isActive={i + 1 === currentPage}
          onClick={() => handleclick(i)}
        >
          {i + 1}
        </PaginationButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
