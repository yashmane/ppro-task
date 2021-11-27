echo "Switching to DEV kubernetes"
echo ""
kubectl config use-context minikube
echo ""

echo "Deploying mysql instance"
echo ""
helm install mysql-pprotask helm-files/mysql/mysql/ -f helm-files/mysql/values.yaml 
echo ""

echo "Deploying NodeJS application"
echo ""
sleep 20s
helm install ppro-task-helloworld helm-files/app-deploy/ -f helm-files/app-deploy/values.yaml
