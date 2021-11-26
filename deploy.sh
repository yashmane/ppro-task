echo "Deploying mysql instance"
echo ""

helm install mysql-pprotask helm-files/mysql/mysql -n test-ns -f helm-files/mysql/values.yaml 

echo ""
echo "Deploying NodeJS application"
echo ""

sleep 15s

helm install ppro-task-helloworld helm-files/app-deploy/ -n test-ns -f helm-files/app-deploy/values.yaml
