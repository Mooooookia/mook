import styled from 'styled-components'


export const BlackListWrapper = styled.div`
  .user-list {
    padding: 20px;
    .user-item {
      display: flex;
      align-items: center;
      cursor: pointer;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        .avatar-img {
          width: 100%;
        }
      }
      .nickname {
        color: #333;
        font-size: 15px;
        margin-left: 20px;
      }
    }
  }
`