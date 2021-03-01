import styled from 'styled-components'

export const WriteWrapper = styled.div`
  display: flex;
  height: calc(100vh - 59px);
  overflow: hidden;
`
export const ListWrapper = styled.div`
  width: 250px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-shrink: 0;
  .add-new {
    display: block;
    width: 100px;
    margin: auto;
    height: 40px;
    background: transparent;
    font-size: 16px;
    .add-icon {
      font-size: 20px;
    }
  }
  .article-list {
    width: 100%;
    .article-item {
      height: 90px;
      box-sizing: border-box;
      border-bottom: 2px solid #ccc;
      padding-left: 20px;
      padding-top: 15px;
      padding-right: 10px;
      cursor: pointer;
      transition: all .2s;
      &.choose-item {
        border-left: 5px solid #7fb80e;
        background: #eee;
        padding-left: 25px;
      }
      &:hover {
        background: #eee;
      }
      .article-title {
        font-size: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 25px;
      }
      .article-info {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`
