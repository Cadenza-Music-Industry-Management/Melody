

export function formatBytes(bytes: number, decimals = 2,k = 1024) {
    let d = Math.floor(Math.log(bytes) / Math.log(k));
    return 0 === bytes ? "0 Bytes" : parseFloat((bytes / Math.pow(k, d)).toFixed(Math.max(0, decimals)))+ " " +["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]
}