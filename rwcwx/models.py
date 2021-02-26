import os

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Numeric, DateTime

from rwcwx.model.db import Db
from rwcwx.model.wx import Model

mysql_url = os.getenv("MYSQL_URL", "root:test@127.0.0.1:3307/wx")
db = Db(f"mysql://{mysql_url}")
m = Model(db)


Base = declarative_base()


class Obs(Base):
    __tablename__ = "obs"

    t = Column(DateTime, primary_key=True)
    src = Column()
    temp = Column()
    humi = Column()
    rain = Column()
    pres = Column()
    wind = Column()
    gust = Column()
    wdir = Column()
    # solr = Column()
    pm2 = Column()
    # wet = Column()
    # sun = Column()
    inhumi = Column()
    intemp = Column()
    t_obs = Column()
    t_mod = Column()

    @property
    def dewpt(self) -> float:
        # TODO: moar accurate
        return float(self.temp) - (100 - self.humi) * 0.2

    @property
    def json_(self) -> dict:
        d = self.__dict__
        d.pop("_sa_instance_state")
        d["dewpt"] = round(self.dewpt, 1)
        return d

    def __repr__(self):
        return f"<Obs:{self.t}>"
