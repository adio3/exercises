FROM continuumio/miniconda3:latest
ADD . /code
WORKDIR /code
RUN pip install -r requirements.yml
CMD ["python", "app.py"]