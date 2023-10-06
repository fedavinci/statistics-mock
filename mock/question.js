const Mock = require("mockjs");
const getQuestionList = require("./data/getQuestionList");
const getComponentList = require("./data/getComponentList");

const Random = Mock.Random;

module.exports = [
  {
    // 获取单个问卷信息
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          desc: "问卷描述",
          js: "",
          css: "",
          isDeleted: 0,
          isPublished: true,
          componentList: getComponentList(),
        },
        code: 10024,
        msg: "操作成功",
      };
    },
  },
  {
    // 创建问卷
    url: "/api/question",
    method: "post",
    response() {
      return {
        code: 10024,
        msg: "操作成功",
        data: {
          _id: Random.id(),
        },
      };
    },
  },
  {
    // 获取（查询）问卷列表
    url: "/api/question",
    method: "get",
    response(ctx) {
      const { url = "", query = {} } = ctx;
      const isDeleted = url.indexOf("isDeleted=1") >= 0;
      const isStar = url.indexOf("isStar=true") >= 0;
      const pageSize = parseInt(query.pageSize) || 10;

      return {
        code: 10024,
        msg: "操作成功",
        data: {
          list: getQuestionList({ len: pageSize, isDeleted, isStar }), // 当前页
          total: 100, // 总数，用于分页
        },
      };
    },
  },
  {
    // 更新问卷
    url: "/api/question/:id",
    method: "patch",
    response() {
      return {
        code: 10024,
        msg: "操作成功",
        data: {},
      };
    },
  },
  {
    // 复制问卷
    url: "/api/question/duplicate/:id",
    method: "post",
    response() {
      return {
        code: 10024,
        data: {
          _id: Random.id(),
        },
        msg: "操作成功",
      };
    },
  },
  {
    // 批量彻底删除
    url: "/api/question",
    method: "delete",
    response() {
      return {
        code: 10024,
        msg: "操作成功",
        data: {},
      };
    },
  },
];
