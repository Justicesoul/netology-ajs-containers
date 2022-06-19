export const newMap = new Map();
export default class ErrorRepository {
  constructor(code, description) {
    newMap.set(code, description);
  }
  static translate(code) {
    const objError = newMap.get(code);
    return objError || 'Unknown error';
  }
}
