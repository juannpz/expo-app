import React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import InputField from './InputField'; // Asumiendo que InputField.tsx está en la misma carpeta
import { InputFieldProps, InputFieldVariant, InputFieldStyleMap } from './inputField.definition'; // Usa tu nombre de archivo

const inputFieldStyles: InputFieldStyleMap = {
    [InputFieldVariant.Standard]: {
        container: 'mb-4',
        label: 'mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-300',
        inputWrapper: 'bg-white dark:bg-slate-800 border',
        input: 'text-slate-900 dark:text-slate-50',
        // --- CAMBIO AQUÍ ---
        error: 'mt-1.5 text-sm text-red-600 dark:text-red-400', // Texto más grande, margen ajustado
        // --- FIN DEL CAMBIO ---
        iconColor: '#64748b',
    },
    [InputFieldVariant.Filled]: {
        container: 'mb-4',
        label: 'mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-300',
        inputWrapper:
            'bg-slate-100 dark:bg-slate-700 border border-transparent focus-within:border-sky-500',
        input: 'text-slate-900 dark:text-slate-50',
        error: 'mt-1.5 text-sm text-red-600 dark:text-red-400', // Aplicar consistencia
        iconColor: '#64748b',
    },
};

type ManufacturedInputFieldProps = Omit<InputFieldProps, 'variantStyles'>;

const InputFieldFactory = (defaultVariant: InputFieldVariant = InputFieldVariant.Standard) => {
    const ManufacturedComponent = React.forwardRef<RNTextInput, ManufacturedInputFieldProps>(
        (props, ref) => {
            const variantToUse = props.variant || defaultVariant;
            const finalStyles = inputFieldStyles[variantToUse];

            return (
                <InputField
                    {...props}
                    ref={ref}
                    variant={variantToUse}
                    variantStyles={finalStyles}
                />
            );
        }
    );

    ManufacturedComponent.displayName = `InputFieldFactory(${
        defaultVariant.charAt(0).toUpperCase() + defaultVariant.slice(1)
    })`;

    return ManufacturedComponent;
};

export default InputFieldFactory;
