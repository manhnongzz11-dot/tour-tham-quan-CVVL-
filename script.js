(function(){
    var script = {
 "definitions": [{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "5",
 "hfovMin": "150%",
 "id": "panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D",
 "audios": [
  "this.audio_558056CD_7C9F_59E0_41CA_B17FDA68E07F"
 ],
 "overlays": [
  "this.overlay_6D399A5D_7C7F_48E0_41DC_BA1393507DE0",
  "this.overlay_6DB88A4A_7C7F_C8E1_41CC_22639E7BC4D6"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -74.47,
   "yaw": 22.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86"
  },
  {
   "backwardYaw": -62.49,
   "yaw": -66.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 63,
 "thumbnailUrl": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1792025747482_9007469102597002678_9007469102597002678_d0a653d6beea671025d5c4226f524399",
 "hfovMin": "150%",
 "id": "panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C",
 "audios": [
  "this.audio_534725EC_7C92_DBA0_41CC_C06082059636"
 ],
 "overlays": [
  "this.overlay_5457A61D_7C97_5863_41D6_67B58813A713",
  "this.overlay_591E981A_7C97_4861_41D7_008F340709FE"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": 51.94,
   "yaw": -51.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB"
  },
  {
   "backwardYaw": -63.87,
   "yaw": 58.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 62.86,
 "thumbnailUrl": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -121.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5152C66F_7C93_58A0_41B7_001ACC71894D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_camera"
  },
  {
   "media": "this.panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_camera"
  },
  {
   "media": "this.panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_camera"
  },
  {
   "media": "this.panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_camera"
  },
  {
   "media": "this.panorama_6F166094_7C71_5861_41D7_9B09F915A4E2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_camera"
  },
  {
   "media": "this.panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_camera"
  },
  {
   "media": "this.panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_camera"
  },
  {
   "media": "this.panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_camera"
  },
  {
   "media": "this.panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_camera"
  },
  {
   "media": "this.panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_camera"
  },
  {
   "media": "this.panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_camera"
  },
  {
   "media": "this.panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_camera"
  },
  {
   "media": "this.panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_camera"
  },
  {
   "media": "this.panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_camera"
  },
  {
   "media": "this.panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_camera"
  },
  {
   "media": "this.panorama_6955B65A_7C91_38E1_41DE_F183C5A77963",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_camera"
  },
  {
   "media": "this.panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_camera"
  },
  {
   "media": "this.panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_camera"
  },
  {
   "media": "this.panorama_67483509_7CB3_3860_41C8_021A2EE0E776",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_67483509_7CB3_3860_41C8_021A2EE0E776_camera"
  },
  {
   "media": "this.panorama_613F5283_7CB7_5860_41D3_C7238A954990",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_613F5283_7CB7_5860_41D3_C7238A954990_camera"
  },
  {
   "media": "this.panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_camera"
  },
  {
   "media": "this.panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_camera"
  },
  {
   "media": "this.panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_camera"
  },
  {
   "media": "this.panorama_665B0106_7CB1_3860_41A2_3D53FD279040",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_665B0106_7CB1_3860_41A2_3D53FD279040_camera"
  },
  {
   "media": "this.panorama_665A4515_7CB1_3863_41DA_1C66A5262B90",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_camera"
  },
  {
   "media": "this.panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_camera"
  },
  {
   "media": "this.panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_camera"
  },
  {
   "media": "this.panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_camera"
  },
  {
   "media": "this.panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_camera"
  },
  {
   "media": "this.panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_camera"
  },
  {
   "media": "this.panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_camera"
  },
  {
   "media": "this.panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_camera"
  },
  {
   "media": "this.panorama_598F3060_7C93_78A0_41D5_FF301683C134",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_598F3060_7C93_78A0_41D5_FF301683C134_camera"
  },
  {
   "media": "this.panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -159.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_50CE851F_7C93_5860_41D0_4E3D0BF1B99F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 114.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5666D458_7C93_58E0_41BB_570259437ED1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "2.1",
 "hfovMin": "150%",
 "id": "panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6",
 "audios": [
  "this.audio_5748681B_7C92_C860_41A7_29DCF9DEC6CF"
 ],
 "overlays": [
  "this.overlay_64754579_7C97_38A2_41B2_9FE3C9422508",
  "this.overlay_6B2F4C24_7C97_48A0_41D3_3BF5A0C49141"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": 25.94,
   "yaw": 30.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790"
  },
  {
   "backwardYaw": 25.94,
   "yaw": -67.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 62.3,
 "thumbnailUrl": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -151.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_577CC4DE_7C93_59E1_41C2_1400BD472B06",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -149.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5183757F_7C93_58A0_41DA_FDEB2BD2EB27",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -155.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_57E2A49F_7C93_5860_41CB_3E9C30656B81",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_5196D69B_7C93_5860_41DD_C692A00C4BAC",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": -154.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_579D748F_7C93_5860_41D6_8F9DC4CB3492",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 107.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_502D952F_7C93_58A0_41C4_1C815470D588",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_534725EC_7C92_DBA0_41CC_C06082059636",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": 112.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_57ABC46F_7C93_58A0_41D7_BD1E8D8FC160",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_558056CD_7C9F_59E0_41CA_B17FDA68E07F",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "4.10",
 "hfovMin": "150%",
 "id": "panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907",
 "audios": [
  "this.audio_55F5C40D_7C93_3860_41D1_90DD1C63046E"
 ],
 "overlays": [
  "this.overlay_5EF66D37_7CB6_C8A0_41C2_128CA6847336"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -90,
   "yaw": 67.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 64.13,
 "thumbnailUrl": "media/panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1.1",
 "hfovMin": "150%",
 "id": "panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF",
 "audios": [
  "this.audio_533E3AC5_7C91_49E3_41AB_70DE3CA7B1E4"
 ],
 "overlays": [
  "this.overlay_6E3F3C4B_7C91_C8E0_41B4_BD42469260C8",
  "this.overlay_696B3858_7C91_C8E1_41A3_A41C2361D7C0"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": 16.39,
   "yaw": -64.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E"
  },
  {
   "backwardYaw": 79.51,
   "yaw": 33.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 63.84,
 "thumbnailUrl": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1792025747420_9007469102597002678_9007469102597002678_f88efd10ac72a2fb5a4b88f276d83b5a",
 "hfovMin": "150%",
 "id": "panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7",
 "audios": [
  "this.audio_552AC2A1_7C91_39A0_41CE_B3CC8469936C"
 ],
 "overlays": [
  "this.overlay_5E922F9F_7C91_C860_41B7_F3FACE81F53A",
  "this.overlay_59FBBF3D_7C91_C8A0_41B8_52C5AE9E1C10"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -28.27,
   "yaw": 20.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_665B0106_7CB1_3860_41A2_3D53FD279040"
  },
  {
   "backwardYaw": 58.09,
   "yaw": -63.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 63,
 "thumbnailUrl": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -157.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_51B2057F_7C93_58A0_417D_D7E05102A0F2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -161.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5792648F_7C93_5860_41CD_C8B9F873478B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3.9",
 "hfovMin": "150%",
 "id": "panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2",
 "audios": [
  "this.audio_55390AFE_7C91_49A0_41A2_61FCBC710476"
 ],
 "overlays": [
  "this.overlay_564115DE_7C91_5BE0_41D0_B9E37A0CB670"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -90,
   "yaw": 90,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_598F3060_7C93_78A0_41D5_FF301683C134"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 42.34,
 "thumbnailUrl": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 117.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_51E1D5AF_7C93_5BA0_41BE_EA210FFA214D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "2.2",
 "hfovMin": "150%",
 "id": "panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790",
 "audios": [
  "this.audio_4CFA8083_7C92_F860_41AD_A70364BBC32D"
 ],
 "overlays": [
  "this.overlay_6A15F487_7C93_586F_41D6_A665CB197CBB",
  "this.overlay_6593A65B_7C93_78E0_41DB_700AB8F17ACB"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": 22.55,
   "yaw": -67.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6955B65A_7C91_38E1_41DE_F183C5A77963"
  },
  {
   "backwardYaw": 30.58,
   "yaw": 25.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 65.53,
 "thumbnailUrl": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5109360F_7C93_5860_41CA_366D9EA9632A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_533E3AC5_7C91_49E3_41AB_70DE3CA7B1E4",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": 117.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_508A64FF_7C93_59A0_41C8_3280CFBC13E3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -148.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_509AB50F_7C93_5860_41D5_4680CFE5D83D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -95.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_52A0067F_7C93_58A0_41BB_0C4D51D4B3AD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -157.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5119861F_7C93_5860_41B2_CF2DB91BE437",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_50E9150F_7C93_5860_41C0_7A37086D8495",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_50DD152F_7C93_58A0_41C4_8BFBB99E1651",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -136.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5007253F_7C93_58A0_41B6_B2BFEFE4A13B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_5748681B_7C92_C860_41A7_29DCF9DEC6CF",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_500747AF_7C9E_C7A0_41D1_60330AF0420E",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_5040AC25_7C91_48A3_41D9_6DCAD8FF7F42",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_572CAA71_7C91_48A3_41C0_269C8CCA8C2A",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": -163.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5048655F_7C93_58E0_41D7_D86DB7A4278E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_67483509_7CB3_3860_41C8_021A2EE0E776_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -128.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5065554F_7C93_58E0_41CC_D975A419275A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_5032630C_7C93_D861_41CC_76D2C15E23DC",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": 115.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_57F1F49F_7C93_5860_41DA_AFF54648AC2B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -152.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_512A85EF_7C93_5BA0_4160_DD07BE0105C6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_5116AD68_7C91_48A1_41D7_94884861E4A2",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1792024752332_185655732195866917_9007469102597002678_def2474fb96a79b21e05a69c4fe92e8f",
 "hfovMin": "150%",
 "id": "panorama_67483509_7CB3_3860_41C8_021A2EE0E776",
 "audios": [
  "this.audio_5169DDE6_7C93_4BA0_41D8_E51B7F305578"
 ],
 "overlays": [
  "this.overlay_657DBE84_7CB1_C860_41DC_93197AFC0A8E",
  "this.overlay_6017B9B5_7CB1_CBA0_41DE_A29036604020"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -66.14,
   "yaw": 31.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C"
  },
  {
   "backwardYaw": 31.78,
   "yaw": -66.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_613F5283_7CB7_5860_41D3_C7238A954990"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 67.92,
 "thumbnailUrl": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3.3",
 "hfovMin": "150%",
 "id": "panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A",
 "audios": [
  "this.audio_551A4783_7C91_5867_41D5_562F1466E44A"
 ],
 "overlays": [
  "this.overlay_57AA0438_7C93_38A0_41DD_01BDFD9D91F2",
  "this.overlay_56031E1C_7C93_489E_41D5_3FCAFA3F27AA"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": 12.25,
   "yaw": 71.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25"
  },
  {
   "backwardYaw": 90,
   "yaw": -90,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_598F3060_7C93_78A0_41D5_FF301683C134"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 61.73,
 "thumbnailUrl": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 116.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_507B055F_7C93_58E0_41DE_7892E1B8A43D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_517C6643_7C93_58E0_41D6_3695B6037CFF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1.4",
 "hfovMin": "150%",
 "id": "panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768",
 "audios": [
  "this.audio_549863C7_7C9E_DFEF_41BC_2A86F20C4D0B"
 ],
 "overlays": [
  "this.overlay_68A4BE4A_7C91_48E0_41B3_F8DDC4D661E4",
  "this.overlay_6ACF814F_7C91_58E0_41D7_C53538516AD3"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -72.16,
   "yaw": 25.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400"
  },
  {
   "backwardYaw": 31.17,
   "yaw": -71.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 63.84,
 "thumbnailUrl": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_55E20F7C_7C92_C8A1_41D9_BE7F4B04C545",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_55390AFE_7C91_49A0_41A2_61FCBC710476",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_50016933_7C91_48A0_41AF_F3A3C126AC63",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_559F247A_7C93_78A0_41BE_A85F69AD775C",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "2",
 "hfovMin": "150%",
 "id": "panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25",
 "audios": [
  "this.audio_50F46045_7C9F_F8E0_41D5_1BC333636E32"
 ],
 "overlays": [
  "this.overlay_73DC9E5B_7C73_48E7_41D4_616DE10A2A85",
  "this.overlay_6D55E3E9_7C73_3FA0_41AC_1AD55795C42C"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": 71.97,
   "yaw": 12.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A"
  },
  {
   "backwardYaw": 27.77,
   "yaw": -67.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 58.92,
 "thumbnailUrl": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_598F3060_7C93_78A0_41D5_FF301683C134_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "4.2",
 "hfovMin": "150%",
 "id": "panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7",
 "audios": [
  "this.audio_5032630C_7C93_D861_41CC_76D2C15E23DC"
 ],
 "overlays": [
  "this.overlay_67202D21_7CB1_48A0_41D8_610E61731890",
  "this.overlay_610BE46F_7CB1_58A0_41C8_6FB60BD29D9C"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_67483509_7CB3_3860_41C8_021A2EE0E776"
  },
  {
   "backwardYaw": 84.03,
   "yaw": -88.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1"
  },
  {
   "backwardYaw": -29.27,
   "yaw": 90,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 58.92,
 "thumbnailUrl": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "5.5",
 "hfovMin": "150%",
 "id": "panorama_665A4515_7CB1_3863_41DA_1C66A5262B90",
 "audios": [
  "this.audio_5196D69B_7C93_5860_41DD_C692A00C4BAC"
 ],
 "overlays": [
  "this.overlay_5F5A2F53_7CB7_48E0_41D2_0F7AD7FB5548",
  "this.overlay_5C13278B_7CB7_D860_41D8_10639F9AB5A9"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": 59.91,
   "yaw": -90,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_665B0106_7CB1_3860_41A2_3D53FD279040"
  },
  {
   "backwardYaw": -23.74,
   "yaw": 28.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 42.56,
 "thumbnailUrl": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_51AF156F_7C93_58A0_41BA_F6FB0A012E17",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_506616C8_7C93_39E0_41C0_C68E8D29EF2B",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "7",
 "hfovMin": "150%",
 "id": "panorama_6F166094_7C71_5861_41D7_9B09F915A4E2",
 "audios": [
  "this.audio_5759B4BE_7C9F_59A1_41D6_7C6D93D32E47"
 ],
 "overlays": [
  "this.overlay_6D12E546_7C71_F8E1_41C5_B40CFAAED014",
  "this.overlay_6E8CB658_7C71_D8E1_41B6_8BAC76079608"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 18.27,
   "yaw": -132.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746"
  },
  {
   "backwardYaw": 24.68,
   "yaw": 43.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 127.41,
 "thumbnailUrl": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -154.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_51F7A5BF_7C93_5BA0_41D7_5E0D75464C48",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "9",
 "hfovMin": "150%",
 "id": "panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991",
 "audios": [
  "this.audio_5040AC25_7C91_48A3_41D9_6DCAD8FF7F42"
 ],
 "overlays": [
  "this.overlay_6956CF53_7C6F_48E0_41B4_BE9BEDE258ED",
  "this.overlay_6D879515_7C6F_5863_41A8_ADB7FEF7D3DD"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": 33.35,
   "yaw": 79.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF"
  },
  {
   "backwardYaw": 90,
   "yaw": -29.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 66.38,
 "thumbnailUrl": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -120.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5725D4AF_7C93_59A0_41CC_68C011D6B8D9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_613F5283_7CB7_5860_41D3_C7238A954990_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 105.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5191759F_7C93_5860_41AC_14E9CA452582",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "6",
 "hfovMin": "150%",
 "id": "panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C",
 "audios": [
  "this.audio_54ABE4E9_7C9F_79A3_41AD_F256CB67502C"
 ],
 "overlays": [
  "this.overlay_6E75DC20_7C73_48A0_41CB_AD4CF2214897",
  "this.overlay_6F184E1D_7C73_C860_416D_117C576E7268"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": 43.08,
   "yaw": 24.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6F166094_7C71_5861_41D7_9B09F915A4E2"
  },
  {
   "backwardYaw": -66.39,
   "yaw": -62.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 63.14,
 "thumbnailUrl": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1792025747494_9007469102597002678_9007469102597002678_4eb436b9c99f71643e491d7eefea3bb7",
 "hfovMin": "150%",
 "id": "panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB",
 "audios": [
  "this.audio_5190BC48_7C92_C8E1_41DB_9D77F9FE973E"
 ],
 "overlays": [
  "this.overlay_5F5B3941_7C97_48E0_41D5_E63FED7C921F",
  "this.overlay_569E61DE_7C97_3BE1_41BF_F155FCC73826"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -51.94,
   "yaw": 51.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C"
  },
  {
   "backwardYaw": 33.86,
   "yaw": -30.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 63.14,
 "thumbnailUrl": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 150.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_52B0168F_7C93_5860_41D0_775AB8099797",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_501A5FCF_7C93_47FF_41D3_E6A2E7B4FE4A",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": -148.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_50A754EF_7C93_59A0_41D0_F3C3CEC867E4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -108.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_51DA35DF_7C93_5BE0_41C2_DFBDD92945C1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -154.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_57C634AF_7C93_59A0_4193_DDA5DDCAA937",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_55F5C40D_7C93_3860_41D1_90DD1C63046E",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_50F46045_7C9F_F8E0_41D5_1BC333636E32",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "4.11",
 "hfovMin": "150%",
 "id": "panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1",
 "audios": [
  "this.audio_559F247A_7C93_78A0_41BE_A85F69AD775C"
 ],
 "overlays": [
  "this.overlay_6398991A_7CB3_C860_41CB_86CA856ACE3A",
  "this.overlay_61D11F7C_7CB3_48A0_41C9_F7073285CE43",
  "this.overlay_601A83F4_7CB3_7FA0_41C3_734BA2309805"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": 28.68,
   "yaw": -23.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_665A4515_7CB1_3863_41DA_1C66A5262B90"
  },
  {
   "backwardYaw": -88.31,
   "yaw": 84.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7"
  },
  {
   "backwardYaw": 67.2,
   "yaw": -90,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 62.44,
 "thumbnailUrl": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 108.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_57D494AF_7C93_59A0_41CC_A10290DD9AB9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "1.2",
 "hfovMin": "150%",
 "id": "panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E",
 "audios": [
  "this.audio_572CAA71_7C91_48A3_41C0_269C8CCA8C2A"
 ],
 "overlays": [
  "this.overlay_6F9523FC_7C97_3FA1_4184_EEC696A121A0",
  "this.overlay_69C1B915_7C97_C860_41C3_67FBE1C2D401"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -64.88,
   "yaw": 16.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF"
  },
  {
   "backwardYaw": 25.31,
   "yaw": -87.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 77.91,
 "thumbnailUrl": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 117.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_50B7A4FF_7C93_59A0_41DE_1BF2F892D4F7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_565A246F_7C93_58A0_41DB_C87BE472BE54",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_551A4783_7C91_5867_41D5_562F1466E44A",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": 115,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_516FF62F_7C93_58A0_41DD_CCA11D76E62D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "3.8",
 "hfovMin": "150%",
 "id": "panorama_598F3060_7C93_78A0_41D5_FF301683C134",
 "audios": [
  "this.audio_51E8B7F3_7C91_47A7_41C5_89B4331AF222"
 ],
 "overlays": [
  "this.overlay_57B5EF37_7C91_48AF_41CF_529E6FD5F96A",
  "this.overlay_57FD89E4_7C91_4BA0_41A7_30595BF101B8"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -90,
   "yaw": 90,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A"
  },
  {
   "backwardYaw": 90,
   "yaw": -90,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 42.43,
 "thumbnailUrl": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "5.6",
 "hfovMin": "150%",
 "id": "panorama_665B0106_7CB1_3860_41A2_3D53FD279040",
 "audios": [
  "this.audio_506616C8_7C93_39E0_41C0_C68E8D29EF2B"
 ],
 "overlays": [
  "this.overlay_63DBE888_7CB1_C861_41D4_C643B548B57E",
  "this.overlay_63AE17ED_7CB1_C7A0_41D6_138AAC14F6EB",
  "this.overlay_63810F6F_7CB1_C8BF_41DC_474DE19A59FC"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -90,
   "yaw": 59.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_665A4515_7CB1_3863_41DA_1C66A5262B90"
  },
  {
   "backwardYaw": 20.91,
   "yaw": -28.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7"
  },
  {
   "backwardYaw": 90,
   "yaw": -90,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 62.02,
 "thumbnailUrl": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_50FE551F_7C93_5860_41D4_4F21FD2C8D5F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -167.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5647746F_7C93_58A0_41DD_58D1F7DF7D97",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "8",
 "hfovMin": "150%",
 "id": "panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746",
 "audios": [
  "this.audio_5183A3FF_7C9F_3F9F_41D3_038E9EFB3F6E"
 ],
 "overlays": [
  "this.overlay_684B3DE8_7C72_CBA0_41C0_1253E7B5F94A",
  "this.overlay_6FE3099A_7C71_4860_41A2_543E1D7F305A"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -132.52,
   "yaw": 18.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6F166094_7C71_5861_41D7_9B09F915A4E2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 61.59,
 "thumbnailUrl": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 113.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5014054F_7C93_58E0_41DD_46AFDFFC7157",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_51C313EC_7C93_FFA1_41C3_0EB837F5852A",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": -100.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_505E356F_7C93_58A0_41C4_19394698EF8B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "5.9",
 "hfovMin": "150%",
 "id": "panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3",
 "audios": [
  "this.audio_51C313EC_7C93_FFA1_41C3_0EB837F5852A"
 ],
 "overlays": [
  "this.overlay_58232E8B_7CAF_4867_41D7_4C00610424E6"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -62.43,
   "yaw": 25.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 62.02,
 "thumbnailUrl": "media/panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 113.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_575644EF_7C93_59A0_41CE_82BED3C34AE5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -146.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_56155447_7C93_58EF_41AA_B8472F68200F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_5190BC48_7C92_C8E1_41DB_9D77F9FE973E",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": 47.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_576FE4CF_7C93_59E0_41D0_6A9317ABC29F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 156.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_573BB4BF_7C93_59A0_41D3_1A8D71E2879A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -154.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_51BDD57F_7C93_58A0_41D7_A4AE64E56381",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 92.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_56737460_7C93_58A0_41CB_799571F3C4ED",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 91.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_577364DE_7C93_59E1_41D7_4058799A2F3F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -148.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5020553F_7C93_58A0_41D4_2BF1A6FF8670",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "2.3",
 "hfovMin": "150%",
 "id": "panorama_6955B65A_7C91_38E1_41DE_F183C5A77963",
 "audios": [
  "this.audio_5116AD68_7C91_48A1_41D7_94884861E4A2"
 ],
 "overlays": [
  "this.overlay_6BDB433D_7C92_D8A3_41C9_4D786306CBE2",
  "this.overlay_6BAA9986_7C92_C860_41DD_73D77B138DD1"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -67.27,
   "yaw": 22.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790"
  },
  {
   "backwardYaw": 25.31,
   "yaw": -65.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 63.42,
 "thumbnailUrl": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1.3",
 "hfovMin": "150%",
 "id": "panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400",
 "audios": [
  "this.audio_500747AF_7C9E_C7A0_41D1_60330AF0420E"
 ],
 "overlays": [
  "this.overlay_6AB5027B_7C91_38A7_41C8_412EAB9464A4",
  "this.overlay_6FFD8E06_7C91_C860_41DD_BD5A003E7DF3"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": 25.56,
   "yaw": -72.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768"
  },
  {
   "backwardYaw": -87.36,
   "yaw": 25.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 62.72,
 "thumbnailUrl": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_51E8B7F3_7C91_47A7_41C5_89B4331AF222",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "5.8",
 "hfovMin": "150%",
 "id": "panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D",
 "audios": [
  "this.audio_55BAD5F4_7C93_DBA0_41CD_00267B154630"
 ],
 "overlays": [
  "this.overlay_587D8F84_7CB3_4860_419C_5CC87A036682",
  "this.overlay_5EF07DE3_7CB3_4BA7_41DE_3B8FA64EB5AC"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -90,
   "yaw": 90,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_665B0106_7CB1_3860_41A2_3D53FD279040"
  },
  {
   "backwardYaw": 25.56,
   "yaw": -62.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 62.72,
 "thumbnailUrl": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "2.6",
 "hfovMin": "150%",
 "id": "panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C",
 "audios": [
  "this.audio_577E9041_7C91_F8E3_41DD_1E0D06D33816"
 ],
 "overlays": [
  "this.overlay_60D6056D_7CB1_58A0_41D5_551DFA4089F3",
  "this.overlay_65D94235_7CB1_D8A0_41D4_BCE8A922EC6E"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -62.74,
   "yaw": 22.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF"
  },
  {
   "backwardYaw": 31.59,
   "yaw": -66.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67483509_7CB3_3860_41C8_021A2EE0E776"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 61.59,
 "thumbnailUrl": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1792024752351_185655732195866917_9007469102597002678_e3425e3f82302dcae28e52829b5bffe7",
 "hfovMin": "150%",
 "id": "panorama_613F5283_7CB7_5860_41D3_C7238A954990",
 "audios": [
  "this.audio_501A5FCF_7C93_47FF_41D3_E6A2E7B4FE4A"
 ],
 "overlays": [
  "this.overlay_602E624E_7CB6_D8E1_41DD_23BB25905D2C",
  "this.overlay_66F5DDA3_7CB6_CBA7_4193_90F610115B52"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -66.27,
   "yaw": 31.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67483509_7CB3_3860_41C8_021A2EE0E776"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 64.13,
 "thumbnailUrl": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "2.5",
 "hfovMin": "150%",
 "id": "panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF",
 "audios": [
  "this.audio_51683FF5_7C91_C7A3_41D3_A949B1CD69D8"
 ],
 "overlays": [
  "this.overlay_67CAED05_7CAF_C863_41D1_FD12987E2FE8",
  "this.overlay_66013981_7CAF_4860_41DE_F046D084C97D"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": 22.55,
   "yaw": -62.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C"
  },
  {
   "backwardYaw": -65,
   "yaw": 25.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 63,
 "thumbnailUrl": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 149.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_514CC64F_7C93_58E0_41C2_D11BF6E570F9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -157.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_57B9947F_7C93_58A0_41B6_369F774F45AD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 112.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_578EF47F_7C93_58A0_41C1_8CD14C5DC084",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5719D4CF_7C93_59E0_41B7_97659FC0E24E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1.6",
 "hfovMin": "150%",
 "id": "panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF",
 "audios": [
  "this.audio_51E07B20_7C91_C8A1_41B0_D789235D4712"
 ],
 "overlays": [
  "this.overlay_6B0F2001_7C91_7863_41D7_9F4BE12718F7",
  "this.overlay_64C105D8_7C91_5BE0_41CB_25957A405FAE"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -71.16,
   "yaw": 31.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 42.5,
 "thumbnailUrl": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_552AC2A1_7C91_39A0_41CE_B3CC8469936C",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_5169DDE6_7C93_4BA0_41D8_E51B7F305578",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_4CFA8083_7C92_F860_41AD_A70364BBC32D",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_54ABE4E9_7C9F_79A3_41AD_F256CB67502C",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": 151.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5142665F_7C93_58E0_41D7_CC94B1260BCD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1792025747504_9007469102597002678_9007469102597002678_faca01a453b182c66f0f56af0188972a",
 "hfovMin": "150%",
 "id": "panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9",
 "audios": [
  "this.audio_55E20F7C_7C92_C8A1_41D9_BE7F4B04C545"
 ],
 "overlays": [
  "this.overlay_55D7A35E_7C91_D8E0_41A2_9E07C4895AFD",
  "this.overlay_55431A96_7C91_C860_41C6_619F336B1536"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -30.34,
   "yaw": 33.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 59.44,
 "thumbnailUrl": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "4",
 "hfovMin": "150%",
 "id": "panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86",
 "overlays": [
  "this.overlay_687D611A_7C71_3860_41C1_F2F8DAEB0D88",
  "this.overlay_6CEBF8CC_7C71_49E1_41B5_293ED472D511"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": -67.14,
   "yaw": 27.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25"
  },
  {
   "backwardYaw": 22.67,
   "yaw": -74.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 42.5,
 "thumbnailUrl": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_665B0106_7CB1_3860_41A2_3D53FD279040_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -154.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5679D460_7C93_58A0_41DC_E64EE203C28F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -146.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_513BD5FF_7C93_5BA0_41D4_D36549C9D541",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 113.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5031753F_7C93_58A0_41B9_B63D5C08A995",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_570894BF_7C93_59A0_41D7_546BE9C3486E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "2.4",
 "hfovMin": "150%",
 "id": "panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2",
 "audios": [
  "this.audio_50016933_7C91_48A0_41AF_F3A3C126AC63"
 ],
 "overlays": [
  "this.overlay_66FDB229_7C91_78A0_41D4_0623E27BC2D0",
  "this.overlay_66D6E7A6_7C91_47A0_41CE_20DE8BFCC823"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "backwardYaw": 25.69,
   "yaw": -65,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF"
  },
  {
   "backwardYaw": -65.01,
   "yaw": 25.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6955B65A_7C91_38E1_41DE_F183C5A77963"
  }
 ],
 "hfov": 180,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 60.89,
 "thumbnailUrl": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -154.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_51C4D5CF_7C93_5BE0_41CE_3C03531A0EEE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_577E9041_7C91_F8E3_41DD_1E0D06D33816",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_5759B4BE_7C9F_59A1_41D6_7C6D93D32E47",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": 128.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5602043D_7C93_58A3_41CF_A92F3EE7FA6D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_51683FF5_7C91_C7A3_41D3_A949B1CD69D8",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_5183A3FF_7C9F_3F9F_41D3_038E9EFB3F6E",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": -154.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_566D4451_7C93_58E0_41BB_04F9CE5FDA49",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_549863C7_7C9E_DFEF_41BC_2A86F20C4D0B",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -112.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 2.75,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 42.25,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 45,
    "yawSpeed": 1.89,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_574384EF_7C93_59A0_41D9_61AF8A159EB8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_55BAD5F4_7C93_DBA0_41CD_00267B154630",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "autoplay": true,
 "audio": "this.audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "id": "audio_51E07B20_7C91_C8A1_41B0_D789235D4712",
 "class": "PanoramaAudio",
 "data": {
  "label": "YTSave.to_YouTube_Media_ZXG9GmX1J_w_C\u00e2u-Ca-Em-H\u00e1t-Ph\u00fa-Th\u1ecd-Qu\u00ea-M\u00ecnh-Nh\u01b0-Ng\u1ecdc-Sao-Mai-B\u00e0i-H\u00e1t-Hay-Nh\u1ea5t-V\u1ec1-Ph\u00fa-Th\u1ecd_010_vbr"
 }
},
{
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "id": "MainViewer",
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderColor": "#767676",
 "progressBarBorderSize": 0,
 "minHeight": 50,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderColor": "#000000",
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "playbackBarHeadShadow": true,
 "progressHeight": 10,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowColor": "#000000",
 "minWidth": 100,
 "borderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "propagateClick": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipPaddingBottom": 4,
 "progressBorderColor": "#000000",
 "shadow": false,
 "playbackBarBackgroundOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressOpacity": 1,
 "playbackBarBorderSize": 0,
 "progressRight": 0,
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipFontWeight": "normal",
 "toolTipPaddingLeft": 6,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "playbackBarOpacity": 1,
 "toolTipShadowColor": "#333333",
 "firstTransitionDuration": 0,
 "transitionMode": "blending",
 "playbackBarHeadOpacity": 1,
 "borderRadius": 0,
 "paddingRight": 0,
 "progressLeft": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipFontColor": "#606060",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundOpacity": 1,
 "toolTipBorderSize": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipShadowVerticalLength": 0,
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBottom": 5,
 "progressBorderSize": 0,
 "playbackBarHeight": 10,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadHeight": 15,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ]
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -66.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.48
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C, this.camera_51E1D5AF_7C93_5BA0_41BE_EA210FFA214D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_523701CF_7C91_5BE0_41BE_0A337E1277D2",
   "pitch": -11.48,
   "hfov": 6.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -66.39,
   "distance": 100
  }
 ],
 "id": "overlay_6D399A5D_7C7F_48E0_41DC_BA1393507DE0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 22.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.74
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86, this.camera_5191759F_7C93_5860_41AC_14E9CA452582); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_523771CF_7C91_5BE0_41DD_734C18CBB05F",
   "pitch": -13.74,
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 22.67,
   "distance": 100
  }
 ],
 "id": "overlay_6DB88A4A_7C7F_C8E1_41CC_22639E7BC4D6",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.94,
   "yaw": 58.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.42
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7, this.camera_507B055F_7C93_58E0_41DE_7892E1B8A43D); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520151DF_7C91_5BE0_41C2_1DFB2CD1AD35",
   "pitch": -9.42,
   "hfov": 6.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 58.09,
   "distance": 100
  }
 ],
 "id": "overlay_5457A61D_7C97_5863_41D6_67B58813A713",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.98,
   "yaw": -51.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.16
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB, this.camera_5065554F_7C93_58E0_41CC_D975A419275A); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5201C1DF_7C91_5BE0_41D5_7B25FDB03E80",
   "pitch": -7.16,
   "hfov": 6.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.94,
   "distance": 100
  }
 ],
 "id": "overlay_591E981A_7C97_4861_41D7_008F340709FE",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 9.25,
   "yaw": 30.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.18
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790, this.camera_51F7A5BF_7C93_5BA0_41D7_5E0D75464C48); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520891CF_7C91_5BE0_41D2_8771C0080804",
   "pitch": -5.18,
   "hfov": 9.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 30.58,
   "distance": 100
  }
 ],
 "id": "overlay_64754579_7C97_38A2_41B2_9FE3C9422508",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 9.18,
   "yaw": -67.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.07
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790, this.camera_51C4D5CF_7C93_5BE0_41CE_3C03531A0EEE); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5208E1CF_7C91_5BE0_41BD_AD1868EBA0A2",
   "pitch": -9.07,
   "hfov": 9.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -67.89,
   "distance": 100
  }
 ],
 "id": "overlay_6B2F4C24_7C97_48A0_41D3_3BF5A0C49141",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "oggUrl": "media/audio_50F46045_7C9F_F8E0_41D5_1BC333636E32.ogg",
 "mp3Url": "media/audio_50F46045_7C9F_F8E0_41D5_1BC333636E32.mp3",
 "id": "audioresource_558076CD_7C9F_59E0_41C5_5D786908BE1A",
 "class": "AudioResource"
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.44,
   "yaw": 67.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.07
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1, this.camera_50E9150F_7C93_5860_41C0_7A37086D8495); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5200D1DF_7C91_5BE0_41DD_2315891031D7",
   "pitch": -17.07,
   "hfov": 13.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 67.2,
   "distance": 100
  }
 ],
 "id": "overlay_5EF66D37_7CB6_C8A0_41C2_128CA6847336",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.85,
   "yaw": 33.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.07
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991, this.camera_505E356F_7C93_58A0_41C4_19394698EF8B); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5233E1CF_7C91_5BE0_41D7_57BE3A26394B",
   "pitch": -13.07,
   "hfov": 6.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 33.35,
   "distance": 100
  }
 ],
 "id": "overlay_6E3F3C4B_7C91_C8E0_41B4_BD42469260C8",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.76,
   "yaw": -64.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.96
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E, this.camera_5048655F_7C93_58E0_41D7_D86DB7A4278E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520C21CF_7C91_5BE0_41DE_416E0E954D97",
   "pitch": -15.96,
   "hfov": 6.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -64.88,
   "distance": 100
  }
 ],
 "id": "overlay_696B3858_7C91_C8E1_41A3_A41C2361D7C0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.94,
   "yaw": 20.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.35
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_665B0106_7CB1_3860_41A2_3D53FD279040, this.camera_5142665F_7C93_58E0_41D7_CC94B1260BCD); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520221DF_7C91_5BE0_41B0_D4562E0EC1C0",
   "pitch": -9.35,
   "hfov": 6.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 20.91,
   "distance": 100
  }
 ],
 "id": "overlay_5E922F9F_7C91_C860_41B7_F3FACE81F53A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.94,
   "yaw": -63.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.22
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C, this.camera_5152C66F_7C93_58A0_41B7_001ACC71894D); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5202D1DF_7C91_5BE0_41B2_E3482A007393",
   "pitch": -9.22,
   "hfov": 6.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -63.87,
   "distance": 100
  }
 ],
 "id": "overlay_59FBBF3D_7C91_C8A0_41B8_52C5AE9E1C10",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.36,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.17
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_598F3060_7C93_78A0_41D5_FF301683C134, this.camera_517C6643_7C93_58E0_41D6_3695B6037CFF); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520321DF_7C91_5BE0_41A5_5E96218A5EAE",
   "pitch": -21.17,
   "hfov": 7.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 90,
   "distance": 100
  }
 ],
 "id": "overlay_564115DE_7C91_5BE0_41D0_B9E37A0CB670",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 25.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.6
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6, this.camera_5183757F_7C93_58A0_41DA_FDEB2BD2EB27); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520FC1CF_7C91_5BE0_41DB_D0EA68AF4D14",
   "pitch": -11.6,
   "hfov": 6.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 25.94,
   "distance": 100
  }
 ],
 "id": "overlay_6A15F487_7C93_586F_41D6_A665CB197CBB",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": -67.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.73
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6955B65A_7C91_38E1_41DE_F183C5A77963, this.camera_51B2057F_7C93_58A0_417D_D7E05102A0F2); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520821CF_7C91_5BE0_41D0_D01EB9299DC2",
   "pitch": -13.73,
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -67.27,
   "distance": 100
  }
 ],
 "id": "overlay_6593A65B_7C93_78E0_41DB_700AB8F17ACB",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.93,
   "yaw": 31.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.9
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C, this.camera_575644EF_7C93_59A0_41CE_82BED3C34AE5); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520941CF_7C91_5BE0_41B4_C32569EF22F0",
   "pitch": -9.9,
   "hfov": 6.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.59,
   "distance": 100
  }
 ],
 "id": "overlay_657DBE84_7CB1_C860_41DC_93197AFC0A8E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.91,
   "yaw": -66.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.78
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_613F5283_7CB7_5860_41D3_C7238A954990, this.camera_50A754EF_7C93_59A0_41D0_F3C3CEC867E4); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5209A1CF_7C91_5BE0_41DC_E3BCE7E48814",
   "pitch": -10.78,
   "hfov": 6.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -66.27,
   "distance": 100
  }
 ],
 "id": "overlay_6017B9B5_7CB1_CBA0_41DE_A29036604020",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.45,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.75
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_598F3060_7C93_78A0_41D5_FF301683C134, this.camera_565A246F_7C93_58A0_41DB_C87BE472BE54); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_521CB1DF_7C91_5BE0_41D0_16C42A527451",
   "pitch": -27.75,
   "hfov": 12.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90,
   "distance": 100
  }
 ],
 "id": "overlay_57AA0438_7C93_38A0_41DD_01BDFD9D91F2",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.02,
   "yaw": 71.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.87
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25, this.camera_5647746F_7C93_58A0_41DD_58D1F7DF7D97); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_521D21DF_7C91_5BE0_41C6_2D219936C1ED",
   "pitch": -30.87,
   "hfov": 12.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 71.97,
   "distance": 100
  }
 ],
 "id": "overlay_56031E1C_7C93_489E_41D5_3FCAFA3F27AA",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.91,
   "yaw": 25.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.56
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400, this.camera_502D952F_7C93_58A0_41C4_1C815470D588); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5231A1CF_7C91_5BE0_41B7_95B17B0FD512",
   "pitch": -10.56,
   "hfov": 6.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 25.56,
   "distance": 100
  }
 ],
 "id": "overlay_68A4BE4A_7C91_48E0_41B3_F8DDC4D661E4",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.77,
   "yaw": -71.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.58
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF, this.camera_5020553F_7C93_58A0_41D4_2BF1A6FF8670); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_523211CF_7C91_5BE0_41B8_B8F3BDD3FF35",
   "pitch": -15.58,
   "hfov": 6.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -71.16,
   "distance": 100
  }
 ],
 "id": "overlay_6ACF814F_7C91_58E0_41D7_C53538516AD3",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7,
   "yaw": 12.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.98
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A, this.camera_51DA35DF_7C93_5BE0_41C2_DFBDD92945C1); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6EC789EB_7C72_CBA0_41CF_91F7DE59BF13",
   "pitch": -4.98,
   "hfov": 7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 12.25,
   "distance": 100
  }
 ],
 "id": "overlay_73DC9E5B_7C73_48E7_41D4_616DE10A2A85",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.88,
   "yaw": -67.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.89
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86, this.camera_512A85EF_7C93_5BA0_4160_DD07BE0105C6); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6EC779EB_7C72_CBA0_41D0_6D5A2430E379",
   "pitch": -11.89,
   "hfov": 6.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -67.14,
   "distance": 100
  }
 ],
 "id": "overlay_6D55E3E9_7C73_3FA0_41AC_1AD55795C42C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.31,
   "yaw": -88.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.82
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1, this.camera_52A0067F_7C93_58A0_41BB_0C4D51D4B3AD); this.mainPlayList.set('selectedIndex', 18); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520B11DF_7C91_5BE0_41C6_D7F75C7C22E9",
   "pitch": -18.82,
   "hfov": 13.31,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -88.31,
   "distance": 100
  }
 ],
 "id": "overlay_67202D21_7CB1_48A0_41D8_610E61731890",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.66,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.79
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991, this.camera_52B0168F_7C93_5860_41D0_775AB8099797); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520B91DF_7C91_5BE0_41D0_F646A175854A",
   "pitch": -25.79,
   "hfov": 12.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 90,
   "distance": 100
  }
 ],
 "id": "overlay_610BE46F_7CB1_58A0_41C8_6FB60BD29D9C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 9.51,
   "yaw": 28.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.28
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1, this.camera_573BB4BF_7C93_59A0_41D3_1A8D71E2879A); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520691DF_7C91_5BE0_41C7_A941D259FB5C",
   "pitch": -21.28,
   "hfov": 9.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 28.68,
   "distance": 100
  }
 ],
 "id": "overlay_5F5A2F53_7CB7_48E0_41D2_0F7AD7FB5548",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 9.81,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.11
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_665B0106_7CB1_3860_41A2_3D53FD279040, this.camera_5725D4AF_7C93_59A0_41CC_68C011D6B8D9); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5206E1DF_7C91_5BE0_41C1_EE34DA126E3D",
   "pitch": -19.11,
   "hfov": 9.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90,
   "distance": 100
  }
 ],
 "id": "overlay_5C13278B_7CB7_D860_41D8_10639F9AB5A9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.77,
   "yaw": 43.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.71
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C, this.camera_57E2A49F_7C93_5860_41CB_3E9C30656B81); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_523071CF_7C91_5BE0_41D5_EEF81894FD59",
   "pitch": -11.71,
   "hfov": 13.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 43.08,
   "distance": 100
  }
 ],
 "id": "overlay_6D12E546_7C71_F8E1_41C5_B40CFAAED014",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.82,
   "yaw": -132.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.71
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746, this.camera_5792648F_7C93_5860_41CD_C8B9F873478B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_523081CF_7C91_5BE0_41D2_284A1702B61F",
   "pitch": -10.71,
   "hfov": 13.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -132.52,
   "distance": 100
  }
 ],
 "id": "overlay_6E8CB658_7C71_D8E1_41B6_8BAC76079608",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 79.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.02
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF, this.camera_513BD5FF_7C93_5BA0_41D4_D36549C9D541); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520C81CF_7C91_5BE0_41DC_37F4FB7B7C69",
   "pitch": -4.02,
   "hfov": 6.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 79.51,
   "distance": 100
  }
 ],
 "id": "overlay_6956CF53_7C6F_48E0_41B4_BE9BEDE258ED",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -29.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.64
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7, this.camera_5109360F_7C93_5860_41CA_366D9EA9632A); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520D11CF_7C91_5BE0_4183_DAF1EFFA2F2B",
   "pitch": -3.64,
   "hfov": 6.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -29.27,
   "distance": 100
  }
 ],
 "id": "overlay_6D879515_7C6F_5863_41A8_ADB7FEF7D3DD",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.84,
   "yaw": 24.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.3
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6F166094_7C71_5861_41D7_9B09F915A4E2, this.camera_5007253F_7C93_58A0_41B6_B2BFEFE4A13B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5237D1CF_7C91_5BE0_41D8_781661D46BE6",
   "pitch": -13.3,
   "hfov": 6.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 24.68,
   "distance": 100
  }
 ],
 "id": "overlay_6E75DC20_7C73_48A0_41CB_AD4CF2214897",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": -62.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.55
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D, this.camera_5014054F_7C93_58E0_41DD_46AFDFFC7157); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_523011CF_7C91_5BE0_41A7_4A9EE4B50579",
   "pitch": -14.55,
   "hfov": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -62.49,
   "distance": 100
  }
 ],
 "id": "overlay_6F184E1D_7C73_C860_416D_117C576E7268",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.87,
   "yaw": 51.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.17
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C, this.camera_5602043D_7C93_58A3_41CF_A92F3EE7FA6D); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520041DF_7C91_5BE0_41C8_0ABE0CDA574D",
   "pitch": -12.17,
   "hfov": 6.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 51.94,
   "distance": 100
  }
 ],
 "id": "overlay_5F5B3941_7C97_48E0_41D5_E63FED7C921F",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.93,
   "yaw": -30.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.78
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9, this.camera_56155447_7C93_58EF_41AA_B8472F68200F); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5200D1DF_7C91_5BE0_41D8_2D4385EE7766",
   "pitch": -9.78,
   "hfov": 6.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -30.34,
   "distance": 100
  }
 ],
 "id": "overlay_569E61DE_7C97_3BE1_41BF_F155FCC73826",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.35,
   "yaw": 84.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.31
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7, this.camera_577364DE_7C93_59E1_41D7_4058799A2F3F); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520771DF_7C91_5BE0_41C2_508144749DDD",
   "pitch": -18.31,
   "hfov": 13.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 84.03,
   "distance": 100
  }
 ],
 "id": "overlay_6398991A_7CB3_C860_41CB_86CA856ACE3A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.5,
   "yaw": -23.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.31
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_665A4515_7CB1_3863_41DA_1C66A5262B90, this.camera_577CC4DE_7C93_59E1_41C2_1400BD472B06); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5207D1DF_7C91_5BE0_41D4_D1F19D05C3FC",
   "pitch": -16.31,
   "hfov": 13.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -23.74,
   "distance": 100
  }
 ],
 "id": "overlay_61D11F7C_7CB3_48A0_41C9_F7073285CE43",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.14,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.83
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907, this.camera_574384EF_7C93_59A0_41D9_61AF8A159EB8); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520041DF_7C91_5BE0_4175_5D9CC581401F",
   "pitch": -20.83,
   "hfov": 13.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90,
   "distance": 100
  }
 ],
 "id": "overlay_601A83F4_7CB3_7FA0_41C3_734BA2309805",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.91,
   "yaw": 16.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.81
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF, this.camera_57F1F49F_7C93_5860_41DA_AFF54648AC2B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_523321CF_7C91_5BE0_41B7_EC9F87FC3536",
   "pitch": -10.81,
   "hfov": 6.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 16.39,
   "distance": 100
  }
 ],
 "id": "overlay_6F9523FC_7C97_3FA1_4184_EEC696A121A0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.55,
   "yaw": -87.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.36
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400, this.camera_57C634AF_7C93_59A0_4193_DDA5DDCAA937); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_523391CF_7C91_5BE0_41B2_AA4D3584C245",
   "pitch": -21.36,
   "hfov": 6.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -87.36,
   "distance": 100
  }
 ],
 "id": "overlay_69C1B915_7C97_C860_41C3_67FBE1C2D401",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.22,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.22
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A, this.camera_570894BF_7C93_59A0_41D7_546BE9C3486E); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5203D1DF_7C91_5BE0_419C_325EFDD921B6",
   "pitch": -21.22,
   "hfov": 7.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 90,
   "distance": 100
  }
 ],
 "id": "overlay_57B5EF37_7C91_48AF_41CF_529E6FD5F96A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.55,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.22
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2, this.camera_5719D4CF_7C93_59E0_41B7_97659FC0E24E); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_521C51DF_7C91_5BE0_41D9_3BD1FE014A1C",
   "pitch": -21.22,
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90,
   "distance": 100
  }
 ],
 "id": "overlay_57FD89E4_7C91_4BA0_41A7_30595BF101B8",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.45,
   "yaw": 59.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.92
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_665A4515_7CB1_3863_41DA_1C66A5262B90, this.camera_50FE551F_7C93_5860_41D4_4F21FD2C8D5F); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520531DF_7C91_5BE0_41CA_EDD2D43104B5",
   "pitch": -16.92,
   "hfov": 13.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 59.91,
   "distance": 100
  }
 ],
 "id": "overlay_63DBE888_7CB1_C861_41D4_C643B548B57E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.72,
   "yaw": -28.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.64
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7, this.camera_50CE851F_7C93_5860_41D0_4E3D0BF1B99F); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5205A1DF_7C91_5BE0_41D2_05CF9ABE1896",
   "pitch": -12.64,
   "hfov": 13.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -28.27,
   "distance": 100
  }
 ],
 "id": "overlay_63AE17ED_7CB1_C7A0_41D6_138AAC14F6EB",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.86,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.63
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D, this.camera_50DD152F_7C93_58A0_41C4_8BFBB99E1651); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520601DF_7C91_5BE0_41D8_85C92D970D19",
   "pitch": -9.63,
   "hfov": 13.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90,
   "distance": 100
  }
 ],
 "id": "overlay_63810F6F_7CB1_C8BF_41DC_474DE19A59FC",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 18.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.41
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6F166094_7C71_5861_41D7_9B09F915A4E2, this.camera_576FE4CF_7C93_59E0_41D0_6A9317ABC29F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_523111CF_7C91_5BE0_41C7_F21F48CAD7CE",
   "pitch": -6.41,
   "hfov": 6.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 18.27,
   "distance": 100
  }
 ],
 "id": "overlay_684B3DE8_7C72_CBA0_41C0_1253E7B5F94A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": -68.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.69
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_523151CF_7C91_5BE0_41D1_653EFC484BED",
   "pitch": -13.69,
   "hfov": 6.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -68.27,
   "distance": 100
  }
 ],
 "id": "overlay_6FE3099A_7C71_4860_41A2_543E1D7F305A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.96,
   "yaw": 25.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.08
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D, this.camera_50B7A4FF_7C93_59A0_41DE_1BF2F892D4F7); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520411DF_7C91_5BE0_41D3_15554F1D95EA",
   "pitch": -8.08,
   "hfov": 6.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 25.56,
   "distance": 100
  }
 ],
 "id": "overlay_58232E8B_7CAF_4867_41D7_4C00610424E6",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7,
   "yaw": 22.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.74
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790, this.camera_578EF47F_7C93_58A0_41C1_8CD14C5DC084); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520F11CF_7C91_5BE0_41B8_1C1D3042A959",
   "pitch": -5.74,
   "hfov": 7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 22.55,
   "distance": 100
  }
 ],
 "id": "overlay_6BDB433D_7C92_D8A3_41C9_4D786306CBE2",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.85,
   "yaw": -65.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.03
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2, this.camera_579D748F_7C93_5860_41D6_8F9DC4CB3492); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520F71CF_7C91_5BE0_41C7_25D40A2EE1AB",
   "pitch": -13.03,
   "hfov": 6.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -65.01,
   "distance": 100
  }
 ],
 "id": "overlay_6BAA9986_7C92_C860_41DD_73D77B138DD1",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.96,
   "yaw": 25.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.11
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E, this.camera_56737460_7C93_58A0_41CB_799571F3C4ED); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_523261CF_7C91_5BE0_41CE_5DBFED129A29",
   "pitch": -8.11,
   "hfov": 6.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 25.31,
   "distance": 100
  }
 ],
 "id": "overlay_6AB5027B_7C91_38A7_41C8_412EAB9464A4",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.93,
   "yaw": -72.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.86
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768, this.camera_5679D460_7C93_58A0_41DC_E64EE203C28F); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5232D1CF_7C91_5BE0_41DD_F24653D16D54",
   "pitch": -9.86,
   "hfov": 6.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -72.16,
   "distance": 100
  }
 ],
 "id": "overlay_6FFD8E06_7C91_C860_41DD_BD5A003E7DF3",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.79,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.36
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_665B0106_7CB1_3860_41A2_3D53FD279040, this.camera_51AF156F_7C93_58A0_41BA_F6FB0A012E17); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520461DF_7C91_5BE0_41D5_B9EB6CA5B469",
   "pitch": -31.36,
   "hfov": 11.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 90,
   "distance": 100
  }
 ],
 "id": "overlay_587D8F84_7CB3_4860_419C_5CC87A036682",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.59,
   "yaw": -62.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.96
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3, this.camera_51BDD57F_7C93_58A0_41D7_A4AE64E56381); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5204D1DF_7C91_5BE0_41D3_C8EBFE1BD249",
   "pitch": -14.96,
   "hfov": 13.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -62.43,
   "distance": 100
  }
 ],
 "id": "overlay_5EF07DE3_7CB3_4BA7_41DE_3B8FA64EB5AC",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7,
   "yaw": 22.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.74
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF, this.camera_508A64FF_7C93_59A0_41C8_3280CFBC13E3); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520E01CF_7C91_5BE0_41D4_B7029D1667BF",
   "pitch": -5.74,
   "hfov": 7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 22.55,
   "distance": 100
  }
 ],
 "id": "overlay_60D6056D_7CB1_58A0_41D5_551DFA4089F3",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.97,
   "yaw": -66.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.66
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67483509_7CB3_3860_41C8_021A2EE0E776, this.camera_509AB50F_7C93_5860_41D5_4680CFE5D83D); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520E91CF_7C91_5BE0_41D0_B01CF23DE072",
   "pitch": -7.66,
   "hfov": 6.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -66.14,
   "distance": 100
  }
 ],
 "id": "overlay_65D94235_7CB1_D8A0_41D4_BCE8A922EC6E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.58,
   "yaw": 31.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.06
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67483509_7CB3_3860_41C8_021A2EE0E776, this.camera_5031753F_7C93_58A0_41B9_B63D5C08A995); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520A21CF_7C91_5BE0_41CA_84181CECD115",
   "pitch": -15.06,
   "hfov": 13.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.78,
   "distance": 100
  }
 ],
 "id": "overlay_602E624E_7CB6_D8E1_41DD_23BB25905D2C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.81,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.35
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520A81CF_7C91_5BE0_41D5_FCACD78944DB",
   "pitch": -24.35,
   "hfov": 12.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90,
   "distance": 100
  }
 ],
 "id": "overlay_66F5DDA3_7CB6_CBA7_4193_90F610115B52",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.01,
   "yaw": 25.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.57
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2, this.camera_516FF62F_7C93_58A0_41DD_CCA11D76E62D); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520EE1CF_7C91_5BE0_41C6_A71107538BF9",
   "pitch": -4.57,
   "hfov": 7.01,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 25.69,
   "distance": 100
  }
 ],
 "id": "overlay_67CAED05_7CAF_C863_41D1_FD12987E2FE8",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.84,
   "yaw": -62.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.37
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C, this.camera_5119861F_7C93_5860_41B2_CF2DB91BE437); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520F71CF_7C91_5BE0_41D4_444FB39E4362",
   "pitch": -13.37,
   "hfov": 6.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -62.74,
   "distance": 100
  }
 ],
 "id": "overlay_66013981_7CAF_4860_41DE_F046D084C97D",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.16,
   "yaw": 31.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.51
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768, this.camera_57D494AF_7C93_59A0_41CC_A10290DD9AB9); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520D61CF_7C91_5BE0_41D9_6C6AD3A6D3DF",
   "pitch": -6.51,
   "hfov": 4.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.17,
   "distance": 100
  }
 ],
 "id": "overlay_6B0F2001_7C91_7863_41D7_9F4BE12718F7",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.12,
   "yaw": -74.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.41
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520DD1CF_7C91_5BE0_41D4_28FF86F4F82B",
   "pitch": -10.41,
   "hfov": 4.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -74.59,
   "distance": 100
  }
 ],
 "id": "overlay_64C105D8_7C91_5BE0_41CB_25957A405FAE",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 33.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.86
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB, this.camera_514CC64F_7C93_58E0_41C2_D11BF6E570F9); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520131DF_7C91_5BE0_4199_88A267E7944E",
   "pitch": -6.86,
   "hfov": 6.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 33.86,
   "distance": 100
  }
 ],
 "id": "overlay_55D7A35E_7C91_D8E0_41A2_9E07C4895AFD",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -55.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.54
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520181DF_7C91_5BE0_41C8_3A74FD39EDBA",
   "pitch": -11.54,
   "hfov": 6.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -55.96,
   "distance": 100
  }
 ],
 "id": "overlay_55431A96_7C91_C860_41C6_619F336B1536",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.18,
   "yaw": -74.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.62
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D, this.camera_57B9947F_7C93_58A0_41B6_369F774F45AD); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_523641CF_7C91_5BE0_41DA_AFC5613BECA7",
   "pitch": -3.62,
   "hfov": 4.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -74.47,
   "distance": 100
  }
 ],
 "id": "overlay_687D611A_7C71_3860_41C1_F2F8DAEB0D88",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 4.14,
   "yaw": 27.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.14
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25, this.camera_57ABC46F_7C93_58A0_41D7_BD1E8D8FC160); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_523681CF_7C91_5BE0_41D8_F99076855ED7",
   "pitch": -8.14,
   "hfov": 4.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 27.77,
   "distance": 100
  }
 ],
 "id": "overlay_6CEBF8CC_7C71_49E1_41B5_293ED472D511",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.98,
   "yaw": 25.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.63
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6955B65A_7C91_38E1_41DE_F183C5A77963, this.camera_5666D458_7C93_58E0_41BB_570259437ED1); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520FF1CF_7C91_5BE0_41B2_27A3FB5689E5",
   "pitch": -6.63,
   "hfov": 6.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 25.31,
   "distance": 100
  }
 ],
 "id": "overlay_66FDB229_7C91_78A0_41D4_0623E27BC2D0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.99,
   "yaw": -65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.38
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF, this.camera_566D4451_7C93_58E0_41BB_04F9CE5FDA49); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_520EA1CF_7C91_5BE0_41DB_968FF363E2DE",
   "pitch": -6.38,
   "hfov": 6.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -65,
   "distance": 100
  }
 ],
 "id": "overlay_66D6E7A6_7C91_47A0_41CE_20DE8BFCC823",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_523701CF_7C91_5BE0_41BE_0A337E1277D2",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6D07494E_7C77_48E0_41D2_1B48BDA71D9D_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_523771CF_7C91_5BE0_41DD_734C18CBB05F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520151DF_7C91_5BE0_41C2_1DFB2CD1AD35",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5DCC79B7_7C93_CBA0_41D3_66CA59C1F98C_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5201C1DF_7C91_5BE0_41D5_7B25FDB03E80",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520891CF_7C91_5BE0_41D2_8771C0080804",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6A9A2F73_7C91_48A0_41CE_55F95787B9F6_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5208E1CF_7C91_5BE0_41BD_AD1868EBA0A2",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_66580D77_7CB1_C8A0_41DE_12938A1D7907_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5200D1DF_7C91_5BE0_41DD_2315891031D7",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5233E1CF_7C91_5BE0_41D7_57BE3A26394B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6FB0549E_7C77_7860_41C1_2C6FC396BEFF_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520C21CF_7C91_5BE0_41DE_416E0E954D97",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520221DF_7C91_5BE0_41B0_D4562E0EC1C0",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5DCDBE8D_7C93_C863_41BC_2D191A8C09A7_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5202D1DF_7C91_5BE0_41B2_E3482A007393",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5521AB5C_7C93_48E1_41CE_F7D91D3F88D2_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520321DF_7C91_5BE0_41A5_5E96218A5EAE",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520FC1CF_7C91_5BE0_41DB_D0EA68AF4D14",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6A993AC5_7C91_49E0_41D5_20E85C08F790_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520821CF_7C91_5BE0_41D0_D01EB9299DC2",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520941CF_7C91_5BE0_41B4_C32569EF22F0",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_67483509_7CB3_3860_41C8_021A2EE0E776_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5209A1CF_7C91_5BE0_41DC_E3BCE7E48814",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_521CB1DF_7C91_5BE0_41D0_16C42A527451",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_598D25F9_7C93_7BA3_41C2_A9A4F4FC319A_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_521D21DF_7C91_5BE0_41C6_2D219936C1ED",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5231A1CF_7C91_5BE0_41B7_95B17B0FD512",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6FBD08A4_7C77_49A0_41BF_18E74ED42768_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_523211CF_7C91_5BE0_41B8_B8F3BDD3FF35",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_6EC789EB_7C72_CBA0_41CF_91F7DE59BF13",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_71BF38F4_7C72_C9A1_41D9_0C0C65F8DD25_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_6EC779EB_7C72_CBA0_41D0_6D5A2430E379",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520B11DF_7C91_5BE0_41C6_D7F75C7C22E9",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6076CF0D_7CB3_4863_41CA_F5C5C23BF6F7_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520B91DF_7C91_5BE0_41D0_F646A175854A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520691DF_7C91_5BE0_41C7_A941D259FB5C",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_665A4515_7CB1_3863_41DA_1C66A5262B90_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5206E1DF_7C91_5BE0_41C1_EE34DA126E3D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_523071CF_7C91_5BE0_41D5_EEF81894FD59",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6F166094_7C71_5861_41D7_9B09F915A4E2_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_523081CF_7C91_5BE0_41D2_284A1702B61F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520C81CF_7C91_5BE0_41DC_37F4FB7B7C69",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6872E8BD_7C77_49A0_41C9_846F0BECD991_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520D11CF_7C91_5BE0_4183_DAF1EFFA2F2B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5237D1CF_7C91_5BE0_41D8_781661D46BE6",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6EAAD186_7C71_5861_41D6_9E05671F3A2C_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_523011CF_7C91_5BE0_41A7_4A9EE4B50579",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520041DF_7C91_5BE0_41C8_0ABE0CDA574D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_5DCE3506_7C93_F860_41D5_AA4616449EFB_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5200D1DF_7C91_5BE0_41D8_2D4385EE7766",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520771DF_7C91_5BE0_41C2_508144749DDD",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5207D1DF_7C91_5BE0_41D4_D1F19D05C3FC",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_664CB95C_7CB1_C8E1_41D0_85400BF54AF1_1_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520041DF_7C91_5BE0_4175_5D9CC581401F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_523321CF_7C91_5BE0_41B7_EC9F87FC3536",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6FB2609D_7C77_7863_41C1_E0BF9A280A5E_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_523391CF_7C91_5BE0_41B2_AA4D3584C245",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5203D1DF_7C91_5BE0_419C_325EFDD921B6",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_598F3060_7C93_78A0_41D5_FF301683C134_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_521C51DF_7C91_5BE0_41D9_3BD1FE014A1C",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520531DF_7C91_5BE0_41CA_EDD2D43104B5",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5205A1DF_7C91_5BE0_41D2_05CF9ABE1896",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_665B0106_7CB1_3860_41A2_3D53FD279040_1_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520601DF_7C91_5BE0_41D8_85C92D970D19",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_523111CF_7C91_5BE0_41C7_F21F48CAD7CE",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_695ADF51_7C76_C8E3_41C2_83069EFC4746_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_523151CF_7C91_5BE0_41D1_653EFC484BED",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_62BDD426_7CB1_58A1_41DB_C811FCB240E3_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520411DF_7C91_5BE0_41D3_15554F1D95EA",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520F11CF_7C91_5BE0_41B8_1C1D3042A959",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6955B65A_7C91_38E1_41DE_F183C5A77963_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520F71CF_7C91_5BE0_41C7_25D40A2EE1AB",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_523261CF_7C91_5BE0_41CE_5DBFED129A29",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6875ACC3_7C77_49E0_41D7_83D487DB2400_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5232D1CF_7C91_5BE0_41DD_F24653D16D54",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520461DF_7C91_5BE0_41D5_B9EB6CA5B469",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_665A88CF_7CB1_49E0_41D9_49AD7F317E7D_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5204D1DF_7C91_5BE0_41D3_C8EBFE1BD249",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520E01CF_7C91_5BE0_41D4_B7029D1667BF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_688D3977_7C9E_C8AF_41DA_AF4570E1363C_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520E91CF_7C91_5BE0_41D0_B01CF23DE072",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520A21CF_7C91_5BE0_41CA_84181CECD115",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_613F5283_7CB7_5860_41D3_C7238A954990_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520A81CF_7C91_5BE0_41D5_FCACD78944DB",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520EE1CF_7C91_5BE0_41C6_A71107538BF9",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6A344DDA_7C9E_CBE0_41D9_0DDB4FEF23CF_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520F71CF_7C91_5BE0_41D4_444FB39E4362",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520D61CF_7C91_5BE0_41D9_6C6AD3A6D3DF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6AC37E1E_7C9F_C861_41C5_C34C834405EF_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520DD1CF_7C91_5BE0_41D4_28FF86F4F82B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520131DF_7C91_5BE0_4199_88A267E7944E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_58A39048_7C93_F8E0_41B5_8166FBF3D9F9_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520181DF_7C91_5BE0_41C8_3A74FD39EDBA",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_523641CF_7C91_5BE0_41DA_AFC5613BECA7",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_73C464A2_7C73_59A0_41CC_D596FD8EAE86_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_523681CF_7C91_5BE0_41D8_F99076855ED7",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520FF1CF_7C91_5BE0_41B2_27A3FB5689E5",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6A882241_7C91_38E0_41B8_3B4CA86664A2_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_520EA1CF_7C91_5BE0_41DB_968FF363E2DE",
 "rowCount": 3,
 "frameCount": 9
}],
 "children": [
  "this.MainViewer"
 ],
 "scrollBarVisible": "rollOver",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "start": "this.init()",
 "minHeight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "contentOpaque": false,
 "scripts": {
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } }
 },
 "defaultVRPointer": "laser",
 "downloadEnabled": false,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "gap": 10,
 "class": "Player",
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "shadow": false,
 "overflow": "visible",
 "horizontalAlign": "left",
 "desktopMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "data": {
  "name": "Player3393"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
