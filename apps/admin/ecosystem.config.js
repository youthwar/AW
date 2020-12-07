module.exports = {
  apps: [
    {
      name: 'AW_ADMIN',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};