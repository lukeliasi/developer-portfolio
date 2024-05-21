import { writeFile, readFile, access, constants, mkdir } from 'node:fs/promises';
import { dirname } from 'path';

interface Data {
  [key: string]: any;
}

const dataFile = './src/data/data.json';

async function ensureFileExists(file: string): Promise<void> {
  try {
    await access(file, constants.F_OK);
  } catch {
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, '{}');
  }
}

export async function writeToLocalDataFile(key: string, value: any): Promise<void> {
  try {
    await ensureFileExists(dataFile);
    let data: Data = {};
    try {
      data = JSON.parse(await readFile(dataFile, 'utf8')) as Data;
    } catch (err) {
      console.log(err);
    }
    data[key] = value;
    await writeFile(dataFile, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}

export async function readLocalDataFile(key: string): Promise<any> {
  try {
    await ensureFileExists(dataFile);
    let data: Data = {};
    try {
      data = JSON.parse(await readFile(dataFile, 'utf8')) as Data;
    } catch (err) {
      console.log(err);
    }

    // Handle nested keys
    const keys = key.split('.');
    let result = data;
    for (const k of keys) {
      result = result[k];
      if (result === undefined) break;
    }

    return result;
  } catch (err) {
    console.error(err);
  }
}
