import styled from 'styled-components'

export const DropDownWrapper = styled.div`
  width: 160px;
  background: #fff;
  box-shadow: 0 2px 10px 5px rgba(0, 0, 0, .1);
  .drop-down-item {
    padding: 10px 20px;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    background: transparent;
    &:hover {
      background: #eee;
    }
    .drop-down-item-icon {
      width: 24px;
      font-size: 22px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      color: #7fb80e;
    }
    .drop-down-item-title {
      flex: 1;
      font-size: 16px;
      line-height: 24px;
      margin-left: 10px;
      color: #666;
    }
  }
`