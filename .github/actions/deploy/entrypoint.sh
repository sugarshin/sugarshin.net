#!/bin/bash

set -e

DIR=.deploy

mkdir /root/.ssh
ssh-keyscan -t rsa github.com > /root/.ssh/known_hosts
echo "${DEPLOY_KEY}" > /root/.ssh/id_rsa
chmod 400 /root/.ssh/id_rsa

git clone --depth=1 --single-branch -b "${BRANCH}" "${GIT_URL}" "${DIR}" || (git init "${DIR}" && cd "${DIR}" && git remote add origin "${GIT_URL}" && git checkout -b "${BRANCH}" && cd -)
git config --global user.name 'CircleCI'
git config --global user.email 's+circleci@sugarshin.net'

rm -rf "${DIR:?}/*"
cp -R "${GITHUB_WORKSPACE}/${BUILD}/." "${DIR}"
cd "${DIR}"
git add --all
git commit -m "Built artifacts of ${GITHUB_SHA} [ci skip]" || (echo "No changes detected, skipping deployment"; exit 0)
git push origin "${BRANCH}"
echo "${GITHUB_SHA} was successfully deployed"
