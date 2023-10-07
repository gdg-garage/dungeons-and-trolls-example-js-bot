rm -rf dungeons_and_trolls_generated_client

export VERSION=$(curl -s https://converter.swagger.io/api/convert?url=https://raw.githubusercontent.com/gdg-garage/dungeons-and-trolls/master/api/dungeonsandtrolls.swagger.json | tr '{' '\n' | tr '}' '\n' | tr ',' '\n' | grep "version" | sed "s/\"//g" | cut -d: -f2)

docker-compose run client-gen

chmod -R a+rw dungeons_and_trolls_generated_client
