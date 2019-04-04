# mean_app_deployment
deploy mean stack app using ansible

this playbook deploy a MEAN stack  web app on :
 - Nginx as reverse proxy and serving static files (angular)
 - mongodb as database server
 - nodejs as backend server

prerequisite:
  - install centos 7 on all machine
installation
  -  setup your environment using vagrant file which contains:
  -  master
  -  nginx server
  -  nodejs server
  - angular server
  -  mongodb server
  -  install master ssh key on the remaining servers
  -  install ansible
  -  clone my playbook
Running the Playbook
    -$ ansible-playbook -i inventory  playbook.yml
