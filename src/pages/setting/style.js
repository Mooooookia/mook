import styled from 'styled-components'


export const SettingWrapper = styled.div`
  width: 900px;
  padding: 20px 0;
  margin: auto;
  display: flex;
`

export const LeftWrapper = styled.div`
  width: 280px;
  .setting-item {
    height: 35px;
    display: flex;
    align-items: center;
    padding: 15px 0;
    cursor: pointer;
    &:hover, &.active {
      background: #eee;
    }
    .iconfont {
      font-size: 18px;
      display: block;
      margin-left: 10px;
      height: 35px;
      width: 35px;
      line-height: 35px;
      text-align: center;
      color: #fff;
      border-radius: 3px;
      background: #ccc;
    }
    .setting-title {
      font-size: 15px;
      color: #333;
      line-height: 17px;
      margin-left: 15px;
    }
  }
`

export const RightWrapper = styled.div`
  margin-left: 30px;
  margin-top: 10px;
  flex: 1;
`