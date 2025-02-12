FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl unzip

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN ln -s /root/.deno/bin/deno /usr/local/bin

RUN deno upgrade --version 1.0.3
RUN deno --version

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

EXPOSE $PORT
CMD ["deno", "run", "--allow-net", "--allow-read", "server.ts"]