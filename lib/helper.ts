export function isEmptyOrNull(s: string) {
    if (s == undefined || s == null || s.length == 0) return true;
    return false;
}