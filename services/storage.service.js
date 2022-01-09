import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

const getExistFileData = async (pathToFile) => { 
  const file = await promises.readFile(filePath);
  return JSON.parse(file); 
}

const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExist(filePath)) { 
    data = await getExistFileData(filePath);
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => { 
  if (await isExist(filePath)) { 
    const data = await getExistFileData(filePath);
    return data[key];
  }
}

const isExist = async (path) => { 
  try {
    await promises.stat(path);
    return true;
  } catch (e) { 
    return false;
  }
}

export { saveKeyValue };
