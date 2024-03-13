/**
 * 模板
 */
declare class AppFile {
    path: (relativePath: string) => string;
    cwd: () => string;
    open: (path: string, mode?: string, encoding?: string, bufferSize?: number) => any;
    create: (path: string) => void;
    createIfNotExists: (path: string) => void;
    createWithDirs: (path: string) => void;
    exists: (path: string) => boolean;
    ensureDir: (path: string) => void;
    read: (path: string, encoding?: string) => string;
    readBytes: (path: string) => any;
    write: (path: string, text: string, encoding?: string) => void;
    append: (path: string, text: string, encoding?: string) => void;
    appendBytes: (path: string, bytes: any) => void;
    writeBytes: (path: string, bytes: any) => void;
    copy: (pathFrom: string, pathTo: string) => void;
    renameWithoutExtension: (path: string, newName: string) => void;
    rename: (path: string, newName: string) => void;
    move: (path: string, newPath: string) => void;
    getExtension: (fileName: string) => string;
    getName: (filePath: string) => string;
    getNameWithoutExtension: (filePath: string) => string;
    remove: (path: string) => void;
    removeDir: (path: string) => void;
    listDir: (path: string) => string[];
    isFile: (path: string) => boolean;
    isDir: (path: string) => boolean;
    isEmptyDir: (path: string) => boolean;
    getHumanReadableSize: (bytes: number) => string;
    getSimplifiedPath: (path: string) => string;
    join: (parent: string, ...child: string[]) => string;
    readAssets: (path: string, encoding?: string) => string;
    getSdcardPath: () => string;
    getPicturePath: () => string;
    getDownloadPath: () => string;
    getMusicPath: () => string;
    getMoviePath: () => string;
    getDCIMPath: () => string;
}


declare global {
    // @ts-ignore
    var File: AppFile;
    var AppFile: AppFile;
}

// 使文件成为模块
export {};
