module.exports = [
	{
    "type": "heading",
    "defaultValue": "Quick Auth",
		"size": 1
  },
  {
    "type": "heading",
    "defaultValue": "New Key"
  },
  {
    "type": "section",
    "items": [
      {
        "type": "input",
        "messageKey": "label",
        "defaultValue": "",
        "label": "Name",
		  "attributes": {
			  "placeholder": "e.g. Github, Google"
		  }
      },
      {
        "type": "input",
        "messageKey": "secret",
        "label": "Key",
        "defaultValue": ""
      }
    ]
  },
  {
    "type": "heading",
    "defaultValue": "Colors"
  },
  {
    "type": "section",
    "items": [
      {
        "type": "color",
        "messageKey": "basalt_fg_color",
        "defaultValue": "0x000000",
        "label": "Foreground Color"
      },
      {
        "type": "color",
        "messageKey": "basalt_bg_color",
        "label": "Background Color",
        "defaultValue": "0x00AAFF"
      }
    ]
  },
  {
    "type": "heading",
    "defaultValue": "Options"
  },
	{
  "type": "select",
  "messageKey": "idle_timeout",
  "defaultValue": "300",
  "label": "Idle Timeout",
  "options": [
    { 
      "label": "Disabled", 
      "value": "0" 
    },
    { 
      "label": "1 Minute",
      "value": "60" 
    },
    { 
      "label": "2 Minutes",
      "value": "120" 
    },
    { 
      "label": "5 Minutes",
      "value": "300" 
    },
    { 
      "label": "10 Minutes",
      "value": "600" 
    }
  ]
},
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];