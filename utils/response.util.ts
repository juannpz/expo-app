import { AxiosError } from 'axios';

type SuccessResponse<T> = {
    success: true;
    data: T;
};

type FailureResponse<E, A> = {
    success: false;
    error?: unknown;
    message?: string;
    errorType?: E | unknown;
    additionalData?: A;
    code?: number;
};

export type GenericResponse<T, E = unknown, A = unknown> =
    | SuccessResponse<T>
    | FailureResponse<E, A>;

export function buildResponse<T, E, A>(
    response: GenericResponse<T, E, A>
): GenericResponse<T, E, A> {
    if (!response.success) {
        const { error, message, code, errorType, additionalData } = response;
        const defaultErrorCode = 500;
        const defaultErrorMessage = 'An error occurred, but no additional details are available';

        if (message || errorType)
            return {
                ...response,
                message: message ?? defaultErrorMessage,
                code: code ?? defaultErrorCode,
                errorType,
                additionalData,
            };

        if (isAxiosError(error)) {
            const axiosMessage = extractAxiosErrorMessage(error);
            const axiosCode = extractHttpErrorCode(error) ?? defaultErrorCode;
            return {
                ...response,
                message: axiosMessage ?? 'An unkown Axios error occurred',
                code: axiosCode,
                errorType: errorType ?? error.name,
            };
        }

        if ((error as any) instanceof Error) {
            const httpCode = extractHttpErrorCode(error);
            return {
                ...response,
                message: (error as any).message ?? 'An unknown error occurred',
                code: httpCode ?? defaultErrorCode,
                errorType: errorType ?? (error as any).name,
            };
        }

        return {
            ...response,
            message: defaultErrorMessage,
            code: defaultErrorCode,
            errorType,
        };
    }

    return response;
}

export function isAxiosError(error: unknown): error is AxiosError {
    return (error as AxiosError)?.isAxiosError;
}

export function extractAxiosErrorMessage(error: AxiosError) {
    const data = error.response?.data;

    if (isAxiosErrorData(data)) return data.message;

    return error.message;
}

export function extractHttpErrorCode(error: unknown) {
    if (isAxiosError(error)) {
        return error.response?.status;
    }

    if ((error as any) instanceof Error && 'code' in (error as any)) {
        const code = (error as any).code;
        if (typeof code === 'number') {
            return code;
        }
    }
}

function isAxiosErrorData(data: unknown): data is AxiosErrorData {
    return typeof data === 'object' && data !== null && 'message' in data;
}

interface AxiosErrorData {
    message?: string;
}
