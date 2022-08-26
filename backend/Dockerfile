FROM python:3.10

COPY . /app

RUN apt-get update

RUN apt-get install gnat gprbuild -y

WORKDIR /app/whitakers-words

RUN make -f Makefile

RUN mv ./bin/words ADDONS.LAT DICTFILE.GEN EWDSFILE.GEN INDXFILE.GEN INFLECTS.SEC STEMFILE.GEN UNIQUES.LAT /app/

WORKDIR /app

RUN pip install -r requirements.txt

EXPOSE 5000:5000

CMD ["gunicorn"  , "-b", "0.0.0.0:5000", "wsgi:app"]
