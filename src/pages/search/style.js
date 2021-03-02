import styled from 'styled-components'

export const SearchWrapper = styled.div`
  display: flex;
  width: 1000px;
  margin: auto;
`

export const LeftWrapper = styled.div`
  width: 280px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-top: 30px;
  .search-item {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    color: #333;
    text-indent: 20px;
    display: flex;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
    &.selected, &:hover {
      background: #eee;
    }
    .iconfont {
      display: block;
      font-size: 20px;
    }
  }
`

export const RightWrapper = styled.div`
  flex: 1;
  .list-wrapper {
    padding: 20px;
    .header {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      .order {
        display: flex;
        .order-item{
          margin-right: 10px;
          color: #969696;
          cursor: pointer;
          &.selected {
            color: #2f2f2f;
          }
        }
      }
      .total {
        color: #b4b4b4;
      }
    }

  }
`