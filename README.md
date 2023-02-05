This is a project to study first steps in kubernets

# Requirements
    - Docker
    - Minikube

## Story App
At this project we're able to deploy a application in kubernets with Volumes and Env vars

Before all it's necessary to start up the minikube with the command:
minikube start

With minikube running we can use our cluster creating a deployment and a service with this kubectl commands:
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

The Deployment is the kubernets object responsable for manager the pod's deployments and autoscalling, otherwise the service object is
responsable for the communication inside and outside the cluster

After create our service we can expose this with the command:
minikube service backend

We can also use the merged yaml files that contains all the content from deployment.yaml and service.yaml using the command
kubectl apply -f master-deployment.yaml

## Tasks App
At this project we're deploying 3 applications that communicate with each other using a built-in DNS with the path "service.namespace"

IMAGEM

Before all it's necessary to start up the minikube with the command:
minikube start

With minikube running we can use our cluster creating a deployment and a service with this kubectl commands:
kubectl apply -f auth-deployment.yaml  -f auth-service.yaml
kubectl apply -f users-deployment.yaml -f users-service.yaml
kubectl apply -f tasks-service.yaml    -f tasks-deployment.yaml

The Deployment is the kubernets object responsable for manager the pod's deployments and autoscalling, otherwise the service object is
responsable for the communication inside and outside the cluster

After create our service we can expose this with the command:
minikube service users-service
minikube service tasks-service

