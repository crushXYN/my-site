import Mock from "mockjs";
Mock.mock("/api/banner", "get", {
  code: 0, // 错误码
  msg: " ", // 错误消息
  data: [
    {
      id: "1",
      midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
      bigImg: "https://img2.baidu.com/it/u=978850893,4098489448&fm=26&fmt=auto",
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "2",
      midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
      bigImg:
        "https://img1.baidu.com/it/u=2372955672,3124154572&fm=26&fmt=auto",
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "3",
      midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
      bigImg:
        "https://img1.baidu.com/it/u=3423665411,4174918766&fm=26&fmt=auto",
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ],
});
