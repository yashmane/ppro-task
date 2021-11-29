# PPRO-DEVOPS_TASK
This is the solution for the DevOps task.

### Instructions on how to get started.

- Getting started on MiniKube. Select the appropriate OS, architecture, release type and installer and download the binaries.
```sh
https://minikube.sigs.k8s.io/docs/start/
```

- Deploy DEV cluster.
```sh
minikube start
```

- Deploy PROD cluster.
```sh
minikube start -p minikubeprod
```

- verifying cluster deployment(Here you can see two kubernetes clusters).
```sh
kubectl config get-contexts
```

- Installing Helm.
 Download the desired version.
```sh
https://github.com/helm/helm/releases
```

- Unpack it.
```sh
tar -zxvf helm-v3.0.0-linux-amd64.tar.gz
```

- Find the helm binary in the unpacked directory, and move it to its desired destination.
```sh
mv linux-amd64/helm /usr/local/bin/helm
```

- Add the stable repo to deploy database.
```sh
helm repo add stable https://charts.helm.sh/stable
```

- Clone the GitHub repo.
```sh
https://github.com/yashmane/ppro-task.git
```

#### FOR DEV
- Execute the bash script(deploy-dev.sh) to deploy the resources to DEV kubernetes cluster.
```sh
cd ppro-task
chmod 777 deploy-dev.sh
./deploy-dev.sh
```

- To check the DEV deployments.
```sh
kubectl config get-contexts
kubectl config use-context minikube
kubectl get po
```

- Use the following commands for HTTP request.
```sh
minikube service ppro-task-helloworld --url (Leave the terminal as it is).
Open http://127.0.0.1:<nodeport>/(nodeport is mentioned in the output of above command) in browser.
OR
curl http://service-ip:<nodeport>/ (From another terminal).
```

#### FOR PROD

- Execute the bash script(deploy-prod.sh) to deploy the resources to PROD kubernetes cluster.
```sh
chmod 777 deploy-prod.sh
./deploy-prod.sh
```

- To check the PROD deployments.
```sh
kubectl config get-contexts
kubectl config use-context minikubeprod
kubectl get po
```

- Use the following commands for HTTP request.
```sh
minikube service ppro-task-helloworld --url (Leave the terminal as it is).
Open http://127.0.0.1:<nodeport>/(nodeport is mentioned in the output of above command) in browser.
OR
curl http://service-ip:<nodeport>/ (From another terminal).
```

