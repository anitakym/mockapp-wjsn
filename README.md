#mock
#for wjsn web client
#mockjs + express + pm2
#deploy
#sh deploy-node-wjsn.sh
#deploy-node-wjsn.sh content:
<pre>
#!/bin/bash
echo "deploy start !"
cd /Users/kuangyimin/Documents/express
echo "build success !"
zip -q -r mockapp-wjsn.zip mockapp-wjsn
echo "zip success !"
scp /Users/kuangyimin/Documents/express/mockapp-wjsn.zip root@139.199.113.45:~
echo "scp success !"
ssh anitak 'unzip mockapp-wjsn.zip;pm2 restart ./mockapp-wjsn/bin/www;exit'
echo "ssh success !"
echo "unzip success !"
</pre>