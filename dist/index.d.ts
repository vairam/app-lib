import React from 'react';

interface RatingProps {
    idPrefix: string;
    title?: string;
    theme: "primary" | "secondary";
    disabled?: boolean;
}

declare const Rating: React.FC<RatingProps>;

interface ButtonProps {
    children?: string;
    disabled?: boolean;
}

declare const Button: React.FC<ButtonProps>;

export { Button, Rating };
