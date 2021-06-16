# Pull miniconda from docker hub as base image
FROM continuumio/miniconda3:latest

# Copy the requirements file from local folder to image
COPY ./app/requirements.yml /app/requirements.yml

# create the environment inside the docker container
RUN conda env create -f /app/requirements.yml

# we set the path were all the python pacakages are
ENV PATH /opt/conda/envs/django_app/bin:$PATH

# activate app
RUN echo "source activate django_app" >~/.bashrc

# pass all the files and folders from local folder to image
COPY ./app /app

# set the working directory to /app for whenever you login into your container
WORKDIR /app
