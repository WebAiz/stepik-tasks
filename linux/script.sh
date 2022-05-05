curl -s https://stepik.org:443/api/users/1 | jq -r '.users[0].join_date'

cat >> stepik.sh <<EOF
curl -s https://stepik.org:443/api/users/1 | jq -r '.users[0].join_date'
EOF
sudo useradd -c "Murat Serik" murat
sudo passwd sara
smith95
smith95

sudo useradd -c "Murat Serik" -d /home/murat -s /bin/sh -m -g bin murat
sudo passwd murat
H3l70!vv0r7d
cat >> confix.text
success: true

sudo groupadd mark
sudo useradd -u 567 -g mark -k /proc -G bin,staff -e 2035-11-30 -c "Mark Twain" -m -d /home/marktwain -s /bin/bash mark
sudo passwd mark
S@wYer
cat >> config.text
success: true

sudo groupadd ghost
sudo useradd -g ghost -s /usr/sbin/nologin -c "Ghost Background Service" -r ghost

sudo usermod -l marktwain mark
sudo passwd marktwain
marktwain1835

sudo usermod -l serikbek serik
sudo usermod -c "Serik" -G daemon,bin,mail serikbek
sudo usermod -L serikbek

sudo userdel -r john

sudo groupadd john
sudo useradd -g john -G daemon -d /home/john -m -c "John Cena" john
sudo passwd john
myTimeIsNoW!
newgrp daemon
echo "success: true" >> config-daemon.txt
newgrp john
echo "success: true" >> config-john.txt

sudo chown -R john:john /home

sudo groupadd kings
sudo groupadd john
sudo useradd -g john -c "John Cena" -G kings -m -d /home/john john
sudo passwd john
myTimeIsNoW!
echo "success: true" >> config-john.txt
newgrp kings
echo "success: true" >> config-kings.txt

sudo groupmod -n kingdom kings
