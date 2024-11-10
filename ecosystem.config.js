module.exports = {
  apps : [{
    name: "itzmattportfolio",
    script: "node_modules/next/dist/bin/next",
    args: "start -p 8080",
    cwd: "/home/itzmattportfolio/src",
    env: {
      NODE_ENV: "production",
    }
  }]
};