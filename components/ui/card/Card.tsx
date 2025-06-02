import React from 'react';
import { View, Text, Pressable } from 'react-native'; // Importar directamente de react-native

import { CardProps, CardVariantStyles } from './card.definition'; // Asumiendo que renombraste card.definition.ts a Card.types.ts

interface InternalCardProps extends CardProps {
    variantStyles: CardVariantStyles; // Estilos específicos de la variante inyectados por la fábrica
}

const Card: React.FC<InternalCardProps> = ({
    children,
    title,
    subtitle,
    icon,
    variantStyles,
    className = '',
    titleClassName = '',
    subtitleClassName = '',
    contentClassName = '',
    headerComponent,
    footerComponent,
    onPress,
}) => {
    const hasHeaderContent = title || subtitle || icon || headerComponent;

    const cardContent = (
        <>
            {headerComponent}
            {hasHeaderContent && !headerComponent && (
                <View className="flex-row items-start p-4">
                    {' '}
                    {/* Usar View directamente */}
                    {icon && (
                        <View className={`mr-3 ${variantStyles.iconContainer || ''}`}>{icon}</View>
                    )}
                    <View className="flex-1">
                        {title && (
                            <Text
                                className={`text-lg font-semibold ${variantStyles.title} ${titleClassName}`}>
                                {' '}
                                {/* Usar Text directamente */}
                                {title}
                            </Text>
                        )}
                        {subtitle && (
                            <Text
                                className={`mt-1 text-sm ${variantStyles.subtitle} ${subtitleClassName}`}>
                                {subtitle}
                            </Text>
                        )}
                    </View>
                </View>
            )}

            {children && (
                <View className={`p-4 ${variantStyles.content} ${contentClassName}`}>
                    {children}
                </View>
            )}

            {footerComponent && (
                <View className="border-t border-gray-200 p-4 dark:border-gray-700">
                    {footerComponent}
                </View>
            )}
        </>
    );

    if (onPress) {
        return (
            <Pressable // Usar Pressable directamente
                className={`overflow-hidden ${variantStyles.container} ${className}`}
                onPress={onPress}>
                {cardContent}
            </Pressable>
        );
    }

    return (
        <View className={`overflow-hidden ${variantStyles.container} ${className}`}>
            {cardContent}
        </View>
    );
};

export default Card;
