// file: src/Styled.js
import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background: red;
  width: 100px;
  height: 100px;
  .nested {
    background: green;
    color: white;
    padding: 8px;
    .hello {
      background: white;
      color: black;
      padding: 8px;
      font-size: 12px;
    }
  }
  &:hover {
    background: black;
  }
`;

const Styled = () => {
  return (
    <Box>
      <div className="nested">
        스타일드
        <div className="hello">
          안녕하세요
        </div>
      </div>
    </Box>
  );
};

export default Styled;