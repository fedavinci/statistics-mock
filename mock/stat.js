const Mock = require("mockjs");
const getStatList = require("./data/getStatList");

const Random = Mock.Random;

module.exports = [
  // 答卷列表
  {
    url: "/api/stat/:questionId",
    method: "get",
    response() {
      return {
        code: 10024,
        msg: "操作成功",
        data: {
          total: 100, // 分页
          list: getStatList(),
        },
      };
    },
  },
  // 获取单个组件的统计数据汇总
  {
    url: "/api/stat/:questionId/:componentId",
    method: "get",
    response() {
      return {
        code: 10024,
        msg: "操作成功",
        data: {
          stat: [
            { name: "选项1", count: 20 },
            { name: "选项2", count: 10 },
            { name: "选项3", count: 25 },
          ],
        },
      };
    },
  },
];
