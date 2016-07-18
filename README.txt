# Prepare for install - update nodejs
```
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

# Download mynode
```
$ cd
$ git clone https://github.com/heartyoh/mynode.git
$ npm install
```

# Register Service
```
$ sudo cp ~/mynode/service/hatio-node-script /etc/init.d
$ sudo chmod 755 /etc/init.d/hatio-node-script
$ sudo update-rc.d hatio-node-script defaults
```

# Execute/Stop Service Manually
```
$ sudo /etc/init.d/hatio-node-script start
$ sudo /etc/init.d/hatio-node-script stop
```
# Check in the firebase cloud