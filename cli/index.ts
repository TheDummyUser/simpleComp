#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs";
import path from "path";

const program = new Command();

program
  .name("simpleComp")
  .description("CLI for RN UI components")
  .version("1.0.0");

program
  .command("add <component>")
  .description("Add a component to your project")
  .action((component) => {
    const componentPath = path.join(process.cwd(), "components", "ui");

    if (!fs.existsSync(componentPath)) {
      fs.mkdirSync(componentPath, { recursive: true });
    }

    // Placeholder for actual copying logic
    console.log(`Adding ${component} component...`);
    // Implement copying of component files here as needed
  });

program.parse();
