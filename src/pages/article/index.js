import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import MdEditor from "react-markdown-editor-lite";
import classnames from 'classnames'
import "react-markdown-editor-lite/lib/index.css";

import MarkdownIt from "markdown-it";
import { getArticleInfo, addLike, addCollection, getArticleList, deleteLike, deleteCollection } from "@/service/article";
import { addComment,getCommentList } from '@/service/comment'
import { getAvatar } from '@/utils/avatar'
import toast from '@/utils/message'


import MookCommentBlock from './components/comment-block'
import { ArticleWrapper, LeftWrapper, RightWrapper } from "./style";


const mdParser = new MarkdownIt(/* Markdown-it options */);

function renderHTML(text) {
  return mdParser.render(text);
}

export default memo(function MookArticle(props) {
  const articleId = props.match.params.id;
  const [author, setAuthor] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [createAt, setCreateAt] = useState("");
  const [viewCount, setViewCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [collected, setCollected] = useState(false);
  const [comment, setComment] = useState("")
  const [commentList, setCommentList] = useState([]);
  const [chooseIndex, setChooseIndex] = useState(0);
  const [articleList, setArticleList] = useState([])

  const { isLogin } = useSelector(state => ({
    isLogin: state.getIn(["user", "isLogin"])
  }), shallowEqual)

  const orders = [{ order: "desc", key: "id" }, { order: "asc", key: "id" }, { order: "desc", key: "likeCount" }]

  const dispatch = useDispatch();

  useEffect(() => {
    getComment(orders[chooseIndex].order, orders[chooseIndex].key)
  }, [chooseIndex])// eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    getArticleInfo(articleId).then((res) => {
      const article = res.data;
      setAuthor(article.author);
      setTitle(article.title);
      setContent(article.content);
      setTags(article.tags ? article.tags : []);
      setCreateAt(article.createAt);
      setViewCount(article.viewCount);
      setLiked(!!article.liked);
      setCollected(!!article.collected);
    });
  }, [articleId]);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!author || !author.id) return;
    getArticleList({
      offset: 0,
      limit: 5,
      userId: author.id,
      order: "desc",
      key: "id"
    }).then(res => {
      setArticleList(res.data.result);
    })
  }, [author])

  function getComment(order, key) {
    getCommentList({
      articleId,
      offset: 0,
      limit: 999,
      order,
      key
    }).then(res => {
      setCommentList(res.data.result)
    })
  }
  function onLike() {
    if (!isLogin) {
      toast(dispatch, "您未登录！")
      return;
    }
    if (liked) {
      deleteLike(articleId).then(res => {
        toast(dispatch, "取消喜欢成功")
        setLiked(false)
      })
      return;
    }
    addLike(articleId).then(res => {
      toast(dispatch, "添加喜欢成功")
      setLiked(true)
    })
  }
  function onCollect() {
    if (!isLogin) {
      toast(dispatch, "您未登录！")
      return;
    }
    if (collected) {
      deleteCollection(articleId).then(res => {
        toast(dispatch, "取消收藏成功")
        setCollected(false)
      })
      return;
    }
    addCollection(articleId).then(res => {
      toast(dispatch, "添加收藏成功")
      setCollected(true)
    })
  }
  function newComment() {
    if (!isLogin) {
      toast(dispatch, "您未登录！")
      return;
    }
    if (!comment) {
      toast(dispatch, "评论内容不能为空！");
      return;
    }
    addComment(comment, articleId).then(res => {
      setComment("");
      getComment(orders[chooseIndex].order, orders[chooseIndex].key)
    })
  }

  function jumpToUser(id) {
    if (props.history) {
      props.history.push(`/user/${id}`)
    }
  }

  function jumpToArticle(id) {
    if (props.history) {
      props.history.push(`/article/${id}`)
    }
  }

  return (
    <ArticleWrapper>
      <LeftWrapper>
        <div className="article">
          <div className="title">{title}</div>
          <div className="author">
            <div className="avatar" onClick={e => jumpToUser(author.id)}>
              <img src={getAvatar(author.id)} className="avatar-img" alt="#"/>
            </div>
            <div className="nickname" onClick={e => jumpToUser(author.id)}>{author.nickname}</div>
            <div className="info">
              <span className="time">{createAt.replace("T", " ").replace(".000Z", "")}</span>
              <span className="word">字数 {content.length}</span>
              <span className="view">阅读 {viewCount}</span>
            </div>
          </div>
          <MdEditor
            renderHTML={renderHTML}
            value={content}
            style={{ width: "100%" }}
            config={{ view: { menu: false, md: false, html: true } }}
          />
          <div className="tag-list">
            标签：
            {
              tags.map((item, index) => {
                return <span className="tag-item" key={item.id}>{item.content}</span>
              })
            }
          </div>
          <div className="option">
            <div className="like">
              <i className={classnames("iconfont", "like", {lighted: liked})} onClick={onLike}>&#xe7f5;</i>
              <div className="option-title">喜欢</div>
            </div>
            <div className="collect">
              <i className={classnames("iconfont", "collect",{lighted: collected})} onClick={onCollect}>&#xe613;</i>
              <div className="option-title">收藏</div>
            </div>
            
          </div>
        </div>
        <div className="comment">
          <div className="add-comment">
            <div className="input-wrapper">
              <textarea
                className="input"
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="写下你的评论..."
              ></textarea>
            </div>
            <button className="submit" onClick={newComment}>发布</button>
            <button className="cancel" onClick={e => setComment("")}>取消</button>
          </div>
          <div className="cut">
            <div className="title">全部评论<span className="count">{commentList.length}</span></div>
            <div className="order">
              <div className={classnames("order-item", { selected: chooseIndex === 0 })} onClick={e => setChooseIndex(0)}>按时间倒序</div>
              <div className={classnames("order-item", { selected: chooseIndex === 1 })} onClick={e => setChooseIndex(1)}>按时间正序</div>
              <div className={classnames("order-item", { selected: chooseIndex === 2 })} onClick={e => setChooseIndex(2)}>按点赞倒序</div>
            </div>
          </div>
          <div className="comment-list">
            {
              commentList.map((item, index) => {
                return (
                  <MookCommentBlock comment={item} key={item.id}/>
                )
              })
            }
          </div>
        </div>
      </LeftWrapper>
      <RightWrapper>
        <div className="right-wrapper">
          <div className="author" onClick={e => jumpToUser(author.id)}>
            <div className="avatar">
              <img src={getAvatar(author.id)} className="avatar-img" alt="#"/>
            </div>
            <div className="nickname">{author.nickname}</div>
          </div>
          <div className="article-list">
            {
              articleList.map((item, index) => {
                return (
                  <div className="article-item" key={item.id}>
                    <div className="article-title" onClick={e => jumpToArticle(item.id)}>{item.title}</div>
                    <div className="article-info">
                      <span className="view">阅读 {item.viewCount} </span>
                      <span className="like">喜欢 {item.likeCount}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </RightWrapper>
    </ArticleWrapper>
  );
});
