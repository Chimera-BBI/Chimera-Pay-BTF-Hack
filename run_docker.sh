docker stop $(docker ps -f name=private-chimera-pay -q);

docker rm private-chimera-pay;


docker run -e TZ=UTC+5:30 -d --restart=always  -p 80:3000 --name private-chimera-pay chimera_app "python3" "app.py"
