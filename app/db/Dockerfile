FROM mongo:3.6.1-jessie

ARG VCS_REF
ARG BUILD_DATE
ARG IMAGE_TAG_REF

ENV GIT_SHA $VCS_REF
ENV IMAGE_BUILD_DATE $BUILD_DATE
ENV IMAGE_TAG $IMAGE_TAG_REF

COPY ./heroes.json /heroes.json
COPY ./ratings.json /ratings.json
COPY ./sites.json /sites.json
COPY ./import.sh /import.sh
COPY dump dump

EXPOSE 27017
