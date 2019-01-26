#!/bin/bash
cd /home/pi/Desktop/Development/website
git pull origin master
sudo a2dissite colindaugherty.conf
sudo /etc/init.d/apache2 reload
sudo a2ensite colindaugherty.conf
sudo /etc/init.d/apache2 reload
