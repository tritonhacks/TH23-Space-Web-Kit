import uvicorn
from typing import Optional

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates


app = FastAPI()
app.mount("/home", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get("/")
def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/explore")
def read_rood(request: Request):
    return templates.TemplateResponse("explorePage.html", {"request": request})

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=5000, log_level="info")
