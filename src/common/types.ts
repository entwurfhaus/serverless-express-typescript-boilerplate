/**
 * Common Typescript types
 */

export interface ErrorResponse {
    message?: string;
    status?: number;
    code?: string | number;
    errors?: any;
}