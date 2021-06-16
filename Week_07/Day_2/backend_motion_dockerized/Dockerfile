# Pull miniconda from docker hub as base image
FROM continuumio/miniconda3:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y

RUN mkdir -p /app
RUN mkdir -p /scripts
RUN mkdir -p /static-files

# Copy the requirements file from local folder to image
COPY ./app/requirements.yml /app/requirements.yml

# create the environment inside the docker container
RUN /opt/conda/bin/conda env create -f /app/requirements.yml

# we set the path were all the python pacakages are
ENV PATH /opt/conda/envs/backend_motion/bin:$PATH

# activate app
RUN echo "source activate backend_motion" >~/.bashrc

# pass all the files and folders from local folder to image
COPY ./app /app
COPY ./scripts /scripts
RUN chmod +x ./scripts*

# set the working directory to /app for whenever you login into your container
WORKDIR /app

#CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]

FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/


