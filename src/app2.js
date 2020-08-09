
import './app2.f79856dd.css'
import $ from 'jquery'

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on("click", "li", e => {
    //试一下是e.target还是e.currentTarget
  const $li = $(e.currentTarget);
//点击加class，  .siblings remove class
  $li
    .addClass("selected")
    .siblings()
    .removeClass("selected");
  const index = $li.index();
//找到content的children列表，索引到index项，添加删除content的active class
  $tabContent
    .children()
    .eq(index)//索引到index项
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tabBar.children().eq(0).trigger('click')