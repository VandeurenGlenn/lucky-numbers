export declare const unique: (arr: any) => any;
export declare const between: (min: any, max: any, length?: number) => any[];
export declare const random: (max: any, length?: number) => any[];
/**
 *
 * @param {number} numbers - total of numbers to return
 * @param {number} max - maximum value of biggest number
 * @param {number} min - minimum value of smallest number
 * @param {number} length - set length to pick the numbers from
 *
 * @example
 * picks 7 random numbers out of a set with 100 random numbers
 * ```js
 * lottery(100, 7)
 * ```
 *
 * @example
 * picks 7 random numbers out of a set with 500 random numbers
 * ```js
 * lottery(100, 7, 500)
 * ```
 */
export declare const lottery: (numbers?: number, max?: number, min?: number, length?: number) => any[];
declare const _default: {
    unique: (arr: any) => any;
    between: (min: any, max: any, length?: number) => any[];
    random: (max: any, length?: number) => any[];
    lottery: (numbers?: number, max?: number, min?: number, length?: number) => any[];
};
export default _default;
