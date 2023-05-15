
export function formatBytes(bytes: number, decimals = 2,k = 1024) {
    let d = Math.floor(Math.log(bytes) / Math.log(k));
    return 0 === bytes ? "0 Bytes" : parseFloat((bytes / Math.pow(k, d)).toFixed(Math.max(0, decimals)))+ " " +["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]
}

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function getAllTextAfterValue(str: string, value: string) {
    const index = str.indexOf(value)
    if (index === -1) {
        // If the value is not found, return the original string
        return str
    }
    return str.slice(index + value.length)
}

export function checkPathnameForSidebar(url: string | null, orgUniqueId: string | undefined, subPath: string) {
    if (url && orgUniqueId) {
        const slicedURL = getAllTextAfterValue(url, orgUniqueId)
        const slicedSubPath = getAllTextAfterValue(subPath, orgUniqueId)

        // Normalize the URL and subPath by removing leading/trailing slashes
        const normalizedURL = slicedURL.replace(/^\/|\/$/g, '')
        const normalizedSubPath = slicedSubPath.replace(/^\/|\/$/g, '')

        // Check if the normalizedURL exactly matches the normalizedSubPath
        return normalizedURL === normalizedSubPath
    } else {
        return false
    }
}