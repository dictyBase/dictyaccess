#!/usr/bin/zsh
tag=$(git symbolic-ref -q HEAD | sed -e 's|^refs/heads/||' | sed 's/\//-/')-$(git rev-parse --short HEAD)
docker build --rm -f docker/eric-dev/Dockerfile -t dictybase/dictyaccess:${tag} .
docker push dictybase/dictyaccess:${tag}
