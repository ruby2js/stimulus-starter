module.exports = {
  "plugins": [
    ["@rubys/snowpack-plugin-require-context", {
      input: ['application.js']
    }],

    ["@ruby2js/snowpack-plugin", { 
      eslevel: 2022, 
      autoexports: "default", 
      filters: ["functions", "camelCase", "esm", "stimulus"]
    }]
  ]
}
