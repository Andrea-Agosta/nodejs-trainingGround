import fetch from "node-fetch";
import { readFile } from "fs";

fetch("https://randomuser.me/api/?results=30")
  .then((response) => response.json())
  .then((data) => data.results)
  .then((results) => console.log(`We got ${results.length} rows`))
  .then((response) => response.json());

readFile("thisFileDoesntExists", "utf8", (err, file) => {
  if (err) {
    console.log("We got an error", { err });
  }
  // no error
  console.log(`That file has ${file.split("\n").length} lines`);
});

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => data.results)
  .then((results) => console.log(`We got ${results.length} rows`))
  .catch((err) => console.log("getResponseFromUrl returned an error", { err }));

fsPromise
  .readFile("promises.mjs", "utf-8")
  .then((file) => console.log(`That file has ${file.split("\n").length} lines`))
  .catch((err) => console.log("We got an error", { err }));
