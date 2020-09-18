FROM dictybase/frontend-builder:latest

ARG func_server
ENV REACT_APP_FUNC_SERVER ${func_server}

ARG graphql_server
ENV REACT_APP_GRAPHQL_SERVER ${graphql_server}

ARG ga_tracking_id
ENV REACT_APP_GA_TRACKING_ID ${ga_tracking_id}

ARG client_keys
ENV CLIENT_KEYS ${client_keys}

ARG basename
ENV REACT_APP_BASENAME ${basename:-dictyaccess}

ARG seq_json
ENV REACT_APP_SEQ_JSON ${seq_json:-https://raw.githubusercontent.com/dictyBase/migration-data/master/dashboard/sequence/combined.json}

ARG mid_culminant_json
ENV REACT_APP_MID_CULMINANT_JSON ${mid_culminant_json:-https://raw.githubusercontent.com/dictyBase/migration-data/master/dashboard/spatial-expression/mid_culminant.json}

ARG spatial_json
ENV REACT_APP_SPATIAL_JSON ${spatial_json:-https://raw.githubusercontent.com/dictyBase/migration-data/master/dashboard/spatial-expression/combined.json}

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.json ./
COPY yarn.lock ./

RUN yarn install

ADD src src
ADD public public
ADD $CLIENT_KEYS /usr/src/app/src/common/utils/clientConfig.js

RUN yarn build

FROM dictybase/static-server:2.1.0
RUN mkdir /www
WORKDIR /www
COPY --from=0 /usr/src/app/build ./
ENTRYPOINT ["/usr/local/bin/app", "run", "-f", "/www", "--sub-url", "/dictyaccess"]
