<template>
    <div id="cesiumContainer">
        <div class="test"></div>
    </div>
</template>
<script>

export default {
    name: 'Container',
    mounted() {
        this.init()
    },
    methods: {
        init() {
            Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMWI5NmU3OC05MTNhLTQ5NjktOWY3OC02OTcyOWFjNGZlYzgiLCJpZCI6NjM3MjgsImlhdCI6MTYyODQ5MTgwMn0.MJBuV2ZZvZi-jPuGMBfwlJdUqo6wzWnm8mPwfpSTv5E'
            const viewer = new Cesium.Viewer('cesiumContainer', {
                // terrainProvider: Cesium.createWorldTerrain(),
                animation: false,  //是否显示动画控件
                baseLayerPicker: false, //是否显示图层选择控件
                geocoder: false, //是否显示地名查找控件
                homeButton: false,
                timeline: false, //是否显示时间线控件
                sceneModePicker: false, //是否显示投影方式控件
                navigationHelpButton: false, //是否显示帮助信息控件
                infoBox: true,  //是否显示点击要素之后显示的信息
                // imageryProvider: new Cesium.ArcGisMapServerImageryProvider({

                //     url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
                // })
            });
            // Add Cesium OSM Buildings, a global 3D buildings layer.
            const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());
            // Fly the camera to San Francisco at the given lo ngitude, latitude, and height.
            // 摄像机飞到某处
            viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(110.34417892557927, 34.48176767462731, 1000.0),
                orientation: {
                    // direction: new Cesium.Cartesian3(0.8982074415844437, -0.4393530288745287, 0.013867512433959908),
                    // up: new Cesium.Cartesian3(0.12793638617798253, 0.29147314437764565, 0.9479850669701113),
 heading: Cesium.Math.toRadians(20.0),
      pitch: Cesium.Math.toRadians(-35.0),
                },
                // complete: function () {
                //     setTimeout(function () {
                //         viewer.camera.flyTo({
                //             destination: new Cesium.Cartesian3(-2304817.2435183465, -3639113.128132953, 4688495.013644141),
                //             orientation: {
                //                 direction: new Cesium.Cartesian3(0.3760550186878076, 0.9007147395506565, 0.21747547189489164),
                //                 up: new Cesium.Cartesian3(-0.20364591529594356, -0.14862471084230877, 0.9676978022659334),
                //             },
                //             easingFunction: Cesium.EasingFunction.QUADRATIC_IN_OUT,
                //             duration: 5
                //         });
                //     }, 1000);
                // },
            });
            var terrain = new Cesium.createWorldTerrain({
                requestWaterMask: true,
                requestVertexNormals: true
            });
            viewer.terrainProvider = terrain;//加入世界地形图
            // var center = Cesium.Cartesian3.fromRadians(2.4213211833389243, 0.6171926869414084, 3626.0426275055174);
            // var transform = Cesium.Transforms.eastNorthUpToFixedFrame(center);
            // viewer.scene.camera.lookAtTransform(transform, new Cesium.HeadingPitchRange(0, -Math.PI / 4, 2900));
            // //屏幕操作事件句柄
            var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
            handler.setInputAction(function (event) {
                var pickedPosition = viewer.scene.pickPosition(event.position);
                if (Cesium.defined(pickedPosition)) {
                    console.log(pickedPosition);
                }
            }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        },
    }
}
</script>
<style lang="scss" scoped>
#cesiumContainer {
    width: 100%;
    height: 100%;
}
.test {
    width: 200px;
    height: 200px;
    position: absolute;
    background-color: blue;
    z-index: 1;
}
.cesium-widget-credits {
    display: none !important; /*去除Cesium默认版权信息*/
}
</style>