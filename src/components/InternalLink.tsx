import React from 'react';

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  onNavigate: (path: string) => void;
};

/** Real links remain crawlable and work with JavaScript disabled or in a new tab. */
export const InternalLink: React.FC<Props> = ({href, onNavigate, onClick, children, ...props}) => (
  <a {...props} href={href} onClick={event => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
        event.shiftKey || event.altKey || props.target || props.download) return;
    event.preventDefault();
    onNavigate(href);
  }}>{children}</a>
);
