import React from 'react';
import { TextInputProps } from 'react-native';

export enum InputFieldVariant {
    Standard = 'standard',
    Filled = 'filled',
}

export interface InputFieldProps extends Omit<TextInputProps, 'onChangeText' | 'value'> {
    label?: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    keyboardType?: TextInputProps['keyboardType'];
    errorMessage?: string;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    variant?: InputFieldVariant;
    containerClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    errorClassName?: string;
    inputWrapperClassName?: string;
}

export interface InputFieldVariantStyles {
    container: string;
    label: string;
    inputWrapper: string;
    input: string;
    error: string;
    iconColor?: string;
}

export type InputFieldStyleMap = {
    [key in InputFieldVariant]: InputFieldVariantStyles;
};
