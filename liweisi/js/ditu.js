var map = new BMap.Map("container");
    map.centerAndZoom("青岛", 18);
    
    map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
    map.addControl(new BMap.OverviewMapControl()); //添加默认缩略地图控件
    // map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));   //右下角，打开
    var stCtrl = new BMap.PanoramaControl(); //构造全景控件
    stCtrl.setOffset(new BMap.Size(20, 20));
    map.addControl(stCtrl);//添加全景控件

    var localSearch = new BMap.LocalSearch(map);
    localSearch.enableAutoViewport(); //允许自动调节窗体大小
    function searchByStationName() {
        map.clearOverlays();//清空原来的标注
        var keyword = document.getElementById("text_").value;
        localSearch.setSearchCompleteCallback(function (searchResult) {
            var poi = searchResult.getPoi(0);
            document.getElementById("result_").value = poi.point.lng + "," + poi.point.lat;
            map.centerAndZoom(poi.point, 18);
            // var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // 创建标注，为要查询的地方对应的经纬度
            // map.addOverlay(marker);
            // var content = document.getElementById("text_").value + "<br/><br/>经度：" + poi.point.lng + "<br/>纬度：" + poi.point.lat;
            // var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + content + "</p>");
        var myKeys = ["中艺1688", "加油站"];
        var local = new BMap.LocalSearch(map, {
            renderOptions:{map: map, panel:"r-result"},
            pageCapacity:9
        });
    local.searchInBounds(myKeys, map.getBounds());
            // marker.addEventListener("click", function () { this.openInfoWindow(infoWindow); });
            // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        });
        localSearch.search(keyword);
    } 

    function dingweidangqian(){
        var point=new BMap.Point(120.435681,36.178145);
        map.centerAndZoom(point,17);
        map.addControl(new BMap.MapTypeControl);
        map.setCurrentCity("青岛中艺l688产业园");
    }
var dituspa11=document.querySelector(".spa11");
dituspa11.onclick=function(){
    dingweidangqian();
}