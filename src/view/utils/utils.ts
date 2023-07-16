const fs = window.require('fs')
//let ini = require('ini');
import ini from 'ini'
import { roConfig } from "../services/config";
import { runCmd, runCmdAsync } from "./command";

//解析JOSN文件
export function parseJosnFile(path: string) {
    return (JSON.parse(fs.readFileSync(path, 'utf8')))
}

//写入JOSN文件
export function writeJosnFile(path: string, jsonData: object) {
    return (fs.writeFileSync(path, JSON.stringify(jsonData), 'utf8'))
}

//读取Hotpe配置
export function readHotPEConfig(drive: string) {
    return ini.parse(fs.readFileSync(drive + "HotPE\\confi.ini").toString());
}

//读取Hotpe配置
export function writeHotPEConfig(drive:string,obj: object) {
     
     return fs.writeFileSync(drive + "HotPE\\confi.ini",ini.encode(obj))


}


//解压文件7Z
export function unZipFile(filePath:string,outDir:string) {
    return new Promise((resolve, reject) => {
        let cmd = roConfig.path.tools + '.\\7z\\7z.exe x -y '+dealStrForCmd('-o'+outDir)+' '+dealStrForCmd(filePath)

        runCmd(cmd,(back:string)=>{
            console.log(back);
        },(end:number)=>{
            if (end == 0){
                resolve(true);
            }else{
                reject(false)
            }
        })
    })

}

//判断是否为HotPE盘
export function isHotPEDrive(drive: string) {
    return (fs.existsSync(drive + 'HotPE\\confi.ini') && fs.existsSync(drive + 'HotPEModule\\'))
}

//判断文件是否存在
export function isFileExisted(path_way: string) {
    return new Promise((resolve, reject) => {
        fs.access(path_way, (err: any) => {
            if (err) {
                reject(false);//"不存在"
            } else {
                resolve(true);//"存在"
            }
        })
    })
};

//取对象成员数
export function objectCount(o: object) {
    let n = 0;
    for (let i in o) {
        n++;
    }
    return n;
}

// ||逻辑或，&&逻辑且
//处理命令行参数：含 空或& 字符串加引号
export function dealStrForCmd(str: string) {
    let returnStr = ''
    if (str.indexOf(' ') != -1 || str.indexOf('&') != -1) {
        returnStr = '\"' + str + '\"'
    } else {
        returnStr = str
    }
    return returnStr
}

//取字符串中间
export function takeMidStr(str: string, leftStr: string, rightStr: string) {
    return str.substring(str.indexOf(leftStr) + leftStr.length, str.indexOf(rightStr))
}

//取字符串左边
export function takeLeftStr(str: string, taggedStr: string) {
    return str.substring(0, str.indexOf(taggedStr))
}

//取字符串右边
export function takeRightStr(str: string, taggedStr: string) {
    return str.substring(str.indexOf(taggedStr) + taggedStr.length, str.length)
}

//遍历文件,通过dir命令行
export async function traverseFiles(path: string) {
    let returnStr = await runCmdAsync('dir ' + dealStrForCmd(path) + ' /b') as string
    return returnStr.split("\r\n").filter((s) => { return s && s.trim() }).reverse()
}

//复制目录
export async function copyFiles(path: string, toPath: string) {


    return new Promise((resolve, reject) => {
        let cmd = 'xcopy ' + dealStrForCmd(path) + ' ' + dealStrForCmd(toPath) + ' /E /C /Q /H /R /Y /-I'

        runCmd(cmd,(back:string)=>{
            console.log(back);
        },(end:number)=>{
            if (end == 0){
                resolve(true);
            }else{
                reject(false)
            }
        })
    })


}

//复制目录
export async function copyDir(path: string, toPath: string) {

    return new Promise((resolve, reject) => {
        let cmd = 'xcopy ' + dealStrForCmd(path) + ' ' + dealStrForCmd(toPath) + ' /E /C /Q /H /R /Y /I'

        runCmd(cmd,(back:string)=>{
            console.log(back);
        },(end:number)=>{
            if (end == 0){
                resolve(true);
            }else{
                reject(false)
            }
        })
    })

}

export async function delFiles(path: string) {

    return new Promise((resolve, reject) => {
        let cmd = 'del ' + dealStrForCmd(path) + ' /F /S /Q'

        runCmd(cmd,(back:string)=>{
            console.log(back);
        },(end:number)=>{
            if (end == 0){
                resolve(true);
            }else{
                reject(false)
            }
        })
    })

}

export async function delDir(path: string) {

    return new Promise((resolve, reject) => {
        let cmd = 'rd ' + dealStrForCmd(path) + ' /S /Q'

        runCmd(cmd,(back:string)=>{
            console.log(back);
        },(end:number)=>{
            if (end == 0){
                resolve(true);
            }else{
                reject(false)
            }
        })
    })

}