import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const websiteDirectory = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(websiteDirectory, '../docs/privacy_policy.html');
const destination = resolve(websiteDirectory, 'public/privacy_policy.html');

await mkdir(dirname(destination), { recursive: true });
await copyFile(source, destination);
