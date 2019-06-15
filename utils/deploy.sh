#!/bin/bash

#Date
DATE=$(date "+%Y-%m-%d-%H-%M")

#ENV
APP_NAME="front-end-ship"
SCRIPT_NAME="deploy.sh"
BASE_DIR="/tmp"
LOCK_FILE="${BASE_DIR}/${APP_NAME}.lock"
SHELL_LOG="${BASE_DIR}/${APP_NAME}.log"
REMOTE="root@140.82.48.232"


lock(){
  touch ${LOCK_FILE}
}

unlock(){
  rm -f ${LOCK_FILE}
}

log(){
  LOG_INFO=$1
  echo "$DATE ${SCRIPT_NAME} : ${LOG_INFO}" >> ${SHELL_LOG}
}

deploy(){
  echo "Deploy Server"
  log "Deploy Server"
  ssh ${REMOTE} "cd /root/project/front-end-ship && git pull && yarn build && cp -r build/. ../../www"
}

main(){
  if [ -f "$LOCK_FILE" ];then
     log "${SCRIPT_NAME} is running"
     echo "${SCRIPT_NAME} is running" && exit
  fi
  lock
  deploy
  unlock
}

main