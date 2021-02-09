module.exports = {
  mount: {
    public: {url: "/", static: true, resolve: false},
    src: "/"
  },

  plugins: [
    ["@rubys/snowpack-plugin-require-context", {
      input: ['application.js']
    }],

    ["@ruby2js/snowpack-plugin", { 
      eslevel: 2022, 
      autoexports: "default", 
      filters: ["stimulus", "esm", "functions"]
    }]
  ]
}
