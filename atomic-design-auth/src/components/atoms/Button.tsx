// src/components/atoms/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
}

export const Button = ({ variant = 'primary', fullWidth, style, ...props }: ButtonProps) => {
  const getBackgroundColor = () => {
    if (variant === 'secondary') return 'var(--secondary-color)';
    if (variant === 'danger') return 'var(--danger-color)';
    return 'var(--primary-color)';
  };

  return (
    <button
      {...props}
      style={{
        backgroundColor: getBackgroundColor(),
        color: 'white',
        padding: '0.75rem 1rem',
        border: 'none',
        borderRadius: 'var(--border-radius)',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: '600',
        width: fullWidth ? '100%' : 'auto',
        transition: 'opacity 0.2s',
        ...style
      }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
      onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
    />
  );
};