import React from 'react';

import Button from './Button';
import { ButtonProps, ButtonVariant, ButtonSize, ButtonStyleMap } from './button.definition';

const buttonStyles: ButtonStyleMap = {
    variants: {
        [ButtonVariant.Primary]: {
            container: 'bg-sky-600 border border-sky-600 dark:bg-sky-500 dark:border-sky-500',
            text: 'text-white font-semibold',
            loadingColor: '#FFFFFF',
        },
        [ButtonVariant.Secondary]: {
            container:
                'bg-slate-200 border border-slate-200 dark:bg-slate-700 dark:border-slate-700',
            text: 'text-slate-800 dark:text-slate-100 font-semibold',
            loadingColor: '#334155',
        },
        [ButtonVariant.Outline]: {
            container: 'bg-transparent border border-sky-600 dark:border-sky-500',
            text: 'text-sky-600 dark:text-sky-500 font-semibold',
            loadingColor: '#0284c7',
        },
        [ButtonVariant.Ghost]: {
            container: 'bg-transparent border-transparent',
            text: 'text-sky-600 dark:text-sky-500 font-medium',
            loadingColor: '#0284c7',
        },
        [ButtonVariant.Destructive]: {
            container: 'bg-red-600 border border-red-600 dark:bg-red-500 dark:border-red-500',
            text: 'text-white font-semibold',
            loadingColor: '#FFFFFF',
        },
        [ButtonVariant.Link]: {
            container: 'bg-transparent border-transparent px-1 py-0.5',
            text: 'text-sky-600 dark:text-sky-500 font-medium underline',
            loadingColor: '#0284c7',
        },
    },
    sizes: {
        [ButtonSize.Small]: {
            container: 'px-3 py-1.5',
            text: 'text-xs',
            iconMargin: 'mr-1.5 last:ml-1.5 first:mr-0',
        },
        [ButtonSize.Medium]: {
            container: 'px-4 py-2',
            text: 'text-sm',
            iconMargin: 'mr-2 last:ml-2 first:mr-0',
        },
        [ButtonSize.Large]: {
            container: 'px-6 py-3',
            text: 'text-base',
            iconMargin: 'mr-2.5 last:ml-2.5 first:mr-0',
        },
    },
};

type SpecificButtonProps = Omit<ButtonProps, 'variantStyles' | 'sizeStyles'>;

const ButtonFactory = (
    defaultVariant: ButtonVariant = ButtonVariant.Primary,
    defaultSize: ButtonSize = ButtonSize.Medium
) => {
    const SpecificButton: React.FC<SpecificButtonProps> = (props) => {
        const variantToUse = props.variant || defaultVariant;
        const sizeToUse = props.size || defaultSize;

        const finalVariantStyles = buttonStyles.variants[variantToUse];
        const finalSizeStyles = buttonStyles.sizes[sizeToUse];

        return (
            <Button
                {...props}
                variant={variantToUse}
                size={sizeToUse}
                variantStyles={finalVariantStyles}
                sizeStyles={finalSizeStyles}
            />
        );
    };

    SpecificButton.displayName = `Button(Default: ${
        defaultVariant.charAt(0).toUpperCase() + defaultVariant.slice(1)
    }, ${defaultSize.toUpperCase()})`;
    return SpecificButton;
};

export default ButtonFactory;
