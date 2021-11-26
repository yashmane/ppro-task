# PPRO-DEVOPS_TASK
This is the solution for the DevOps task.

### Instructions on how to get started.

- Getting started on MiniKube. Select the appropriate OS, architecture, release type and installer and download the binaries.
```sh
https://minikube.sigs.k8s.io/docs/start/
```

- Start your cluster
```sh
minikube start
```

- verifying cluster deployment.
```sh
kubectl get pods -A
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

- Clone the GitHub repo.
```sh
https://github.com/yashmane/ppro-task.git
```

- Execute the bash script() to deploy the resources to kubernetes cluster.
```sh
chmod 777 deploy.sh
./deploy.sh
```

- Once the above script is completed, use the following command to make an HTTP resquest.
```sh
minikube service ppro-task-helloworld --url
or
curl http://localhost:4000/
or 
curl http://<service-ip>:4000/
```
