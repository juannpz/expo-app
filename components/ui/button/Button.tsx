import React from 'react';
import { Pressable, Text, ActivityIndicator, View } from 'react-native';

import { ButtonProps, ButtonVariantStyles, ButtonSizeStyles } from './button.definition';

interface InternalButtonProps extends ButtonProps {
    variantStyles: ButtonVariantStyles;
    sizeStyles: ButtonSizeStyles;
}

const Button: React.FC<InternalButtonProps> = ({
    children,
    title,
    onPress,
    variantStyles,
    sizeStyles,
    isLoading = false,
    disabled = false,
    leftIcon,
    rightIcon,
    className = '',
    textClassName = '',
    fullWidth = false,
}) => {
    const isDisabled = disabled || isLoading;
    const buttonContent = title || children;

    return (
        <Pressable
            onPress={onPress}
            disabled={isDisabled}
            className={`
        flex-row items-center justify-center rounded-md
        ${sizeStyles.container}
        ${variantStyles.container}
        ${fullWidth ? 'w-full' : ''}
        ${isDisabled ? 'opacity-70' : ''}
        ${className}
      `}>
            {isLoading ? (
                <ActivityIndicator size="small" color={variantStyles.loadingColor || 'white'} />
            ) : (
                <>
                    {leftIcon && (
                        <View className={sizeStyles.iconMargin}>
                            {React.cloneElement(leftIcon, {
                                /* puedes pasar props de estilo aquí */
                            })}
                        </View>
                    )}
                    {typeof buttonContent === 'string' ? (
                        <Text
                            className={`${sizeStyles.text} ${variantStyles.text} ${textClassName}`}>
                            {buttonContent}
                        </Text>
                    ) : (
                        buttonContent // Si children no es string, se renderiza tal cual
                    )}
                    {rightIcon && (
                        <View className={sizeStyles.iconMargin}>
                            {React.cloneElement(rightIcon, {
                                /* puedes pasar props de estilo aquí */
                            })}
                        </View>
                    )}
                </>
            )}
        </Pressable>
    );
};

export default Button;
