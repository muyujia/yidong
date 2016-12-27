$(function(){
    $("#fullpage").fullpage({
        menu:'#menu',
        scrollingSpeed: 2000, //滚动的速度

        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
        verticalCentered: false,


        navigation: true,  //是否显示项目导航
        navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验'],//项目导航的tip
        navigationPosition: 'right',  //项目导航的位置，left或者right
        lockAnchors: false,
        showActiveTooltip: false,

        //滑动完成动画
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            $(".section").eq(index).removeClass("active");
            $("#fullPage-nav ul a").each(function () {
                $(this).removeClass("active");
            });
            $("#fullPage-nav ul a").eq(nextIndex-1).addClass("active");
        }
})


})






