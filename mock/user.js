const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = [
  {
    // 获取用户信息
    url: "/api/user/info",
    method: "get",
    response() {
      return {
        data: {
          username: Random.title(),
          nickname: Random.cname(),
        },
        code: 10024,
        msg: "操作成功",

        // errno: 100,
        // msg: '获取用户信息失败'
      };
    },
  },
  {
    // 注册
    url: "/api/user/register",
    method: "post",
    response() {
      return {
        code: 10024,
        msg: "操作成功",
        data: {},
      };
    },
  },
  {
    // 登录
    url: "/api/user/login",
    method: "post",
    response() {
      return {
        data: {
          token: Random.word(20),
        },
        code: 10024,
        msg: "操作成功",
      };
    },
  },
];
