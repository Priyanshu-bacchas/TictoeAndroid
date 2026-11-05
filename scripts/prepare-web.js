import { mkdir, copyFile } from "node:fs/promises";

await mkdir("www", { recursive: true });
console.log("Capacitor web directory is ready. The Android app loads the live Tictoe website.");
