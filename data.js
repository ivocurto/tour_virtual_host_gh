var APP_DATA = {
  "scenes": [
    {
      "id": "0-frente-a-la-calle",
      "name": "Frente a la calle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -3.010640072238875,
        "pitch": 0.0600724969211317,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.9293914703584445,
          "pitch": 0.08868710381014822,
          "rotation": 0,
          "target": "1-entrada---exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrada---exterior",
      "name": "Entrada - Exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 2.741817182976317,
        "pitch": 0.13627847872139753,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.532882841782108,
          "pitch": 0.45417042606588787,
          "rotation": 0,
          "target": "2-entrada---interior"
        },
        {
          "yaw": -0.2195836035622314,
          "pitch": 0.41696829252621903,
          "rotation": 0,
          "target": "0-frente-a-la-calle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrada---interior",
      "name": "Entrada - Interior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -1.2295258291392237,
        "pitch": 0.13810969816031005,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.0411383659595543,
          "pitch": 0.3415177252718351,
          "rotation": 5.497787143782138,
          "target": "3-comedor"
        },
        {
          "yaw": 1.9337659411544958,
          "pitch": 0.8260237366679455,
          "rotation": 0,
          "target": "1-entrada---exterior"
        },
        {
          "yaw": 2.9981397339995706,
          "pitch": 0.5228879502669344,
          "rotation": 0.7853981633974483,
          "target": "8-pasillo"
        },
        {
          "yaw": -1.8639281338030678,
          "pitch": 0.5253320782357243,
          "rotation": 0,
          "target": "7-comedor-2"
        },
        {
          "yaw": -1.4375386569443531,
          "pitch": 0.41319225720481967,
          "rotation": 5.497787143782138,
          "target": "11-escaleras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-comedor",
      "name": "Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -0.4168560360184337,
        "pitch": 0.23633197427106722,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.326164841410078,
          "pitch": 0.2871660247422927,
          "rotation": 0,
          "target": "4-patio-1"
        },
        {
          "yaw": 2.218451289517529,
          "pitch": 0.36885381879896784,
          "rotation": 0,
          "target": "2-entrada---interior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-patio-1",
      "name": "Patio 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -0.07598053083307477,
        "pitch": 0.2177628013390862,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.28503282478997605,
          "pitch": 0.23337797956163442,
          "rotation": 0,
          "target": "5-patio-2"
        },
        {
          "yaw": -2.9287296283705224,
          "pitch": 0.635169057173318,
          "rotation": 0,
          "target": "3-comedor"
        },
        {
          "yaw": -1.677113449224855,
          "pitch": 0.37563653218757054,
          "rotation": 4.71238898038469,
          "target": "7-comedor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-patio-2",
      "name": "Patio 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 1.4603308654233054,
        "pitch": 0.12264801454728946,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.945119922837744,
          "pitch": 0.22360165036614887,
          "rotation": 0,
          "target": "6-patio-3"
        },
        {
          "yaw": -2.9238491775613653,
          "pitch": 0.2419469379598187,
          "rotation": 0,
          "target": "4-patio-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-patio-3",
      "name": "Patio 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.5894938596021717,
        "pitch": 0.32539269165609497,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.1942509410105604,
          "pitch": 0.35442057065354327,
          "rotation": 0,
          "target": "5-patio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-comedor-2",
      "name": "Comedor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -1.560635199003439,
        "pitch": 0.28519895630791225,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.290546810424713,
          "pitch": 0.4373789373447856,
          "rotation": 6.283185307179586,
          "target": "4-patio-1"
        },
        {
          "yaw": -1.6360223361836859,
          "pitch": 0.4032023866643648,
          "rotation": 0,
          "target": "8-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-pasillo",
      "name": "Pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -0.04037628718337416,
        "pitch": 0.416501228721863,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.6102935896867816,
          "pitch": 0.6202848327384665,
          "rotation": 0,
          "target": "7-comedor-2"
        },
        {
          "yaw": 0.08658302138242746,
          "pitch": 0.677234226555175,
          "rotation": 0,
          "target": "9-habitacin-1"
        },
        {
          "yaw": -0.6735293012196042,
          "pitch": 0.6900462633934659,
          "rotation": 0,
          "target": "2-entrada---interior"
        },
        {
          "yaw": 2.6406518984343634,
          "pitch": 0.7915937301094012,
          "rotation": 0,
          "target": "10-habitacin-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-habitacin-1",
      "name": "Habitación 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.8422225300845838,
        "pitch": 0.40271761556049057,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -3.079762052179074,
          "pitch": 0.4714900857045272,
          "rotation": 6.283185307179586,
          "target": "8-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-habitacin-2",
      "name": "Habitación 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.05342844648963663,
        "pitch": 0.155187283712916,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.7113671793298586,
          "pitch": 0.5616490052148535,
          "rotation": 0,
          "target": "8-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-escaleras",
      "name": "Escaleras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 2.442373334120144,
        "pitch": -0.09874634843843566,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.8008480237681432,
          "pitch": 0.5723919084393145,
          "rotation": 0,
          "target": "2-entrada---interior"
        },
        {
          "yaw": 3.0150321520472936,
          "pitch": 0.6443811671854753,
          "rotation": 4.71238898038469,
          "target": "3-comedor"
        },
        {
          "yaw": 1.8771619254360754,
          "pitch": -0.32205295325319483,
          "rotation": 0,
          "target": "12-pasillo-superior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-pasillo-superior",
      "name": "Pasillo superior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -1.44605087481089,
        "pitch": 0.4062297679685898,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.11661576205120028,
          "pitch": 0.8327412895793493,
          "rotation": 0,
          "target": "11-escaleras"
        },
        {
          "yaw": -1.729336557310086,
          "pitch": 0.5327810113840243,
          "rotation": 0,
          "target": "13-pasillo-bao"
        },
        {
          "yaw": 1.5464321709715207,
          "pitch": 0.535661019171739,
          "rotation": 0,
          "target": "15-habitacin-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-pasillo-bao",
      "name": "Pasillo baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.0890487674511462,
        "pitch": 0.5531675758153813,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.6789350211294476,
          "pitch": 0.6127241818883569,
          "rotation": 0,
          "target": "13-pasillo-bao"
        },
        {
          "yaw": 0.11274389973365295,
          "pitch": 1.0201992780323845,
          "rotation": 0,
          "target": "14-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 2.9756551351195784,
        "pitch": 0.4190859347106741,
        "fov": 1.325599857056214
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "15-habitacin-3",
      "name": "Habitación 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -3.055000491278708,
        "pitch": 0.24510652871674488,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.5634794127902509,
          "pitch": 0.3770092474002986,
          "rotation": 0,
          "target": "13-pasillo-bao"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Adrogué House - Nother - Residencia para la tercera edad",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
