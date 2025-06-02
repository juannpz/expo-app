export enum CardVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Outlined = 'outlined',
    Elevated = 'elevated',
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Danger = 'danger',
}

export interface CardProps {
    children?: React.ReactNode;
    title?: string;
    subtitle?: string;
    icon?: React.ReactElement;
    variant?: CardVariant;
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    contentClassName?: string;
    headerComponent?: React.ReactNode;
    footerComponent?: React.ReactNode;
    onPress?: () => void;
}

export interface CardVariantStyles {
    container: string;
    title: string;
    subtitle: string;
    content: string;
    iconContainer?: string;
}

export type CardVariantStyleMap = {
    [key in CardVariant]: CardVariantStyles;
};
