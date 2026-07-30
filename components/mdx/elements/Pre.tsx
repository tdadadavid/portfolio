'use client';

import { useRef, useState, type ComponentPropsWithoutRef } from 'react';

/*
 * rehype-pretty-code hands us a <pre> already carrying data-language and, if
 * the fence declared one, data-title. We wrap it in the chrome: language chip,
 * optional filename and a copy button. Token colours come from Shiki as inline
 * custom properties, so nothing here touches colour.
 */
type PreProps = ComponentPropsWithoutRef<'pre'> & {
    'data-language'?: string;
};

const CopyIcon = () => (
    <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
);

const CheckIcon = () => (
    <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

const Pre = ({ children, ...props }: PreProps) => {
    const language = props['data-language'] ?? 'text';
    const preRef = useRef<HTMLPreElement>(null);
    const [copied, setCopied] = useState(false);

    const onCopy = async () => {
        const text = preRef.current?.textContent ?? '';
        if (!text) return;

        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
        } catch {
            setCopied(false);
        }
    };

    return (
        <div className="mdx-code-block">
            <div className="mdx-code-toolbar">
                <span className="mdx-code-language">{language}</span>
                <button
                    type="button"
                    className="mdx-code-copy"
                    onClick={onCopy}
                    aria-label={copied ? 'Copied' : 'Copy code'}
                >
                    {copied ? <CheckIcon /> : <CopyIcon />}
                    <span>{copied ? 'copied' : 'copy'}</span>
                </button>
            </div>
            <pre ref={preRef} {...props}>
                {children}
            </pre>
        </div>
    );
};

export default Pre;
