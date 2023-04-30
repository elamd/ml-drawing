export default class PathShape {

    _path: number[][] = [];

    constructor(path: number[]) {
        this._path.push(path);
    }

    public get path(): number[][] {
        return this._path;
    }
}
