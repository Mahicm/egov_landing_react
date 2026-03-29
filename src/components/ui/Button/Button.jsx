import './Button.css';

/**
 * Generic Button / anchor component.
 * variant: 'primary' | 'outline' | 'dark' | 'ghost'
 * Renders an <a> when href is provided, else <button>.
 */
export function Button({ children, variant = 'primary', href, onClick, className = '', ...props }) {
  const cls = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
