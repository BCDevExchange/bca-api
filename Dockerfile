FROM node:4-onbuild
ONBUILD ADD * /usr/src/app/
EXPOSE 8080