
import { writeFile, readFile, access } from 'node:fs/promises';

interface Data {
  [key: string]: any;
}

const dataFile = './src/data/data.json';

export async function writeToLocalDataFile(key: string, value: any): Promise<void> {
  try {
    await access(dataFile);
    let data: Data = {};
    try {
      data = JSON.parse(await readFile(dataFile, 'utf8')) as Data;
    } catch (err) {
      console.log(err);
    }
    data[key] = value;
    await writeFile(dataFile, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
}

export async function readLocalDataFile(key: string): Promise<any> {
  try {
    await access(dataFile);
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
    }

    return result;
  } catch (err) {
    console.error(err);
  }
}