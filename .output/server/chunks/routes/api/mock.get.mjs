import { c as defineEventHandler } from '../../_/nitro.mjs';
import { readFile } from 'fs/promises';
import { join } from 'path';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';

const mock_get = defineEventHandler(async () => {
  const filePath = join(process.cwd(), "public/mock.json");
  const data = await readFile(filePath, "utf-8");
  return JSON.parse(data);
});

export { mock_get as default };
//# sourceMappingURL=mock.get.mjs.map
