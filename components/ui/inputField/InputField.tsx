import React from 'react';
import { View, Text, TextInput as RNTextInput } from 'react-native'; // RNTextInput para claridad

import { InputFieldProps, InputFieldVariantStyles } from './inputField.definition'; // Usa tu nombre de archivo

// Las props que el componente base InputField espera, incluyendo las inyectadas por la fábrica
// y las originales de TextInputProps (que incluyen 'ref' implícitamente).
interface InternalInputFieldProps extends InputFieldProps {
    variantStyles: InputFieldVariantStyles;
}

// El tipo de la ref que se reenvía: una referencia a un TextInput de React Native.
type InputFieldRef = RNTextInput;

const InputField = React.forwardRef<InputFieldRef, InternalInputFieldProps>(
    (
        {
            label,
            value,
            onChangeText,
            placeholder,
            secureTextEntry,
            keyboardType = 'default',
            errorMessage,
            leftIcon,
            rightIcon,
            variantStyles,
            containerClassName = '',
            labelClassName = '',
            inputClassName = '',
            errorClassName = '',
            inputWrapperClassName = '',
            ...restOfProps // Pasa el resto de las props al TextInput
        },
        ref // La ref se recibe como segundo argumento
    ) => {
        const hasError = Boolean(errorMessage);

        const clonedLeftIcon = leftIcon
            ? React.cloneElement(leftIcon, {
                  // color: leftIcon.props.color || variantStyles.iconColor,
              })
            : null;

        const clonedRightIcon = rightIcon
            ? React.cloneElement(rightIcon, {
                  // color: rightIcon.props.color || variantStyles.iconColor,
              })
            : null;

        return (
            <View className={`${variantStyles.container} ${containerClassName}`}>
                {label && (
                    <Text className={`${variantStyles.label} ${labelClassName}`}>{label}</Text>
                )}
                <View
                    className={`
          flex-row items-center rounded-md
          ${variantStyles.inputWrapper}
          ${hasError ? 'border-red-500 dark:border-red-400' : 'border-slate-300 dark:border-slate-600'}
          ${inputWrapperClassName}
        `}>
                    {clonedLeftIcon && <View className="pl-3 pr-2">{clonedLeftIcon}</View>}
                    <RNTextInput
                        ref={ref} // << --- AQUÍ SE PASA LA REF --- >>
                        className={`
            flex-1 py-2.5 text-base
            ${!leftIcon ? 'px-3' : ''}
            ${!rightIcon ? 'pr-3' : ''}
            ${variantStyles.input}
            ${inputClassName}
          `}
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        placeholderTextColor="#94a3b8" // slate-400
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType}
                        autoCapitalize="none"
                        {...restOfProps}
                    />
                    {clonedRightIcon && <View className="pl-2 pr-3">{clonedRightIcon}</View>}
                </View>
                {hasError && (
                    <Text className={`${variantStyles.error} ${errorClassName}`}>
                        {errorMessage}
                    </Text>
                )}
            </View>
        );
    }
);

InputField.displayName = 'InputField'; // displayName para forwardRef

export default InputField;
