# Installing dependencies
FROM alpine AS git
RUN apk add git && apk add python3

# Fetching from version control
FROM git AS fetch
WORKDIR /repo
RUN git clone https://github.com/toogoodyshoes/cloud-resume.git 

# Getting the website up and running
FROM fetch AS site
WORKDIR /home/cloud_resume
COPY --from=fetch /repo/cloud-resume/ .
EXPOSE 8080
ENTRYPOINT [ "python3", "-m", "http.server", "8080", "--bind", "0.0.0.0" ]