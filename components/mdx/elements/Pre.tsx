'use client';

import { HTMLAttributes, ReactNode, isValidElement, useRef, useState } from 'react';

interface PreProps extends HTMLAttributes<HTMLPreElement> {
    children: ReactNode;
}

const normalizeLanguage = (value?: string) => {
    if (!value) return undefined;
    const cleaned = value.replace(/^language[-:]/i, '').trim().toLowerCase();
    if (cleaned.length === 0) return undefined;
    if (cleaned === 'plaintext') return 'text';
    return cleaned;
};

const readLanguageFromClass = (value?: string) => {
    if (!value) return undefined;
    const match = value.match(/language-([a-z0-9#+-]+)/i);
    return normalizeLanguage(match?.[1]);
};

const readLanguage = (props: HTMLAttributes<HTMLPreElement>, children: ReactNode) => {
    const fromProps = normalizeLanguage(
        typeof props['data-language'] === 'string' ? props['data-language'] : undefined,
    );
    if (fromProps) return fromProps;

    const fromPreClass = readLanguageFromClass(props.className);
    if (fromPreClass) return fromPreClass;

    if (isValidElement(children)) {
        const childProps = children.props as {
            className?: string;
            'data-language'?: string;
        };
        const fromChildData = normalizeLanguage(childProps['data-language']);
        if (fromChildData) return fromChildData;
        return readLanguageFromClass(childProps.className);
    }

    return undefined;
};

const Pre = ({ children, ...props }: PreProps) => {
    const language = readLanguage(props, children) ?? 'text';
    const preRef = useRef<HTMLPreElement>(null);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        const codeText = preRef.current?.innerText ?? '';
        if (!codeText) return;

        try {
            await navigator.clipboard.writeText(codeText);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1400);
        } catch {
            setCopied(false);
        }
    };

    return (
        <div className="mdx-code-block" data-language={language}>
            <div className="mdx-code-toolbar">
                <span className="mdx-code-language">{language}</span>
                <button
                    type="button"
                    className="mdx-code-copy"
                    onClick={handleCopy}
                    aria-label="Copy code snippet"
                    title="Copy code"
                >
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
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
            </div>
            <pre ref={preRef} {...props} data-language={language}>
                {children}
            </pre>
        </div>
    );
};

export default Pre;
