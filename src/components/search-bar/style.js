import styled from 'styled-components'

export const SearchBarWrapper = styled.div`
  margin: 10px 20px;
  height: 38px;
  border-radius: 20px;
  background: #eee;
  width: ${props => props.focusd ? "200px" : "150px"};
  transition: width .2s;
  display: flex;
  .input-wrapper {
    flex: 1;
    .input-box {
      width: 100%;
      box-sizing: border-box;
      background: transparent;
      padding-left: 15px;
      font-size: 13px;
      display: inline-block;
      height: 100%;
      &::placeholder {
        font-size: 13px;
      }
    }
  }

  .search-icon {
    margin: 4px;
    width: 30px;
    display: inline-block;
    color: #000;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    background: ${props => props.focusd ? "#ccc" : "transparent"};
    transition: background .2s;
  }
`