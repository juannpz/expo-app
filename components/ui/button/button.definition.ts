export enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Outline = 'outline',
    Ghost = 'ghost',
    Destructive = 'destructive',
    Link = 'link',
}

export enum ButtonSize {
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
}

export interface ButtonProps {
    children?: React.ReactNode;
    title?: string;
    onPress?: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    disabled?: boolean;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    className?: string;
    textClassName?: string;
    fullWidth?: boolean;
}

export interface ButtonVariantStyles {
    container: string;
    text: string;
    loadingColor?: string;
}

export type ButtonSizeStyles = {
    container: string;
    text: string;
    iconMargin: string;
};

export type ButtonStyleMap = {
    variants: { [key in ButtonVariant]: ButtonVariantStyles };
    sizes: { [key in ButtonSize]: ButtonSizeStyles };
};
