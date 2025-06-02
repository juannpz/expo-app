interface IDeviceData {
    deviceId: string;
}

interface IUserConfig {
    biometricAuthEnabled: boolean;
}

interface IUserCredentials {
    phone: {
        phoneNumber: string;
        countryCode: string;
    };
    email: string;
}

interface IUserData {
    userId: number;
    userCredentials: IUserCredentials;
}

export interface ISqliteStorageProps {
    userConfig: IUserConfig;
    userData: IUserData;
    deviceData: IDeviceData;
}
