module.exports = {
  apps: [
    {
      name: "flask-app",
      script: "venv/bin/python",
      args: "app.py",
      cwd: ".",
      env: {
        FLASK_ENV: "production"
      }
    }
  ]
}