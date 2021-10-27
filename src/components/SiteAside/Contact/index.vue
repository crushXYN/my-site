<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <Icon type="github" />
        <span>1548156156</span>
      </a>
    </li>
    <li>
      <a href="mailto:1807986524@qq.com">
        <Icon type="mail" />
        <span>1807986524@qq.com</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=1515421662&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <Icon type="qq" />
        <span>1548156156</span>
      </a>
      <div class="pop">
        <img
          src="https://qr.api.cli.im/newqr/create?data=%25E8%2582%2596%25E4%25BA%2591%25E5%25A8%259C&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=260&kid=cliim&key=0db2dbd6bf91d270321fb75d09ae4ea8"
          alt=""
        />
      </div>
    </li>
    <li>
      <a href="">
        <Icon type="weixin" class="weixin" />
        <span>13572012852</span>
      </a>
      <div class="pop">
        <img
          src="https://qr.api.cli.im/newqr/create?data=%25E8%2582%2596%25E4%25BA%2591%25E5%25A8%259C&level=H&transparent=false&bgcolor=%23FFFFFF&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&logoshape=no&size=260&kid=cliim&key=0db2dbd6bf91d270321fb75d09ae4ea8"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang = "less" >
@import "~@/styles/var.less";
.contact-container {
  list-style: none;
  padding: 18px 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    cursor: pointer;
    align-items: center;
    font-size: 14px;
  }
  .icon-container {
    width: 36px;
    line-height: @itemHeight;
    font-size: 26px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -5px;
      width: 10px;
      height: 10px;
      background: #fff;
      transform: rotate(45deg) translateX(-50%);
    }
  }
}
</style>