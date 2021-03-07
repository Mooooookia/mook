import React, { memo, useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { getArticleList } from "../../service/article";
import { getRecommend } from "../../service/recommend";
import { scroll } from "@/utils/optimize";

import MookArticleBlock from "../../components/article-block";

import { HomeWrapper, ArticleListWrapper, RightWrapper } from "./style";

export default memo(function MookHome(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [articleCount, setArticleCount] = useState(999);
  const [articleList, setArticleList] = useState([]);
  const [recommendList, setRecommendList] = useState([]);
  const { isLogin } = useSelector(
    (state) => ({
      isLogin: state.getIn(["user", "isLogin"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    const offset = (currentPage - 1) * 10;
    if (offset + 1 > articleCount) return;
    getArticleList({
      offset,
      limit: 10,
      order: "desc",
      key: "id",
    }).then((res) => {
      res = res.data;
      setArticleCount(res.count);
      setArticleList([...articleList, ...res.result]);
    });
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onScroll = scroll(() => setCurrentPage((page) => page + 1));
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isLogin) return;
    getRecommend(0, 10).then((res) => {
      setRecommendList(res.data);
    });
  }, [isLogin]);

  function jumpToArticle(id) {
    if (props.history) {
      props.history.push(`/article/${id}`);
    }
  }

  return (
    <HomeWrapper>
      <ArticleListWrapper>
        {articleList.map((item, index) => {
          return <MookArticleBlock info={item} key={item.id} />;
        })}
      </ArticleListWrapper>
      {
        isLogin && <RightWrapper>
          <div className="right-wrapper">
            <div className="title">推荐阅读</div>
            <div className="article-list">
              {recommendList.map((item, index) => {
                return (
                  <div className="article-item" key={item.id}>
                    <div
                      className="article-title"
                      onClick={(e) => jumpToArticle(item.id)}
                    >
                      {item.title}
                    </div>
                    <div className="article-info">
                      <span className="view">阅读 {item.viewCount} </span>
                      <span className="like">喜欢 {item.likeCount}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </RightWrapper>
      }
    </HomeWrapper>
  );
});
