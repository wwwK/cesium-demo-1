deps = {
    "common": {
        "core": [
            "./src/common/SuperMap.js",
            "./src/common/REST.js"
        ],
        "util": [
            "./src/common/util/FetchRequest.js"
        ],
        "format": [
            "./src/common/format/GeoJSON.js"
        ],
        "style": [
            "./src/common/style/CartoCSS.js"
        ],
        "security": [
            "./src/common/security/SecurityManager.js"
        ],
        "iManager": [
            "./src/common/iManager/iManager.js"
        ],
        "online": [
            "./src/common/online/Online.js"
        ],
        "iPortal": [
            "./src/common/iPortal/iPortal.js"
        ],
        "iServer": [
            //Data
            "./src/common/iServer/FieldStatisticService.js",
            "./src/common/iServer/GetFeaturesByBoundsService.js",
            "./src/common/iServer/GetFeaturesByBufferService.js",
            "./src/common/iServer/GetFeaturesByGeometryService.js",
            "./src/common/iServer/GetFeaturesByIDsService.js",
            "./src/common/iServer/GetFeaturesBySQLService.js",
            "./src/common/iServer/GetFieldsService.js",
            "./src/common/iServer/GetGridCellInfosService.js",
            "./src/common/iServer/EditFeaturesService.js",
            //Map
            "./src/common/iServer/GetLayersInfoService.js",
            "./src/common/iServer/MapService.js",
            "./src/common/iServer/ChartQueryService.js",
            "./src/common/iServer/QueryByDistanceService.js",
            "./src/common/iServer/QueryByGeometryService.js",
            "./src/common/iServer/QueryBySQLService.js",
            "./src/common/iServer/QueryByBoundsService.js",
            "./src/common/iServer/TilesetsService.js",
            "./src/common/iServer/MeasureService.js",
            "./src/common/iServer/ChartFeatureInfoSpecsService.js",
            "./src/common/iServer/SetLayerInfoService.js",
            "./src/common/iServer/SetLayersInfoService.js",
            "./src/common/iServer/SetLayerStatusService.js",
            //ThemeService
            "./src/common/iServer/ThemeService.js",
            //NetworkAnalyst
            "./src/common/iServer/BurstPipelineAnalystService.js",
            "./src/common/iServer/ComputeWeightMatrixService.js",
            "./src/common/iServer/FacilityAnalystStreamService.js",
            "./src/common/iServer/FindClosestFacilitiesService.js",
            "./src/common/iServer/FindLocationService.js",
            "./src/common/iServer/FindMTSPPathsService.js",
            "./src/common/iServer/FindPathService.js",
            "./src/common/iServer/FindServiceAreasService.js",
            "./src/common/iServer/FindTSPPathsService.js",
            "./src/common/iServer/UpdateEdgeWeightService.js",
            "./src/common/iServer/UpdateTurnNodeWeightService.js",
            //NetworkAnalyst3D
            "./src/common/iServer/FacilityAnalystSinks3DService.js",
            "./src/common/iServer/FacilityAnalystSources3DService.js",
            "./src/common/iServer/FacilityAnalystTracedown3DService.js",
            "./src/common/iServer/FacilityAnalystTraceup3DService.js",
            "./src/common/iServer/FacilityAnalystUpstream3DService.js",
            //TrafficTransferAnalyst
            "./src/common/iServer/StopQueryService.js",
            "./src/common/iServer/TransferPathService.js",
            "./src/common/iServer/TransferSolutionService.js",
            //SpatialAnalyst
            "./src/common/iServer/AreaSolarRadiationService.js",
            "./src/common/iServer/BufferAnalystService.js",
            "./src/common/iServer/DensityAnalystService.js",
            "./src/common/iServer/GenerateSpatialDataService.js",
            "./src/common/iServer/GeoRelationAnalystService.js",
            "./src/common/iServer/InterpolationAnalystService.js",
            "./src/common/iServer/MathExpressionAnalysisService.js",
            "./src/common/iServer/OverlayAnalystService.js",
            "./src/common/iServer/RouteCalculateMeasureService.js",
            "./src/common/iServer/RouteLocatorService.js",
            "./src/common/iServer/SurfaceAnalystService.js",
            "./src/common/iServer/TerrainCurvatureCalculationService.js",
            "./src/common/iServer/ThiessenAnalystService.js",
            "./src/common/iServer/GeometryBatchAnalystService.js",
            //ProcessingService
            "./src/common/iServer/BuffersAnalystJobsService",
            "./src/common/iServer/KernelDensityJobsService.js",
            "./src/common/iServer/OverlayGeoJobsService.js",
            "./src/common/iServer/SingleObjectQueryJobsService.js",
            "./src/common/iServer/SummaryMeshJobsService.js",
            "./src/common/iServer/SummaryRegionJobsService.js",
            "./src/common/iServer/TopologyValidatorJobsService",
            "./src/common/iServer/VectorClipJobsService.js",
            "./src/common/iServer/SummaryAttributesJobsService.js",
            //AddressService
            "./src/common/iServer/AddressMatchService.js",
            //DataFlowService
            "./src/common/iServer/DataFlowService.js"
        ],
        "graph": [
            "./src/common/overlay/Bar.js",
            "./src/common/overlay/Bar3D.js",
            "./src/common/overlay/Circle.js",
            "./src/common/overlay/Line.js",
            "./src/common/overlay/Pie.js",
            "./src/common/overlay/Point.js",
            "./src/common/overlay/Ring.js"
        ]

    },

    "openlayers": {

        "Mapping": {
            "title": "??????",
            "description": "??????????????????",
            "description_en": "Basic map module",

            "RESTMAP": {
                "name": "iServer ????????????",
                "src": ["./src/openlayers/mapping/TileSuperMapRest.js",
                    "./src/openlayers/mapping/ImageSuperMapRest.js"
                ],
                "modules": [{
                    "name": "ol.source.TileSuperMapRest",
                    "des": "iServer tileImage ??????",
                    "des_en": "iServer tileImage resources tile layer"
                }, {
                    "name": "ol.source.ImageSuperMapRest",
                    "des": "iServer image ??????",
                    "des_en": "iServer image resources tile layer"
                }]
            },

            "Baidu": {
                // "name": "????????????",
                // "src": ['./src/openlayers/mapping/BaiduMap.js'],
                "modules": [{
                    "name": "ol.source.BaiduMap",
                    "des": "????????????",
                    // "des_en": "Baidu map tile layer"
                }]
            },
            "Tianditu": {
                "name": "???????????????",
                "src": ['./src/openlayers/mapping/Tianditu.js'],
                "modules": [{
                    "name": "ol.source.Tianditu",
                    "des": "?????????",
                    "des_en": "Tianditu map tile layer"
                }]
            },
            "SuperMapCloud": {
                "name": "???????????????",
                "src": ['./src/openlayers/mapping/SuperMapCloud.js'],
                "modules": [{
                    "name": "ol.source.SuperMapCloud",
                    "des": "???????????????",
                    "des_en": "SuperMap cloud map tile layer"
                }]
            },
            "iPortal": {
                "name": "iPortal webmap",
                "src": ["./src/openlayers/mapping/WebMap.js"],
                "modules": [{
                    "name": "ol.supermap.WebMap",
                    "des": "iPortal???Online ??????",
                    "des_en": "SuperMap iPortal and Online tile layer"
                }]
            }
        },
        "Services": {
            "title": "??????",
            "description": "????????????",
            "description_en": "Service module",

            "Map": {
                "name": "????????????",
                "src": [
                    "./src/openlayers/services/MapService.js",
                    "./src/openlayers/services/QueryService.js",
                    "./src/openlayers/services/LayerInfoService.js",
                    "./src/openlayers/services/MeasureService.js",
                    "./src/openlayers/services/ChartService.js"
                ],
                "modules": [{
                    "name": "ol.supermap.MapService",
                    "des": "??????????????????",
                    "des_en": "iServer map service"
                }, {
                    "name": "ol.supermap.QueryService",
                    "des": "??????????????????",
                    "des_en": "iServer map query service"
                }, {
                    "name": "ol.supermap.LayerInfoService",
                    "des": "??????????????????",
                    "des_en": "iServer layer information service"
                }, {
                    "name": "ol.supermap.MeasureService",
                    "des": "????????????",
                    "des_en": "iServer measure service"
                }, {
                    "name": "ol.supermap.ChartService",
                    "des": "????????????",
                    "des_en": "iServer chart service"
                }]
            },
            "Data": {
                "name": "????????????",
                "src": [
                    "./src/openlayers/services/FeatureService.js",
                    "./src/openlayers/services/FieldService.js",
                    "./src/openlayers/services/GridCellInfosService.js"
                ],
                "modules": [{
                    "name": "ol.supermap.FeatureService",
                    "des": "???????????????",
                    "des_en": "iServer feature service"
                }, {
                    "name": "ol.supermap.FieldService",
                    "des": "????????????",
                    "des_en": "iServer field service"
                }, {
                    "name": "ol.supermap.GridCellInfosService",
                    "des": "????????????????????????",
                    "des_en": "iServer data grid cell information service"
                }]
            },
            "Theme": {
                "name": "????????????????????????",
                "src": [
                    "./src/openlayers/services/ThemeService.js"
                ],
                "modules": [{
                    "name": "ol.supermap.ThemeService",
                    "des": "???????????????",
                    "des_en": "iServer thematic service"
                }]
            },
            "NetworkAnalyst": {
                "name": "??????????????????",
                "src": [
                    "./src/openlayers/services/NetworkAnalystService.js"
                ],
                "modules": [{
                    "name": "ol.supermap.NetworkAnalystService",
                    "des": "??????????????????",
                    "des_en": "iServer network analyst service"
                }]
            },
            "NetworkAnalyst3D": {
                "name": "3D??????????????????",
                "src": [
                    "./src/openlayers/services/NetworkAnalyst3DService.js"
                ],
                "modules": [{
                    "name": "ol.supermap.NetworkAnalyst3DService",
                    "des": "3D ??????????????????",
                    "des_en": "iServer 3D network analyst service"
                }]
            },
            "SpatialAnalyst": {
                "name": "??????????????????",
                "src": [
                    "./src/openlayers/services/SpatialAnalystService.js"
                ],
                "modules": [{
                    "name": "ol.supermap.SpatialAnalystService",
                    "des": "??????????????????",
                    "des_en": "iServer spatial analyst service"
                }]
            },
            "TrafficTransferAnalyst": {
                "name": "????????????????????????",
                "src": [
                    "./src/openlayers/services/TrafficTransferAnalystService.js"
                ],
                "modules": [{
                    "name": "ol.supermap.TrafficTransferAnalystService",
                    "des": "??????????????????",
                    "des_en": "iServer traffic transfer analyst service"
                }]
            },
            "iPortal": {
                "name": "iPortal??????",
                "src": [
                    "./src/common/iPortal/iPortal.js"
                ],
                "modules": [{
                    "name": "SuperMap.iPortal",
                    "des": "iPortal ??????",
                    "des_en": "SuperMap iPortal service"
                }]
            },
            "Online": {
                "name": "Online??????",
                "src": [
                    "./src/common/online/Online.js"
                ],
                "modules": [{
                    "name": "SuperMap.Online",
                    "des": "Online ??????",
                    "des_en": "SuperMap Online service"
                }]
            },
            "iManager": {
                "name": "iManager??????",
                "src": [
                    "./src/common/iManager/iManager.js"
                ], "modules": [{
                    "name": "SuperMap.iManager",
                    "des": "iManager ??????",
                    "des_en": "SuperMap iManager service"
                }]
            },
            "ProcessingService": {
                "name": "?????????????????????",
                "src": [
                    "./src/openlayers/services/ProcessingService.js"
                ],
                "modules": [{
                    "name": "ol.supermap.ProcessingService",
                    "des": "?????????????????????",
                    "des_en": "iServer distributed analyst service"
                }]
            },
            "AddressMatch": {
                "name": "??????????????????",
                "src": [
                    "./src/openlayers/services/AddressMatchService.js"
                ],
                "modules": [{
                    "name": "ol.supermap.AddressMatchService",
                    "des": "??????????????????",
                    "des_en": "iServer address match service"
                }]
            },
            "ElasticSearch": {
                "name": "ElasticSearch",
                "src": [
                    "./src/common/control/TimeFlowControl.js",
                    "./src/common/thirdparty/elasticsearch/ElasticSearch.js"
                ],
                "modules": [{
                    "name": "SuperMap.ElasticSearch",
                    "des": "ElasticSearch ??????",
                    "des_en": "ElasticSearch service"
                }]
            },
            "DataFlow": {
                "name": "???????????????",
                "src": [
                    "./src/openlayers/services/DataFlowService.js",
                    "./src/openlayers/overlay/DataFlow.js"
                ],
                "modules": [{
                    "name": "ol.supermap.DataFlowService",
                    "des": "???????????????",
                    "des_en": "iServer data flow service"
                }, {
                    "name": "ol.source.DataFlow",
                    "des": "????????????",
                    "des_en": "iServer data flow layer"
                }]
            }
        },
        "Overlay": {
            "title": "?????????",
            "description": "????????????????????????",
            "description_en": "Visualization and calculation module",

            "HeatMap": {
                "name": "??????????????????",
                "src": [
                    "./src/openlayers/overlay/HeatMap.js"
                ],
                "modules": [{
                    "name": "ol.source.HeatMap",
                    "des": "??????????????????",
                    "des_en": "Heatmap source"
                }]
            },
            "Graphic": {
                "name": "?????????????????????",
                "src": [
                    "./src/openlayers/overlay/Graphic.js",
                    "./src/openlayers/overlay/graphic/CloverShape.js"
                ],
                "modules": [{
                    "name": "ol.source.Graphic",
                    "des": "?????????????????????",
                    "des_en": "High efficiency point source"
                }, {
                    "name": "ol.style.CloverShape ",
                    "des": "????????????????????????????????????",
                    "des_en": "Clover style of graphic source"
                }]
            },
            "VectorTile": {
                "name": "?????????????????????",
                "src": [
                    "./src/openlayers/overlay/VectorTileSuperMapRest.js",
                    "./src/openlayers/overlay/vectortile/MapboxStyles.js",
                    "./src/openlayers/overlay/vectortile/VectorTileStyles.js"
                ],
                "modules": [{
                    "name": "ol.source.VectorTileSuperMapRest",
                    "des": "?????????????????????",
                    "des_en": "Vector tile source"
                }, {
                    "name": "ol.supermap.MapboxStyles",
                    "des": "Mapbox ??????????????????",
                    "des_en": "Mapbox vector tile style"
                }, {
                    "name": "ol.supermap.VectorTileStyles",
                    "des": "??????????????????",
                    "des_en": "Vector tile style"
                }]
            },
            "Theme": {
                "name": "??????????????????",
                "src": [
                    "./src/openlayers/overlay/Unique.js",
                    "./src/openlayers/overlay/Range.js",
                    "./src/openlayers/overlay/RankSymbol.js",
                    "./src/openlayers/overlay/Graph.js",
                    "./src/openlayers/overlay/Label.js"
                ],
                "modules": [{
                    "name": "ol.source.Unique",
                    "des": "????????????????????????",
                    "des_en": "Unique thematic map source"
                }, {
                    "name": "ol.source.RankSymbol",
                    "des": "??????????????????????????????",
                    "des_en": "Rank symbol thematic map source"
                }, {
                    "name": "ol.source.Range",
                    "des": "????????????????????????",
                    "des_en": "Range thematic map source"
                }, {
                    "name": "ol.source.Graph",
                    "des": "????????????????????????",
                    "des_en": "Statistical thematic map source"
                }, {
                    "name": "ol.source.Label",
                    "des": "????????????????????????",
                    "des_en": "Label thematic map source"
                }]
            },
            "MapV": {
                "name": "MapV source",
                "src": [
                    "./src/openlayers/overlay/Mapv.js"
                ],
                "modules": [{
                    "name": "ol.source.Mapv",
                    "des": "MapV ?????????",
                    "des_en": "MapV source"
                }]
            },
            "Turf": {
                "name": "Turf source",
                "src": [
                    "./src/openlayers/overlay/Turf.js"
                ],
                "modules": [{
                    "name": "ol.source.Turf",
                    "des": "Turf ?????????",
                    "des_en": "Turf source"
                }]
            }
        },
        "Control": {
            "title": "??????",
            "description": "??????????????????",
            "description_en": "Control module",

            "ChangeTileVersion": {
                "name": "?????????????????????",
                "src": [
                    "./src/openlayers/control/ChangeTileVersion.js"
                ],
                "modules": [{
                    "name": "ol.supermap.control.ChangeTileVersion",
                    "des": "????????????????????????",
                    "des_en": "Tile version switch control"
                }]
            },
            "Logo": {
                "name": "logo??????",
                "src": [
                    "./src/openlayers/control/Logo.js"
                ],
                "modules": [{
                    "name": "ol.supermap.control.Logo",
                    "des": "Logo ??????",
                    "des_en": "Logo control"
                }]
            }
        }
    },

    "Documentation": {
        "Core": {
            "title": "??????",
            "description": "????????????",
            "description_en": "Core module",

            "SCTTerrainProvider": {
                "name": "SCT?????????????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "SCTTerrainProvider",
                    "des": "SCT?????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "WebMercatorTilingScheme": {
                "name": "??????????????????",
                "src": [
                    "./src/leaflet/components/openfile/OpenFileView.js"
                ],
                "modules": [{
                    "name": "WebMercatorTilingScheme",
                    "des": "wmts??????",
                    "des_en": "WebMercatorTilingScheme"
                }]
            },
            "Cartographic": {
                "name": "??????????????????",
                "src": [
                    "./src/leaflet/components/openfile/OpenFileView.js"
                ],
                "modules": [{
                    "name": "Cartographic",
                    "des": "????????????",
                    "des_en": "Cartographic"
                }]
            },
            "HypsometricSetting": {
                "name": "??????????????????",
                "src": [
                    "./src/leaflet/components/openfile/OpenFileView.js"
                ],
                "modules": [{
                    "name": "HypsometricSetting",
                    "des": "????????????",
                    "des_en": "Cartographic"
                }]
            },
            "Credential": {
                "name": "??????????????????",
                "src": [
                    "./src/leaflet/components/openfile/OpenFileView.js"
                ],
                "modules": [{
                    "name": "Credential",
                    "des": "SuperMap???????????????????????????",
                    "des_en": "Cartographic"
                }]
            },
            "Ellipsoid": {
                "name": "??????????????????",
                "src": [
                    "./src/leaflet/components/openfile/OpenFileView.js"
                ],
                "modules": [{
                    "name": "Ellipsoid",
                    "des": "????????????",
                    "des_en": "Cartographic"
                }]
            },
            "ColorTable": {
                "name": "??????????????????",
                "src": [
                    "./src/leaflet/components/openfile/OpenFileView.js"
                ],
                "modules": [{
                    "name": "ColorTable",
                    "des": "????????????",
                    "des_en": "Cartographic"
                }]
            },
            "CesiumTerrainProvider": {
                "name": "??????????????????",
                "src": [
                    "./src/leaflet/components/openfile/OpenFileView.js"
                ],
                "modules": [{
                    "name": "CesiumTerrainProvider",
                    "des": "Cesium????????????????????????",
                    "des_en": "CesiumTerrainProvider"
                }]
            },
            "Cartesian3": {
                "name": "??????????????????",
                "src": [
                    "./src/leaflet/components/openfile/OpenFileView.js"
                ],
                "modules": [{
                    "name": "Cartesian3",
                    "des": "???????????????????????????",
                    "des_en": "Cartesian3"
                }]
            },
            "PackingRequest": {
                "name": "??????????????????",
                "src": [
                    "./src/leaflet/components/openfile/OpenFileView.js"
                ],
                "modules": [{
                    "name": "PackingRequest",
                    "des": "???????????????????????????",
                    "des_en": "Cartesian3"
                }]
            }
        },
        "DataSources": {
            "title": "?????????",
            "description": "?????????",
            "description_en": "DataSources",

            "PolylineTrailMaterialProperty": {
                "name": "??????????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "PolylineTrailMaterialProperty",
                    "des": "??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "EntityCollection ": {
                "name": "?????????????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "EntityCollection ",
                    "des": "?????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "DataSource": {
                "name": "???????????????????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "DataSource ",
                    "des": "???????????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "DataSourceCollection": {
                "name": "????????????????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "DataSourceCollection  ",
                    "des": "????????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "Entity": {
                "name": "???????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "Entity",
                    "des": "???????????????",
                    "des_en": "Open file components"
                }]
            }
        },
        "Fly": {
            "title": "????????????",
            "description": "????????????",
            "description_en": "Fly",

            "FlyManager": {
                "name": "???????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "FlyManager",
                    "des": "???????????????",
                    "des_en": "Open file components"
                }]
            },
            "FlyInterpolationMode": {
                "name": "????????????????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "FlyInterpolationMode",
                    "des": "????????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "StopPlayMode": {
                "name": "????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "StopPlayMode",
                    "des": "????????????",
                    "des_en": "Open file components"
                }]
            },
            "Route": {
                "name": "?????????????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "Route",
                    "des": "?????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "RouteCollection": {
                "name": "???????????????????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "RouteCollection",
                    "des": "???????????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "RouteStop": {
                "name": "?????????????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "RouteStop",
                    "des": "?????????????????????",
                    "des_en": "Open file components"
                }]
            }
        },
        "Geometry3D": {
            "title": "???????????????",
            "description": "???????????????",
            "description_en": "Geometry3D",

            "Point3Ds": {
                "name": "????????????????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "Point3Ds",
                    "des": "????????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "Catenaryline": {
                "name": "?????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "Catenaryline",
                    "des": "?????????",
                    "des_en": "Open file components"
                }]
            },
            "GeoLine3D": {
                "name": "??????????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "GeoLine3D",
                    "des": "??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "GeoBillboard": {
                "name": "????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "GeoBillboard",
                    "des": "????????????????????????",
                    "des_en": "GeoBillboard"
                }]
            },
            "Geometry3D": {
                "name": "???????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "Geometry3D",
                    "des": "???????????????????????????",
                    "des_en": "GeoBillboard"
                }]
            },
            "GeoPoint3D": {
                "name": "??????????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "GeoPoint3D",
                    "des": "??????????????????????????????",
                    "des_en": "GeoBillboard"
                }]
            },
            "GeoCone": {
                "name": "???????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "GeoCone",
                    "des": "???????????????????????????",
                    "des_en": "GeoBillboard"
                }]
            },
            "GeoRegion3D": {
                "name": "??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "GeoRegion3D",
                    "des": "??????????????????",
                    "des_en": "GeoBillboard"
                }]
            },
            "GeoEllipsoid": {
                "name": "??????????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "GeoEllipsoid",
                    "des": "??????????????????????????????",
                    "des_en": "GeoBillboard"
                }]
            },
            "GeoBox": {
                "name": "??????????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "GeoBox",
                    "des": "??????????????????????????????",
                    "des_en": "GeoBillboard"
                }]
            },
            "GeoSphere": {
                "name": "???????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "GeoSphere",
                    "des": "???????????????????????????",
                    "des_en": "GeoBillboard"
                }]
            },
            "GeoCylinder": {
                "name": "??????????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "GeoCylinder",
                    "des": "??????????????????????????????",
                    "des_en": "GeoBillboard"
                }]
            },
            "GeoModel3D": {
                "name": "?????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "GeoModel3D",
                    "des": "?????????????????????",
                    "des_en": "GeoBillboard"
                }]
            }
        },
        "Handler": {
            "title": "??????????????????",
            "description": "??????????????????",
            "description_en": "Geometry3D",

            "BoxEditor": {
                "name": "Box????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "BoxEditor",
                    "des": "Box????????????",
                    "des_en": "Open file components"
                }]
            },
            "EditHandler": {
                "name": "???????????????",
                "src": [
                    "../docs/Documentation/SCTTerrainProvider.html"
                ],
                "modules": [{
                    "name": "EditHandler",
                    "des": "???????????????",
                    "des_en": "Open file components"
                }]
            },
            "MeasureMode": {
                "name": "???????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "MeasureMode",
                    "des": "???????????????",
                    "des_en": "Open file components"
                }]
            },
            "DrawHandler": {
                "name": "????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "DrawHandler",
                    "des": "????????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "MeasureHandler": {
                "name": "??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "MeasureHandler",
                    "des": "??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "DrawMode": {
                "name": "???????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "DrawMode",
                    "des": "???????????????",
                    "des_en": "Open file components"
                }]
            },

        },
        "Renderer": {
            "title": "??????",
            "description": "??????",
            "description_en": "Renderer",

            "ProjectionImage": {
                "name": "???????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "ProjectionImage",
                    "des": "???????????????",
                    "des_en": "Open file components"
                }]
            },
            "BillboardMode": {
                "name": "???????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "BillboardMode",
                    "des": "???????????????",
                    "des_en": "Open file components"
                }]
            },
            "SpatialQuery3D": {
                "name": "GPU???????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "SpatialQuery3D",
                    "des": "GPU???????????????",
                    "des_en": "Open file components"
                }]
            },
            "ViewDome": {
                "name": "??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "ViewDome",
                    "des": "??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "ViewDomeType": {
                "name": "????????????????????? ",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "ViewDomeType",
                    "des": "?????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "MultiViewShed3D": {
                "name": "??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "MultiViewShed3D",
                    "des": "??????????????????",
                    "des_en": "Open file components"
                }]
            }
        },
        "Spatial Analysis": {
            "title": "????????????",
            "description": "????????????",
            "description_en": "Spatial Analysis",

            "Sightline": {
                "name": "????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "Sightline",
                    "des": "????????????",
                    "des_en": "Open file components"
                }]
            },
            "Style3D": {
                "name": "??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "Style3D",
                    "des": "??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "Profile": {
                "name": "??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "Profile",
                    "des": "??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "ViewShed3D": {
                "name": "???????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "ViewShed3D",
                    "des": "???????????????",
                    "des_en": "Open file components"
                }]
            },
            "Skyline": {
                "name": "???????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "Skyline",
                    "des": "???????????????",
                    "des_en": "Open file components"
                }]
            },
            "ShadowQueryPoints": {
                "name": "??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "ShadowQueryPoints",
                    "des": "??????????????????",
                    "des_en": "Open file components"
                }]
            }
        },
        "S3MTiles": {
            "title": "S3M??????",
            "description": "S3M??????",
            "description_en": "S3MTiles",

            "SelectColorType": {
                "name": "???????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "SelectColorType",
                    "des": "???????????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "InstanceLayer": {
                "name": "??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "InstanceLayer",
                    "des": "??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "S3MTilesLabelStyle": {
                "name": "S3M???????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "S3MTilesLabelStyle",
                    "des": "S3M???????????????",
                    "des_en": "Open file components"
                }]
            },
            "DynamicLayer3D": {
                "name": "?????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "DynamicLayer3D",
                    "des": "?????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "DDSTexture": {
                "name": "DDS????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "DDSTexture",
                    "des": "DDS????????????",
                    "des_en": "Open file components"
                }]
            },
            "DDSTextureManager": {
                "name": "DDS??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "DDSTextureManager",
                    "des": "DDS??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "DynamicObjectState": {
                "name": "?????????????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "DynamicObjectState",
                    "des": "?????????????????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "S3MInstance": {
                "name": "S3M??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "S3MInstance",
                    "des": "S3M??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "S3MInstanceCollection": {
                "name": "S3M????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "S3MInstanceCollection",
                    "des": "S3M????????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "S3MTilesLayer": {
                "name": "S3M(Spatial 3D Model)?????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "S3MTilesLayer",
                    "des": "S3M(Spatial 3D Model)?????????",
                    "des_en": "Open file components"
                }]
            },
            "SplitDirection": {
                "name": "??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "SplitDirection",
                    "des": "??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "BufferManager": {
                "name": "???????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "BufferManager",
                    "des": "???????????????",
                    "des_en": "Open file components"
                }]
            },
            "S3MPixelFormat": {
                "name": "S3M??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "S3MPixelFormat",
                    "des": "S3M??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "S3MBloomEffect": {
                "name": "S3M?????????????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "S3MBloomEffect",
                    "des": "S3M?????????????????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "SHADOWTYPE": {
                "name": "?????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "SHADOWTYPE",
                    "des": "?????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "ModifyRegionMode": {
                "name": "?????????????????????S3M?????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "ModifyRegionMode",
                    "des": "?????????????????????S3M?????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "UrlType": {
                "name": "S3M????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "UrlType",
                    "des": "S3M????????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "ObjsOperationType": {
                "name": "??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "ObjsOperationType",
                    "des": "??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "S3MCompressType": {
                "name": "S3M??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "S3MCompressType",
                    "des": "S3M??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "InstancedType": {
                "name": "???????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "InstancedType",
                    "des": "???????????????",
                    "des_en": "Open file components"
                }]
            }
        },
        "Scene": {
            "title": "??????????????????",
            "description": "??????????????????",
            "description_en": "Scene ",

            "Scene ": {
                "name": "???????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "Scene ",
                    "des": "???????????????",
                    "des_en": "Open file components"
                }]
            },
            "Quality": {
                "name": "??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "Quality",
                    "des": "??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "HeatMap": {
                "name": "????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "HeatMap",
                    "des": "????????????",
                    "des_en": "Open file components"
                }]
            },
            "RasterVectorCollection": {
                "name": "??????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "RasterVectorCollection",
                    "des": "??????????????????",
                    "des_en": "Open file components"
                }]
            },
            "RasterGeometryType": {
                "name": "????????????????????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "RasterVectorCollection",
                    "des": "????????????????????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "VectorTilesMap": {
                "name": "?????????????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "VectorTilesMap",
                    "des": "?????????????????????",
                    "des_en": "Open file components"
                }]
            },
            "SolidModelsProfile":{
                "name":"?????????????????????",
                "src":"",
                "modules":[{
                    "name":"SolidModelsProfile",
                    "des":"?????????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "CGCS2000MapServerImageryProvider":{
                "name":"CGCS2000???????????????????????????",
                "src":"",
                "modules":[{
                    "name":"CGCS2000MapServerImageryProvider",
                    "des":"CGCS2000???????????????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "ScreenSpaceCameraController":{
                "name":"???????????????",
                "src":"",
                "modules":[{
                    "name":"ScreenSpaceCameraController",
                    "des":"???????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "GridProvider":{
                "name":"??????????????????????????????",
                "src":"",
                "modules":[{
                    "name":"GridProvider",
                    "des":"??????????????????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "WalkingMode":{
                "name":"????????????",
                "src":"",
                "modules":[{
                    "name":"WalkingMode",
                    "des":"????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "GridImageryProvider":{
                "name":"???????????????????????????",
                "src":"",
                "modules":[{
                    "name":"GridImageryProvider ",
                    "des":"???????????????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "GridLayer":{
                "name":"???????????????????????????",
                "src":"",
                "modules":[{
                    "name":"GridLayer",
                    "des":"???????????????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "ScanEffectMode":{
                "name":"?????????????????????",
                "src":"",
                "modules":[{
                    "name":"ScanEffectMode",
                    "des":"?????????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "FieldLayer3D":{
                "name":"??????????????????",
                "src":"",
                "modules":[{
                    "name":"FieldLayer3D",
                    "des":"??????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "ColorCorrection":{
                "name":"???????????????",
                "src":"",
                "modules":[{
                    "name":"ColorCorrection",
                    "des":"???????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "DepthOfFieldEffect":{
                "name":"???????????????",
                "src":"",
                "modules":[{
                    "name":"DepthOfFieldEffect",
                    "des":"???????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "ScanEffect":{
                "name":"??????????????????",
                "src":"",
                "modules":[{
                    "name":"ScanEffect",
                    "des":"??????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "BloomEffect":{
                "name":"???????????????",
                "src":"",
                "modules":[{
                    "name":"BloomEffect",
                    "des":"???????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "ParticleVelocityFieldEffect":{
                "name":"???????????????????????????????????????",
                "src":"",
                "modules":[{
                    "name":"ParticleVelocityFieldEffect",
                    "des":"???????????????????????????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "MultiViewportMode ":{
                "name":"??????????????????",
                "src":"",
                "modules":[{
                    "name":"MultiViewportMode",
                    "des":"??????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "SuperMapImageryProvider":{
                "name":"????????????????????????",
                "src":"",
                "modules":[{
                    "name":"SuperMapImageryProvider",
                    "des":"????????????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "TiandituImageryProvider":{
                "name":"?????????????????????????????????",
                "src":"",
                "modules":[{
                    "name":"TiandituImageryProvider",
                    "des":"?????????????????????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "TiandituMapsStyle":{
                "name":"???????????????????????????",
                "src":"",
                "modules":[{
                    "name":"TiandituMapsStyle",
                    "des":"???????????????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "Camera":{
                "name":"?????????",
                "src":"",
                "modules":[{
                    "name":"Camera",
                    "des":"?????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "Globe":{
                "name":"?????????????????????",
                "src":"",
                "modules":[{
                    "name":"Globe",
                    "des":"?????????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "ImageryLayer":{
                "name":"???????????????",
                "src":"",
                "modules":[{
                    "name":"ImageryLayer",
                    "des":"???????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "ImageryLayerCollection":{
                "name":"?????????????????????",
                "src":"",
                "modules":[{
                    "name":"ImageryLayerCollection",
                    "des":"?????????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "Layers":{
                "name":"???????????????",
                "src":"",
                "modules":[{
                    "name":"Layers",
                    "des":"???????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
            "WireFrameType":{
                "name":"S3M????????????????????????",
                "src":"",
                "modules":[{
                    "name":"WireFrameType",
                    "des":"S3M????????????????????????",
                    "des_en":"SolidModelsProfile"
                }]
            },
        },
        "Widgets": {
            "title": "??????",
            "description": "??????",
            "description_en": "Widgets",

            "Viewer": {
                "name": "Viewer????????????",
                "src": ["../docs/Documentation/SCTTerrainProvider.html"],
                "modules": [{
                    "name": "Viewer",
                    "des": "Viewer????????????",
                    "des_en": "Viewer"
                }]
            }
        }
    }
};