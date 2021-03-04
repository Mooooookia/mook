import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 58px;
  font-size: 14px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: #eee 1px solid;
  z-index: 999;
`

export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    width: 100px;
    color: #7fb80e;
    font-size: 25px;
    line-height: 58px;
    text-align: center;
    font-weight: bold;
  }
  .nav-wrapper {
    padding-left: 50px;
    flex: 1;
    .nav-item {
      display: inline-block;
      height: 100%;
      width: 50px;
      line-height: 58px;
      text-align: center;
      font-size: 17px;
      padding: 0 10px;
      &.active {
        color: #7fb80e;
      }
      &:hover {
        background: #eee;
      }
    }
    .active:hover {
      background: none;
    }
  }
  
`

export const HeaderRight = styled.div`
  display: flex;
  margin-right: 60px;
  .login {
    color: #969696;
    width: 50px;
    margin: 15px;
    background: transparent;
    font-size: 15px;
    line-height: 28px;
    text-align: center;
    cursor: pointer;
  }
  .register {
    width: 70px;
    margin: 10px;
    border-radius: 10px;
    border: #7fb80e 1px solid;
    font-size: 17px;
    line-height: 36px;
    color: #7fb80e;
    background: transparent;
    cursor: pointer;
    text-align: center;
  }
`

export const UserWrapper = styled.div`
  display: flex;
  margin-right: 60px;
  .user {
    position: relative;
    width: 60px;
    padding: 9px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
    .avatar {
      width: 40px;
      position: relative;
      height: 40px;
      .avatar-img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      &::before {
        content: "";
        display: block;
        position: absolute;
        right: -15px;
        top: 17px;
        bottom: 0;
        margin: auto 0;
        border-top: 6px solid #999;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
      }
    }
    .dropdown {
      visibility: ${props => (props.showDropDown ? "visable" : "hidden")};
      position: absolute;
      top: 59px;
      left: 0;
      z-index: 999;
    }
  }
  .write-btn {
    background: #7fb80e;
    color: #fff;
    width: 100px;
    margin: 10px;
    border-radius: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    .write-icon {
      line-height: 38px;
      font-size: 23px; 
      margin-right: 5px;
    }
    .write-btn-text {
      font-size: 15px;
      line-height: 38px;
    }
  }
`