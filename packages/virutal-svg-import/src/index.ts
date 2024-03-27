import { type Plugin } from "vite";

const VIRTUAL_IMAGE_TOKEN_MAP = "virtual:image-token-registry";
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_IMAGE_TOKEN_MAP}`;

export function virtualSvgImports(): Plugin {
  return {
    name: "virtual-svg-imports",

    resolveId(id: string) {
      if (id === VIRTUAL_IMAGE_TOKEN_MAP) {
        console.log(`Resolved virtual module: ${id}`);
        return RESOLVED_VIRTUAL_MODULE_ID;
      }
    },

    load(id: string) {
      if (id === RESOLVED_VIRTUAL_MODULE_ID) {
        // TODO: create type-def for this
        return `
          import * as IMAGE_MAP from "@ts-scratch/ui/image-map";
          
          export const IMAGE_TOKEN_REGISTRY = [...Object.keys(IMAGE_MAP)];
        `;
      }
    },
  };
}
