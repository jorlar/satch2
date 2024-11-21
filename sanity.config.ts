import exp from "constants";
import { defineConfig } from "sanity";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";

import schemas from "./sanity/schemas";

export default defineConfig({
  projectId: "hwqw748q",

  dataset: "satch_data",

  title: "Satch Valdres",

  apiVersion: "2024-11-14",

  basePath: "/admin",

  plugins: [vercelDeployTool()],

  schema: { types: schemas },
});
