'use client'
import { Card as BaseCard, type CardProps } from 'antd';

export const Card = ({ children, ...props } : CardProps) => {
    return <BaseCard {...props}>{children}</BaseCard>;
};

export const CardMeta = BaseCard.Meta;