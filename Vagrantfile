Vagrant.configure("2") do |config|
    config.vm.box = "centos/7"
    config.vm.provider :virtualbox do |v|
        v.memory = 1024
    end
     config.vm.define "master" do |master|
          master.vm.hostname = "master"
          master.vm.network :private_network, ip: "192.168.10.10"
    end
  

    config.vm.define "nginx" do |nginx|
          nginx.vm.hostname = "nginx"
          nginx.vm.network :private_network, ip: "192.168.10.11"
          nginx.vm.network "forwarded_port", guest:80,host:9996
          
    end

    config.vm.define "node" do |node|
          node.vm.hostname = "nodeapp"
          node.vm.network :private_network, ip: "192.168.10.12"
          node.vm.network "forwarded_port", guest:80,host:9997
          
    end

    
    config.vm.define "mongo" do |mongo|
          mongo.vm.hostname = "mongodb"
          mongo.vm.network :private_network, ip: "192.168.10.14"
          mongo.vm.network "forwarded_port", guest:27017,host:9999
    end   
end
