declare const ANIMATION: any;
declare const isPlainObject: (obj: any) => boolean;
declare const isUndefined: (val: any) => boolean;
interface EaseFn {
    (elapsed: number, initialValue: number, amountOfChange: number, duration: number): number;
}
interface Options {
    current: number;
    start: number;
    end: number;
    easeFn: EaseFn;
    form: any;
    to: any;
}
