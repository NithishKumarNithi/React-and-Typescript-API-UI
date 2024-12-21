import { writeFile } from 'node:fs/promises'; 
import { Product } from '../interfaces';

export const overwriteFile = async (filename: string, content: Product[]): Promise<string> => {
    try {
        await writeFile(filename, JSON.stringify(content,null,2));
        return 'product added successfully';
    } catch {
        return `something wrong while proceeding` ;
    }
}