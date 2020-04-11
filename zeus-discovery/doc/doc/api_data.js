define({ "api": [
  {
    "type": "POST",
    "url": "/zeus/auditlog/getAuditLogs",
    "title": "getAuditLogs",
    "name": "AuditLog",
    "group": "AuditLog",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Info-Zeus",
            "description": "<p>EXAMPLE: {&quot;netType&quot;: 1, &quot;appType&quot;: 2, &quot;clientType&quot;: 2, &quot;deviceName&quot;:&quot;iphone 7&quot;, &quot;osVersion&quot;:&quot;ios 13.1&quot;, &quot;appVersion&quot;:&quot;18.8.1&quot;, &quot;imei&quot;:&quot;&quot;,&quot;mac&quot;:&quot;&quot;, &quot;idfa&quot;:&quot;A9E9752D-66B2-4E17-9C3A-FC1CC57D8F58&quot;}</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ssnToken",
            "description": "<p>用户授权临时票据code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example 1:",
          "content": " {\n\t    \"type\": 1,\n\t    \"name\": \"17368695025\",\n\t    \"password\": \"123dd55\"\n\t}",
          "type": "json"
        },
        {
          "title": "Request-Example 2:",
          "content": " {\n\t    \"type\": 2,\n\t    \"phone\": \"17368695025\",\n\t    \"validation\": {\n\t        \"type\": 1,\n\t        \"sessionId\": \"23j2l3kl232oi3ioidjfakee\",\n\t        \"userInput\": \"384797\"\n\t    }\n\t}",
          "type": "json"
        },
        {
          "title": "Request-Example 3:",
          "content": " {\n\t    \"type\": 3,\n\t    \"ssnToken\": \"asdf8292022k22222j33hh\",\n\t    \"ssnType\": 1\n\t}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST\nhttps://api.qingshuxuetang.com/v6_3/account/login\n-H 'Accept: application/json'\n-H 'Authorization-ZS: eyJraWQiOiIwIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJuaWNrIjoi5p2O54Oo6Z2ZIiwiYXBwVHlwZSI6MiwibmFtZSI6ImRlbW9fbGl5ZWppbmdfc3R1ZGVudCIsImV4cCI6MTU0NTAxMTE5NywianRpIjoiMTAwIn0.eHuSRgId6Qk5J7q699lWGz4mwTCNZhDpaS6bYvWU-uE'\n-H 'Content-Type: application/json'\n-H 'User-Agent-QS: ZEUS'\n-H 'Device-Info-QS: {\"netType\": 1, \"appType\": 2, \"clientType\": 2, \"deviceName\":\"iphone 7\", \"osVersion\":\"ios 13.1\", \"appVersion\":\"18.8.1\", \"imei\":\"\",\"mac\":\"\", \"idfa\":\"A9E9752D-66B2-4E17-9C3A-FC1CC57D8F58\"}'\n// netType 网络类型 0:没有网络 1:wifi 2:流量\n// appType app类型 1:QSXT 2:QSJS 3:COLLEGE\n// clientType 客户端类型 1:IOS 2:Android 3:pcweb 4:msite",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>authToken</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"hr\": 0,\n\t    \"message\": \"成功\",\n\t    \"data\": \"eyJraWQiOiIwIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJuaWNrIjoi5Y-25a2QMStwcGUiLCJhcHBUeXBlIjoyLCJuYW1lIjoicHhfeWV6aSIsImV4cCI6MTUzMzQzMjQwMCwianRpIjoiMTIwMTcxNSJ9.N-C7Gz_RCNyXEgdQZ1r6uDzPHSJwLI0qpjxBqVr4rug\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./api/client/auditlog.js",
    "groupTitle": "AuditLog"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "D:\\zeus-code\\doc\\doc\\main.js",
    "groupTitle": "D:\\zeus-code\\doc\\doc\\main.js",
    "name": ""
  },
  {
    "type": "POST",
    "url": "/zeus-server/service/queryService",
    "title": "queryService",
    "name": "ServiceDiscovery",
    "group": "ServiceDiscovery",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST\nhttps://api.zeus.com/zeus-server/service/queryService\n-H 'Accept: application/json'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n       {\n               \"id\":1,\"serviceName\":\"domain\",\"serviceAddr\":\"127.0.0.1\",\n               \"port\":8888,\"living\":1,\"comment\":\"管理服务\"\n       },{\n               \"id\":2,\"serviceName\":\"RpcDemo\",\"serviceAddr\":\"127.0.0.1\",\n               \"port\":8881,\"living\":1,\"comment\":\"远程服务\"\n       }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./api/server/serviceSearch.js",
    "groupTitle": "ServiceDiscovery"
  },
  {
    "type": "POST",
    "url": "/zeus/service/ping",
    "title": "ping",
    "name": "Service",
    "group": "Service",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Info-Zeus",
            "description": "<p>EXAMPLE: {&quot;netType&quot;: 1, &quot;appType&quot;: 2, &quot;clientType&quot;: 2, &quot;deviceName&quot;:&quot;iphone 7&quot;, &quot;osVersion&quot;:&quot;ios 13.1&quot;, &quot;appVersion&quot;:&quot;18.8.1&quot;, &quot;imei&quot;:&quot;&quot;,&quot;mac&quot;:&quot;&quot;, &quot;idfa&quot;:&quot;A9E9752D-66B2-4E17-9C3A-FC1CC57D8F58&quot;}</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST\nhttps://api.zeus.com/zeus/service/ping\n-H 'Accept: application/json'\n-H 'Authorization-ZS: eyJraWQiOiIwIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJuaWNrIjoi5p2O54Oo6Z2ZIiwiYXBwVHlwZSI6MiwibmFtZSI6ImRlbW9fbGl5ZWppbmdfc3R1ZGVudCIsImV4cCI6MTU0NTAxMTE5NywianRpIjoiMTAwIn0.eHuSRgId6Qk5J7q699lWGz4mwTCNZhDpaS6bYvWU-uE'\n-H 'Content-Type: application/json'\n-H 'User-Agent-QS: ZEUS'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"code\":200,\n    \"message\":\"服务存活\",\n    \"data\":{\n        \"serviceId\":null,\n        \"serviceName\":\"domain\",\n        \"serviceAddr\":\"47.35.124.54\",\n        \"living\":1,\n        \"comment\":\"订单服务\"\n        }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/client/serviceAlive.js",
    "groupTitle": "Service"
  },
  {
    "type": "POST",
    "url": "/oauth/token",
    "title": "getToken",
    "name": "token",
    "group": "token",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST\n--user user:password\n-D \"username=user1&password=123456&grant_type=password&scope=read write\"\nhttps://api.zeus.com/oauth/token\n-H 'Accept: application/x-www-form-urlencoded'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "description": "<p>token类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>权限</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"access_token\": \"620e5f04-5ae1-4bca-99f2-a16c4614fade\",\n    \"token_type\": \"bearer\",\n    \"refresh_token\": \"171b085c-0383-4308-8dd4-19117aeb73d0\",\n    \"expires_in\": 3599,\n    \"scope\": \"read write\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " {\n    \"timestamp\": \"2020-04-08T09:48:29.751+0000\",\n    \"status\": 401,\n    \"error\": \"Unauthorized\",\n    \"message\": \"Unauthorized\",\n    \"path\": \"/oauth/token\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/server/authserver.js",
    "groupTitle": "token"
  }
] });
