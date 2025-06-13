import Storage from 'expo-sqlite/kv-store';
import { buildResponse, GenericResponse } from 'utils/response.util';

import { ISqliteStorageProps } from './sqlite.definition';
import { DeepPartial } from 'types';

export class SqliteManager {
    private constructor() {}

    /**
     * Stores multiple properties in SQLite storage.
     * Only properties provided in the `props` argument will be affected.
     * Nested objects within `props` are stored as JSON strings.
     * If the value for a key in `props` is `undefined`, that key is omitted.
     *
     * @param props An object containing a partial set of ISqliteStorageProps to store.
     * Example: { userConfig: { biometricAuthEnabled: true }, deviceData: { deviceId: "123" } }
     * @returns A Promise resolving to a GenericResponse indicating success or failure.
     */
    public static async set(
        props: DeepPartial<ISqliteStorageProps>
    ): Promise<GenericResponse<{ message: 'OK' }>> {
        const keyValuePairs: [string, string][] = [];

        for (const key in props) {
            if (Object.prototype.hasOwnProperty.call(props, key)) {
                const typedKey = key as keyof ISqliteStorageProps;
                const value = props[typedKey];

                if (value !== undefined) {
                    try {
                        const stringifiedValue = JSON.stringify(value);
                        keyValuePairs.push([typedKey, stringifiedValue]);
                    } catch (error) {
                        return buildResponse({
                            success: false,
                            error,
                        });
                    }
                }
            }
        }

        if (keyValuePairs.length > 0) {
            try {
                await Storage.multiSet(keyValuePairs);
                return buildResponse({ success: true, data: { message: 'OK' } });
            } catch (error) {
                return buildResponse({
                    success: false,
                    error,
                });
            }
        } else {
            return buildResponse({
                success: false,
                message: 'No valid key-value pairs to store.',
            });
        }
    }

    /**
     * Retrieves specified properties from SQLite storage.
     *
     * @param keysToRetrieve An array of property names (keys of ISqliteStorageProps) to retrieve.
     * Example: ['userConfig', 'deviceData'] to retrieve userConfig and deviceData.
     * @returns A Promise resolving to a GenericResponse. On success, the data field
     * contains an object with the retrieved properties (as Partial<ISqliteStorageProps>).
     * On failure, it contains error information.
     */
    public static async get(
        keysToRetrieve: (keyof ISqliteStorageProps)[]
    ): Promise<GenericResponse<Partial<ISqliteStorageProps>>> {
        if (!keysToRetrieve || keysToRetrieve.length === 0) {
            return buildResponse({
                success: false,
                message: 'No keys specified for retrieval.',
            });
        }

        try {
            const stringKeysToFetch = keysToRetrieve.map((key) => String(key));
            const retrievedPairs = await Storage.multiGet(stringKeysToFetch);

            const resultData: Partial<ISqliteStorageProps> = {};

            for (const [key, stringValue] of retrievedPairs) {
                if (stringValue !== null && stringValue !== undefined) {
                    try {
                        const parsedValue = JSON.parse(stringValue);

                        resultData[key as keyof ISqliteStorageProps] = parsedValue;
                    } catch (error) {
                        return buildResponse({
                            success: false,
                            error,
                        });
                    }
                }
            }

            return buildResponse({ success: true, data: resultData });
        } catch (error) {
            return buildResponse({
                success: false,
                error,
            });
        }
    }
}
