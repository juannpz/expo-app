import React from 'react';

import Card from './Card';
import { CardProps, CardVariant, CardVariantStyleMap } from './card.definition';

const variantStyles: CardVariantStyleMap = {
    [CardVariant.Primary]: {
        container:
            'bg-blue-500 border border-blue-600 rounded-lg shadow-md dark:bg-blue-700 dark:border-blue-800',
        title: 'text-white dark:text-blue-50',
        subtitle: 'text-blue-100 dark:text-blue-200',
        content: 'text-blue-50 dark:text-blue-100',
        iconContainer: '',
    },
    [CardVariant.Secondary]: {
        container:
            'bg-gray-100 border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700',
        title: 'text-gray-800 dark:text-gray-100',
        subtitle: 'text-gray-600 dark:text-gray-400',
        content: 'text-gray-700 dark:text-gray-300',
    },
    [CardVariant.Outlined]: {
        container: 'bg-transparent border border-gray-400 rounded-lg dark:border-gray-600',
        title: 'text-gray-800 dark:text-gray-100',
        subtitle: 'text-gray-600 dark:text-gray-400',
        content: 'text-gray-700 dark:text-gray-300',
    },
    [CardVariant.Elevated]: {
        container:
            'bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-900 dark:border-gray-700',
        title: 'text-gray-900 dark:text-gray-50',
        subtitle: 'text-gray-700 dark:text-gray-300',
        content: 'text-gray-800 dark:text-gray-200',
    },
    [CardVariant.Info]: {
        container:
            'bg-sky-100 border border-sky-300 rounded-lg shadow-md dark:bg-sky-800 dark:border-sky-700',
        title: 'text-sky-700 dark:text-sky-100',
        subtitle: 'text-sky-600 dark:text-sky-300',
        content: 'text-sky-700 dark:text-sky-200',
    },
    [CardVariant.Success]: {
        container:
            'bg-green-100 border border-green-300 rounded-lg shadow-md dark:bg-green-800 dark:border-green-700',
        title: 'text-green-700 dark:text-green-100',
        subtitle: 'text-green-600 dark:text-green-300',
        content: 'text-green-700 dark:text-green-200',
    },
    [CardVariant.Warning]: {
        container:
            'bg-yellow-100 border border-yellow-300 rounded-lg shadow-md dark:bg-yellow-800 dark:border-yellow-700',
        title: 'text-yellow-700 dark:text-yellow-100',
        subtitle: 'text-yellow-600 dark:text-yellow-300',
        content: 'text-yellow-700 dark:text-yellow-200',
    },
    [CardVariant.Danger]: {
        container:
            'bg-red-100 border border-red-300 rounded-lg shadow-md dark:bg-red-800 dark:border-red-700',
        title: 'text-red-700 dark:text-red-100',
        subtitle: 'text-red-600 dark:text-red-300',
        content: 'text-red-700 dark:text-red-200',
    },
};

const CardFactory = (variant: CardVariant = CardVariant.Primary) => {
    const styles = variantStyles[variant];

    const SpecificCard: React.FC<Omit<CardProps, 'variant'>> = (props) => {
        return <Card {...props} variant={variant} variantStyles={styles} />;
    };

    SpecificCard.displayName = `Card(${variant.charAt(0).toUpperCase() + variant.slice(1)})`;
    return SpecificCard;
};

export default CardFactory;
