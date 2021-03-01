import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  width: 700px;
  padding: 20px 0 15px;
  margin-bottom: 10px;
  .title {
    color: #333;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
  .content {
    padding: 10px 0;
    height: 44px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .info {
    height: 20px;
    color: #b4b4b4;
    display: flex;
    .info-item {
      height: 20px;
      padding-right: 15px;
      display: flex;
      .iconfont {
        line-height: 20px;
        padding-right: 3px;
      }
      .text {
        line-height: 20px;
        height: 20px;
      }
    }
  }
`