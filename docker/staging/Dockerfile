FROM dictybase/frontend-builder:staging
LABEL maintainer "Siddhartha Basu <siddhartha-basu@northwestern.edu>"
LABEL maintainer "Eric Hartline <eric.hartline@northwestern.edu>"

# base path for React Router
ARG basename
ENV REACT_APP_BASENAME ${basename:-dictyaccess}

ARG seq_json
ENV REACT_APP_SEQ_JSON ${seq_json:-https://raw.githubusercontent.com/dictyBase/migration-data/master/dashboard/sequence/combined.json}

ARG mid_culminant_json
ENV REACT_APP_MID_CULMINANT_JSON ${mid_culminant_json:-https://raw.githubusercontent.com/dictyBase/migration-data/master/dashboard/spatial-expression/mid_culminant.json}

ARG spatial_json
ENV REACT_APP_SPATIAL_JSON ${spatial_json:-https://raw.githubusercontent.com/dictyBase/migration-data/master/dashboard/spatial-expression/combined.json}

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy only necessary files
COPY package.json ./
COPY jsconfig.json ./
COPY yarn.lock ./

RUN yarn install

# add necessary folders
ADD src src
ADD public public

# overwrite the client key file
ADD $CLIENT_KEYS /usr/src/app/src/common/utils/clientConfig.js

RUN yarn build

FROM dictybase/static-server:1.0.0
RUN mkdir /www
WORKDIR /www
COPY --from=0 /usr/src/app/build ./
ENTRYPOINT ["/usr/local/bin/app", "run", "-f", "/www", "--vf", "/static", "--sub-url", "/dictyaccess"]
