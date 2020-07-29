#!/bin/bash
kubectl delete deployment frontend
eval "$(minikube docker-env)"
docker rmi outy/frontend
docker build -t outy/frontend .
kubectl apply -f deployment/deployment.dev.yaml