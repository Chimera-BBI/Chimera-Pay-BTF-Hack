docker run -e TZ=UTC+5:30 -d --restart=always  -p 0.0.0.0:5000:3000 --name private-chimera-pay chimera_app "python3" "app.py"
