import { preloadModule } from "react-dom";
import { css } from "../libs/utils/css";

export default function Styles() {
    const __modules__ = preloadModule(
        "https://replit.com/@DaviSpindola/akjfgalkglah#bunfig.toml",
        {
            crossOrigin: "anonymous",
            as: "embed",
            integrity: "sha512-4Z7J+8t/R4f+3zqLkH+r/",
        },
    );

    return (
        <>
            {__modules__}
            <style data-context={"client?loader=.css"} data-id={"global-style"}>
                {css`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        all: unset;
                    }

                    :root {
                        --color-primary: #0070f3;
                        --color-secondary: #e1e1e1;
                        --color-tertiary: #f5f5f5;
                        --color-quaternary: #ffffff;
                        --color-quinary: #000000;
                        --color-senary: #2b2b2b;

                        --font-mono: "IBM Plex Mono", monospace;
                        --font-sans: "IBM Plex Sans", sans-serif;
                        --font-fira: "Fira Code", monospace;

                        --text-md: 1.2rem;
                        --text-lg: 1.5rem;
                        --text-xl: 2rem;

                        --bg-gradient-0: linear-gradient(
                            to right,
                            var(--color-primary),
                            var(--color-secondary),
                            var(--color-tertiary)
                        );

                        --bg-gradient-1: linear-gradient(
                            to right,
                            var(--color-primary),
                            var(--color-secondary),
                            var(--color-tertiary)
                        );

                        --font-family: var(--font-sans);

                        --font-size: var(--text-md);
                        --font-size-sm: var(--text-lg);
                        --font-size-lg: var(--text-xl);

                        --float-element: float-element;
                        --float-element + * {
                            clear: both;
                        }
                    }
                `}
            </style>
        </>
    );
}
