module.exports = {
  apps : [{
    name: "itzmattportfolio",
    script: "npm",
    args: "start -p 4783",
    cwd: "/home/itzmattportfolio/src",
    watch: true,
    env: {
      NODE_ENV: "production",
    }
  }]
};