module.exports = {
  apps : [{
    name: "itzmattportfolio",
    script: "npm",
    args: "start",
    cwd: "/home/itzmattportfolio/src",
    watch: true,
    env: {
      NODE_ENV: "production",
    }
  }]
};