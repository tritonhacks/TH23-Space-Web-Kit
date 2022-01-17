from typing import Optional
import uvicorn
import requests

from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from starlette.responses import RedirectResponse

app = FastAPI()
app.mount("/home", StaticFiles(directory="static"), name="static")
fish_watch_api = 'https://www.fishwatch.gov/api/species/'


@app.get("/")
def read_root():
    return RedirectResponse(url="/home/index.html")


@app.get("/search/{name}")
def read_item(name: Optional[str] = ""):
    res = requests.get(fish_watch_api + name)
    if not res.ok:
        raise HTTPException(status_code=404, detail=res.reason)

    decoded = res.json()
    
    if len(decoded) == 0:
        # TODO: Fix statuscode for no results found
        raise HTTPException(status_code=404, detail="No results found")

    return decoded

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5000, log_level="info")