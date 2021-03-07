import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  margin-left: 180px;
  margin-top: 10px;
`

export const ArticleListWrapper = styled.div`
  width: 700px;
`

export const RightWrapper = styled.div`
  margin-left: 50px;
  width: 260px;
  .right-wrapper {
    width: 240px;
    margin-top: 30px;
    background: #fff;
    overflow: hidden;
    padding: 10px;
    position: sticky;
    top: 59px;
    .title {
      font-size: 16px;
      line-height: 20px;
      color: #404040;
      font-weight: bold;
    }
    .article-list {
      width: 100%;
      .article-item {
        margin: 20px 10px;
        .article-title {
          font-size: 14px;
          line-height: 16px;
          color: #2d2d2d;
          margin: 10px 0;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        .article-info {
          font-size: 12px;
          color: #969696;
          .like {
            margin-left: 10px;
          }
        }
      }
    }
  }
`