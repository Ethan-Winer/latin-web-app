FROM python:3.10

# RUN apk add gcompat

# COPY ./app.py /app/
# COPY requirements.txt /app/
# COPY ./words/* /app/

COPY . /app

# RUN apt-get update

# RUN echo y | apt-get install gnat

# WORKDIR /app/words

# RUN make -f ./makefile

RUN apt-get update

RUN apt-get install gnat gprbuild -y

# RUN apt-get install gnat -y

WORKDIR /app/whitakers-words

RUN make -f Makefile

RUN mv ./bin/words ADDONS.LAT DICTFILE.GEN EWDSFILE.GEN INDXFILE.GEN INFLECTS.SEC STEMFILE.GEN UNIQUES.LAT /app/

WORKDIR /app

RUN pip install -r requirements.txt

EXPOSE 5000:5000

ENTRYPOINT ["python"]

CMD ["app.py"]
