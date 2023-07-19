import { HPM, HPMClass, /* HPMDLRender, */ HPMDl } from "../type/hpm";

//在线的HPM列表
let HPMListOnline: Array<HPMClass> = []

//本地的HPM列表
let HPMListLocal: {
    on: Array<HPM>,
    off: Array<HPM>
} = { on: [], off: [] }

//下载任务的列表
let HPMDlList: Array<HPMDl> = []

//下载任务更新渲染
/* let HPMDLRender: HPMDLRender = {
    callRender: () => { }
} */

let HPMDLRender:Array<Function>=[]

function setHPMListOnline(data: Array<HPMClass>) {
    HPMListOnline = data
    console.log(HPMListOnline);
}

export { setHPMListOnline, HPMListOnline, HPMListLocal, HPMDlList, HPMDLRender }