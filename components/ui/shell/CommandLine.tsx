'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useRef, useState, type ReactNode } from 'react';

import { COMMAND_NAMES, entriesFor, runCommand, type Cwd } from '@/components/ui/shell/registry';
import { usePaneNavigation } from '@/components/layout/split-state';

interface Block {
    id: number;
    command: string;
    output: ReactNode;
}

interface CommandLineProps {
    cwd: Cwd;
    /** Rendered above the prompt on first paint, e.g. the page's own listing. */
    children?: ReactNode;
    autoFocus?: boolean;
}

export const Prompt = ({ cwd }: { cwd: Cwd }) => (
    <>
        <span className="term-host">david@obadafidi</span>
        <span className="term-sym">:{cwd}$</span>
    </>
);

export const CommandLine = ({ cwd, children, autoFocus = false }: CommandLineProps) => {
    const router = useRouter();
    const paneNavigate = usePaneNavigation();
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const [historyIdx, setHistoryIdx] = useState(-1);
    const nextId = useRef(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const endRef = useRef<HTMLDivElement>(null);
    const inputId = `shell-${cwd.replace(/[^a-z0-9]+/gi, '-')}`;

    const submit = useCallback(
        (command: string) => {
            const output = runCommand(command, {
                cwd,
                navigate: href => (paneNavigate ? paneNavigate(href) : router.push(href)),
                clear: () => setBlocks([]),
            });

            if (output === 'CLEARED') return;
            if (output === null) return;

            setBlocks(prev => [...prev, { id: nextId.current++, command, output }]);
            window.requestAnimationFrame(() =>
                endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }),
            );
        },
        [cwd, paneNavigate, router],
    );

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const command = input.trim();
        if (!command) return;
        setHistory(prev => [command, ...prev]);
        setHistoryIdx(-1);
        setInput('');
        submit(command);
    };

    const complete = () => {
        const parts = input.split(/\s+/);
        const isFirstWord = parts.length === 1;
        const fragment = parts[parts.length - 1] ?? '';
        if (!fragment) return;

        const pool = isFirstWord ? COMMAND_NAMES : entriesFor(cwd);
        const matches = pool.filter(item => item.startsWith(fragment));
        if (matches.length === 0) return;

        const shared = matches.reduce((acc, item) => {
            let i = 0;
            while (i < acc.length && i < item.length && acc[i] === item[i]) i++;
            return acc.slice(0, i);
        });

        parts[parts.length - 1] = shared;
        setInput(parts.join(' ') + (matches.length === 1 ? ' ' : ''));
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            complete();
            return;
        }
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            const idx = Math.min(historyIdx + 1, history.length - 1);
            if (idx >= 0) {
                setHistoryIdx(idx);
                setInput(history[idx]);
            }
            return;
        }
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            const idx = historyIdx - 1;
            setHistoryIdx(idx);
            setInput(idx >= 0 ? history[idx] : '');
        }
    };

    return (
        <div
            className="min-h-full"
            role="presentation"
            onClick={event => {
                if (!(event.target as HTMLElement).closest('a,button')) {
                    inputRef.current?.focus();
                }
            }}
        >
            {children}

            {blocks.map(block => (
                <div key={block.id} className="mt-3">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                        <Prompt cwd={cwd} />
                        <span className="term-cmd">{block.command}</span>
                    </div>
                    {block.output}
                </div>
            ))}

            <form onSubmit={onSubmit} className="mt-3 flex items-baseline gap-x-2">
                <Prompt cwd={cwd} />
                <label htmlFor={inputId} className="sr-only">
                    Terminal command
                </label>
                <input
                    id={inputId}
                    ref={inputRef}
                    value={input}
                    onChange={event => setInput(event.target.value)}
                    onKeyDown={onKeyDown}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    autoFocus={autoFocus}
                    aria-label="Terminal command"
                    className="term-cmd min-w-0 flex-1 bg-transparent outline-none"
                />
            </form>

            <div ref={endRef} />
        </div>
    );
};
